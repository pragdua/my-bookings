import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  TextInput,
} from "react-native-web";

import Interface from "../components/Interface";
export default function Home() {
  return (
    <View style={styles.screen}>
      <Interface />
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    width: "100%",
    maxWidth: "375px",
    marginLeft: "auto",
    marginRight: "auto",
    border: "2px",
  },
});
