import { View, Text, StyleSheet } from "react-native";

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
      <View style={styles.section}>
        <Text>Text元素内部将使用文本布局：元素会有inline的效果:</Text>
        {/* 点击文字会触发对应的Text事件，只有点击空白部分才会触发wrapper的事件 */}
        <Text>
          <Text style={styles.textAnimal}>Cats Dogs Tigers</Text>
          <Text style={styles.textFurits}>
            Apple Banana Orange...etc just a real real long content for to see
            what will happnes!
          </Text>
        </Text>
        <Text>View元素内部将使用Flexbox布局: Text会有block的效果:</Text>
        <View>
          <Text onPress={handleAnimimalPress} style={styles.textAnimal}>
            Cats Dogs Tigers
          </Text>
          <Text onPress={handleFuritsPress} style={styles.textFurits}>
            Apple Banana Orange
          </Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text>Text 样式的继承,（只会继承来自Text组件的样式）</Text>
        <Text style={styles.textWrapper}>
          WrapperStyle ：{JSON.stringify(styles.textWrapper)}
          <Text style={styles.textNested}>nested text content</Text>
        </Text>
      </View>
      <View style={styles.section}>
        <BigText numberOfLines={1} ellipsizeMode="tail">
          ellipsSizeMode and numberOfLines long long long long content
        </BigText>
        <BigText selectable>this is a selectable content</BigText>
        <BigText>
          this is a selectable content
          <Text selectable>(嵌套的Text selectable 不生效？)</Text>
        </BigText>
        <Text
          onPress={() => {
            console.log("pressRetentionOffset");
          }}
          pressRetentionOffset={{
            top: 20,
            bottom: 20,
          }}
        >
          pressRetentionOffset
          ..............当scrollView被禁用时，按下按钮之后，然后滑动手指，当滑动的距离超过你设置的pressRetentionOffset值时，文字会失去active状态；
        </Text>
        <Text allowFontScaling={false} style={{ fontSize: 30 }}>
          allowFontScaling(false)
        </Text>
        <Text allowFontScaling={true} style={{ fontSize: 30 }}>
          allowFontScaling(true)
        </Text>
      </View>
    </View>
  );
}

export default AppText;

const styles = StyleSheet.create({
  textAnimal: {
    color: "red",
  },
  textFurits: {
    color: "blue",
  },
  section: {
    borderWidth: 1,
    borderColor: "#999",
    marginVertical: 5,
  },
  textWrapper: {
    fontWeight: "bold",
    fontSize: 20,
  },
  textNested: {
    color: "green",
  },
});

const BigText = ({ style = {}, ...props }) => {
  return <Text {...props} style={{ ...style, fontSize: 22 }} />;
};
