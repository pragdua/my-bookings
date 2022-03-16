import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  FlatList,
  TextInput,
} from "react-native-web";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source="./header/Back.svg" style={styles.backIcon} />
      <Text>My Bookings</Text>
      <Image source="./header/Help.svg" style={styles.helpIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: "16px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)",
  },
  helpIcon: {
    width: "16px",
    height: "16px",
  },
  backIcon: {
    width: "6.67px",
    height: "13.3px",
  },
});

export default Header;
