import { View, StyleSheet } from "react-native";

export default function Sperator() {
  return <View style={styles.line} />;
}

const styles = StyleSheet.create({
  line: {
    marginLeft: 18,
    height: 1,
    backgroundColor: "#ddd",
  },
});
