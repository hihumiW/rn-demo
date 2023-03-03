import { useCallback, useState, memo } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

function AppList() {
  const [data, setData] = useState(DATA);
  const [selectedId, setSelectedId] = useState();
  const [isRefreshing, setIsRereshing] = useState(false);
  const handleItemPress = useCallback(
    (id) => setSelectedId(id),
    [setSelectedId]
  );
  const loadData = () => {
    new Promise((r) => {
      setIsRereshing(true);
      setTimeout(() => {
        setData((prevData) => [makeData(), ...prevData]);
        setIsRereshing(false);
      }, 3000);
    });
  };

  const renderItem = useCallback(
    ({ item, index, separators }) => {
      const isSelected = item === selectedId;
      return (
        <ListItem
          data={item}
          index={index}
          onPress={handleItemPress}
          isSelected={isSelected}
        />
      );
    },
    [selectedId, handleItemPress]
  );

  return (
    <View style={{ borderColor: "red", borderWidth: 5, flex: 1 }}>
      <Text>List demo</Text>
      <FlatList
        style={styles.listContainer}
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        extraData={selectedId}
        ItemSeparatorComponent={Spearator}
        ListEmptyComponent={Empty}
        ListHeaderComponent={ListHeader}
        ListFooterComponent={ListFooter}
        contentContainerStyle={{
          alignItems: "stretch",
        }}
        getItemLayout={(data, index) => {
          return {
            length: data.length,
            offset: (LIST_ITEM_HEIGHT + SPERATOR_HEIGHT) * index,
            index,
          };
        }}
        onEndReached={(distanceFromEnd) => {
          console.log("ccccc end", distanceFromEnd);
        }}
        onEndReachedThreshold={1}
        refreshing={isRefreshing}
        onRefresh={loadData}
        //设置android RefreshControl component的偏移位置
        progressViewOffset={50}
      />
    </View>
  );
}
const keyExtractor = (data) => data;
const LIST_ITEM_HEIGHT = 60;
const ListItem = memo(({ data, index, onPress, isSelected }) => {
  return (
    <TouchableOpacity
      style={{
        height: LIST_ITEM_HEIGHT,
        justifyContent: "center",
        backgroundColor: isSelected ? "red" : "#f9c2ff",
      }}
      onPress={() => onPress(data)}
    >
      <Text
        style={{ fontSize: 22, fontWeight: "bold" }}
      >{`${index}__${data}`}</Text>
    </TouchableOpacity>
  );
});

const SPERATOR_HEIGHT = 1;
const Spearator = () => (
  <View style={{ height: SPERATOR_HEIGHT, backgroundColor: "#333" }} />
);
const Empty = () => (
  <View
    style={{
      padding: 20,
      alignItems: "center",
      backgroundColor: "gold",
      margin: 10,
      borderRadius: 8,
    }}
  >
    <Text style={{ fontSize: 22, fontWeight: "600" }}>No Data</Text>
  </View>
);

const ListHeader = () => {
  return (
    <View style={{ padding: 20, backgroundColor: "tomato" }}>
      <Text>header</Text>
    </View>
  );
};
const ListFooter = () => {
  return (
    <View style={{ padding: 20, backgroundColor: "grey" }}>
      <Text>footer</Text>
    </View>
  );
};
export default AppList;

const makeData = () => {
  return Math.random().toString(36).split(".")[1];
};

const DATA = Array(200).fill(undefined).map(makeData);

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
});
