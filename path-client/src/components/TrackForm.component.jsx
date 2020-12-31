import React, { useContext, useEffect } from "react";
import { Input, Button } from "react-native-elements";
import { Context as LocationContext } from "../contexts/location.context";
import { View, ScrollView } from "react-native";
import useSaveTrack from "../hooks/useSaveTrack";
import Spacer from "./Spacer.component";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

  const [saveTrack] = useSaveTrack();

  return (
    <ScrollView>
      <Spacer>
        <Input
          placeholder="Enter name"
          onChangeText={changeName}
          value={name}
        />
      </Spacer>

      <Spacer>
        {recording ? (
          <Button
            title="Stop Recording"
            onPress={stopRecording}
            buttonStyle={{ backgroundColor: "rgb(255, 68, 99)" }}
          />
        ) : (
          <Button title="Start Recording" onPress={startRecording} />
        )}
      </Spacer>

      <Spacer>
        {!recording && locations.length > 0 ? (
          <Button title="Save Recording" onPress={saveTrack} />
        ) : null}
      </Spacer>
    </ScrollView>
  );
};

export default TrackForm;
