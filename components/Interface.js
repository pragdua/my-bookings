import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  FlatList,
  TextInput,
} from "react-native-web";
import Header from "./Header";
import UpcomingCard from "./UpcomingCard";
// import { MotiView } from "moti";

const Interface = () => {
  const [tab, setTab] = useState(0);

  return (
    <View>
      <Header />
      <View style={styles.btnContainer}>
        <View style={styles.btn}>
          <Text>Upcoming</Text>
        </View>
        <View style={styles.btn}>
          <Text>Previous</Text>
        </View>
      </View>
      <View style={styles.tabLine}></View>
      <UpcomingCard />
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: "1px",
    borderColor: "#E2E2E2",
  },
  btn: {
    padding: "16px",
    flexGrow: 1,
    textAlign: "center",
  },
  tabLine: {
    width: "50%",
    height: "1px",
    borderTopWidth: "2px",
    borderColor: "#8000FF",
    transform: "translateX(187.5px)",
  },
});

export default Interface;
