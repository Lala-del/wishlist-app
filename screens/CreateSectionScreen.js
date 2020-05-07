import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import { connect } from "react-redux";
import { addSection } from "../store/projects";

export const CreateSectionScreen = connect(null, { addSection })((props) => {
  const [sectionName, setSectionName] = useState("");

  const createSection = () => {
    if (sectionName.trim() !== "") {
      props.addSection(sectionName);

      // Same as
      // props.dispatch(addSection(sectionName))
      // props.dispatch({
      //   type: ADD_SECTION,
      //   payload: sectionName,
      // })

      props.navigation.navigate("Home");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create Section</Text>
      <TextInput style={styles.field} onChangeText={setSectionName} />
      <View>
        <Button title="Create Section" onPress={createSection} />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
  },
  field: {
    backgroundColor: "#eeeeee",
    height: 40,
    marginVertical: 15,
    borderRadius: 20,
    paddingHorizontal: 15,
  },
});
