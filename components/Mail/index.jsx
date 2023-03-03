import { View, StyleSheet, FlatList, Keyboard } from "react-native";
import { faker } from "@faker-js/faker";

import Header from "./components/Header";
import Item, { getItemLayout } from "./components/Item";
import { useCallback, useEffect, useMemo, useState } from "react";
import Sperator from "./components/Sperator";

function Mail() {
  const [data, setData] = useState(
    Array.from({ length: 50 }).map(() => makeAMailData())
  );

  const [searchText, setSearchText] = useState("");
  const headerElement = useMemo(() => {
    return <Header value={searchText} onChangeText={setSearchText} />;
  }, [searchText, setSearchText]);

  const [isRefreshing, setIsRefreshing] = useState(false);
  const handleRefresh = useCallback(() => {
    setIsRefreshing(true);
    generateOneDataAysnc().then((data) => {
      setData((prevDate) => [data, ...prevDate]);
      setIsRefreshing(false);
    });
  }, []);

  const [isKeyboardCollapse, setIsKeyboardCollapse] = useState(false);
  useEffect(() => {
    Keyboard.addListener("keyboardDidHide", () => setIsKeyboardCollapse(true));
    Keyboard.addListener("keyboardDidShow", () => setIsKeyboardCollapse(false));
    return () => {
      Keyboard.removeAllListeners("keyboardDidHide");
      Keyboard.removeAllListeners("keyboardDidShow");
    };
  }, []);

  const renderListData = useMemo(() => {
    return searchText
      ? data?.filter(({ title }) => {
          return title.indexOf(searchText) !== -1;
        })
      : data;
  }, [data, searchText]);

  const renderItem = useCallback(({ item, index }) => {
    return <Item itemData={item} />;
  }, []);
  //当滚动时隐藏键盘, 事实上只需将keyboardDissmissMode设置为on-drag即可实现该功能；
  const handleScroll = useCallback(() => {
    if (isKeyboardCollapse) return;
    Keyboard.dismiss();
  }, [isKeyboardCollapse]);

  return (
    <View style={mailStyles.container}>
      <FlatList
        data={renderListData}
        style={mailStyles.listContainer}
        ListHeaderComponent={headerElement}
        keyExtractor={keyProvider}
        renderItem={renderItem}
        getItemLayout={getItemLayout}
        refreshing={isRefreshing}
        onRefresh={handleRefresh}
        ItemSeparatorComponent={Sperator}
        // onScroll={handleScroll}
        keyboardDismissMode="on-drag"
      />
    </View>
  );
}
const keyProvider = (data) => {
  return data.id;
};

const generateOneDataAysnc = () =>
  new Promise((r) => {
    setTimeout(() => {
      r(makeAMailData());
    }, 1500);
  });

const mailStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  listContainer: {
    flex: 1,
  },
});

export default Mail;
const makeAMailData = () => ({
  id: faker.datatype.uuid(),
  title: faker.company.name(),
  topic: faker.lorem.paragraph(18),
  content: faker.lorem.paragraph(),
  time: faker.date.past(),
});
