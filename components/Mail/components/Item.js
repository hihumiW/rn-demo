import { View, StyleSheet, Text, TouchableHighlight } from "react-native";
import { useMemo } from "react";

function Item(props) {
  const { itemData } = props;
  const timeStr = useMemo(() => {
    return itemData.time.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }, [itemData.time]);
  return (
    <TouchableHighlight
      underlayColor="#ccc"
      delayPressIn={80}
      onPress={() => {
        console.log("pressed!");
      }}
    >
      <View style={styles.itemContainer}>
        <View style={styles.titleBox}>
          <Text style={styles.titleText} numberOfLines={1}>
            {itemData.title}
          </Text>
          <Text style={styles.timeText}>{timeStr}</Text>
        </View>
        <Text style={styles.topicText} numberOfLines={1}>
          {itemData.topic}
        </Text>
        <Text style={styles.contentText} numberOfLines={2}>
          {itemData.content}
        </Text>
      </View>
    </TouchableHighlight>
  );
}

export default Item;
export const getItemLayout = (data, index) => {
  return {
    length: data.length,
    offset: ITEM_HEIGHT * index,
    index,
  };
};
const ITEM_HEIGHT = 90;
const styles = StyleSheet.create({
  itemContainer: {
    marginLeft: 24,
    height: ITEM_HEIGHT,
    paddingVertical: 8,
    paddingRight: 16,
    justifyContent: "space-between",
  },
  titleBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  titleText: {
    fontWeight: "bold",
    color: "#000",
    fontSize: 17,
    marginRight: 12,
  },
  timeText: {
    position: "absolute",
    right: 0,
    top: 0,
    fontSize: 15,
    color: "#999",
  },
  topicText: {
    fontSize: 15,
    color: "#000",
  },
  contentText: {
    fontSize: 15,
    color: "#999",
  },
});
