import { View, Text, StyleSheet, TextInput } from "react-native";

export default function Header(props) {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>受信</Text>
      <View style={styles.searchBox}>
        <TextInput
          placeholder="検索"
          style={styles.searchText}
          blurOnSubmit
          value={props.value}
          onChangeText={props.onChangeText}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    rowGap: 10,
    padding: 16,
    paddingVertical: 10,
  },
  headerText: {
    fontSize: 38,
    fontWeight: "bold",
    marginLeft: 8,
  },
  searchBox: {
    borderRadius: 12,
    paddingVertical: 4,
    backgroundColor: "#ddd",
    paddingHorizontal: 12,
  },
  searchText: {
    height: 28,
    fontSize: 18,
  },
});
