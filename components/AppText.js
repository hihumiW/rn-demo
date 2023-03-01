import { View, Text } from "react-native";

function AppText() {
  const handleAnimimalPress = () => {
    console.log("line1 pressed");
  };
  const handleFuritsPress = () => {
    console.log("line2 pressed");
  };
  const handleWrapperPress = () => {
    console.log("warpper press");
  };
  return (
    <View>
      <Text>Text元素内部将使用文本布局：元素会有inline的效果:</Text>
      {/* 点击文字会触发对应的Text事件，只有点击空白部分才会触发wrapper的事件 */}
      <Text onPress={handleWrapperPress}>
        <Text onPress={handleAnimimalPress}>Cats Dogs Tigers</Text>
        <Text onPress={handleFuritsPress}>
          Apple Banana Orange...etc just a real real long content for to see
          what will happnes!
        </Text>
      </Text>
      <Text>View元素内部将使用Flexbox布局: Text会有block的效果:</Text>
      <View>
        <Text onPress={handleAnimimalPress}>Cats Dogs Tigers</Text>
        <Text onPress={handleFuritsPress}>Apple Banana Orange</Text>
      </View>
    </View>
  );
}

export default AppText;
