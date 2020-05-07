import React from "react";
import { StyleSheet, View, Text, FlatList, Image } from "react-native";

export const SectionItem = ({ section }) => {
  const { name, projectsList } = section;
  const projectsCount = projectsList.length;

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.heading}>{name}</Text>
        <Text style={styles.count}>{projectsCount}</Text>
      </View>
      <FlatList
        contentContainerStyle={styles.projectsList}
        horizontal={true}
        data={projectsList}
        renderItem={({ item }) => (
          <View style={styles.projectCard}>
            <Image style={styles.projectImage} source={{ uri: item.image }} />
            <Text style={styles.projectTitle}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 50,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
  },
  count: {
    fontSize: 22,
    fontWeight: "bold",
    color: "rgba(0,0,0,0.5)",
  },
  projectsList: {
    paddingLeft: 20,
    paddingBottom: 5,
  },
  projectCard: {
    width: 200,
    height: 200,
    borderRadius: 15,
    overflow: "hidden",
    marginRight: 30,
    justifyContent: "flex-end",
    padding: 15,
    backgroundColor: "black",
  },
  projectImage: {
    ...StyleSheet.absoluteFill,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "white",
  },
});
