import React, { useContext } from "react";
import { Input, Button } from "react-native-elements";
import Spacer from "./Spacer.component";
import { Context as LocationContext } from "../contexts/location.context";
const TrackForm = () => {
  const {
    state: { name, recording },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

  return (
    <>
      <Spacer>
        <Input
          placeholder="Enter name"
          onChangeText={changeName}
          value={name}
        />
      </Spacer>
      {recording ? (
        <Button
          title="Stop Recording"
          onPress={stopRecording}
          buttonStyle={{ backgroundColor: "rgb(255, 68, 99)" }}
        />
      ) : (
        <Button title="Start Recording" onPress={startRecording} />
      )}
    </>
  );
};

export default TrackForm;
