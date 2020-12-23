import { AsyncStorage } from "react-native";
import createData from "./createData.context";
import trackerApi from "../api/tracker";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "signin":
      return { errorMessage: "", token: action.payload };
    case "add_error":
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

const signup = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerApi.post("/signup", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({
      // Both sign up and sign in accomplish the same task
      // with our dispatch, aka the user gets signed in.
      // We therefore just have our one case, 'signin'
      type: "signin",
      payload: response.data.token,
    });

    navigate("TrackList");
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: "add_error",
      payload: "Something went wrong with Sign Up",
    });
  }
};

const signin = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerApi.post("/signin", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "signin", payload: response.data.token });
    navigate("TrackList");
  } catch (error) {
    dispatch({
      type: "add_error",
      payload: "Something went wrong with sign in",
    });
  }
};

const signout = (dispatch) => {
  return () => {};
};

export const { Provider, Context } = createData(
  authReducer,
  { signup, signin, signout },
  { token: null, errorMessage: "" }
);
