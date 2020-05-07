import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { connect } from "react-redux";

import { getSections } from "../../store/projects";
import { SectionItem } from "./components/SectionItem";

const mapStateToProps = (state) => ({
  sections: getSections(state),
});

export const HomeScreen = connect(mapStateToProps)((props) => {
  const { sections } = props;
  return (
    <View style={styles.container}>
      {sections.map((section) => (
        <SectionItem key={section.id} section={section} />
      ))}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 20,
  },
});
