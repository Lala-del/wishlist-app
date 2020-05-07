import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { addProject, getSections } from "../store/projects";

const mapStateToProps = (state) => ({
  sections: getSections(state),
});

export const CreateProjectScreen = connect(mapStateToProps, { addProject })(
  (props) => {
    const [fields, setFields] = useState({
      sectionId: "",
      name: "",
      image: "",
    });

    const handleFieldChange = (name, value) => {
      setFields((fields) => ({
        ...fields,
        [name]: value,
      }));
    };

    const createProject = () => {
      for (let key in fields) {
        if (fields[key].trim() === "") {
          return;
        }
      }

      props.addProject(fields);
      props.navigation.navigate("Home");
    };

    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Create Project</Text>
        <Text style={styles.smallHeading}>Choose Section</Text>

        <View style={styles.sectionsRow}>
          {props.sections.map(({ name, id }) => (
            <View key={id}>
              <TouchableOpacity
                onPress={() => handleFieldChange("sectionId", id)}
              >
                <Text
                  style={{
                    fontWeight: fields.sectionId === id ? "bold" : "400",
                  }}
                >
                  {name}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <TextInput
          style={styles.field}
          onChangeText={(value) => handleFieldChange("name", value)}
          placeholder="Project Name"
        />
        <TextInput
          style={styles.field}
          onChangeText={(value) => handleFieldChange("image", value)}
          placeholder="Project Image Url"
        />
        <View style={styles.btn}>
          <Button title="Create Section" onPress={createProject} />
        </View>
      </View>
    );
  }
);

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
  smallHeading: {
    fontSize: 18,
    textAlign: "center",
  },
  sectionsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  field: {
    backgroundColor: "#eeeeee",
    height: 40,
    marginTop: 15,
    borderRadius: 20,
    paddingHorizontal: 15,
  },
  btn: {
    marginTop: 15,
  },
});
