import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from "react-native";
function AppInput() {
  const [value, setValue] = useState("13983963425");
  const handleChange = ({ nativeEvent }) => {
    console.log("change");
    // console.log(nativeEvent);
  };
  return (
    <View style={{ flex: 1, alignSelf: "stretch" }}>
      <Text>UserName:</Text>
      {/* 获取TextInputValue的唯一方法是使其成为受控组件 */}
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          height: 40,
        }}
        value={value}
        onChangeText={setValue}
        placeholder="please input..."
        // blurOnSubmit 按下submit之后自动失去焦点
        blurOnSubmit
        // contextMenuHidden 隐藏选择文字的菜单
        contextMenuHidden={false}
        // dataDetectorTypes input内部的内容可被点击，并且能够快速IOS对应的菜单操作，配合 multiline={true} editable={false}下使用
        // dataDetectorTypes="phoneNumber"
        //一些change事件在使用九宫格时可能会触发多次，会出现像➋的东西
        onChange={handleChange}
        // onContentSize 获取文字占用的高度和宽度
        onContentSizeChange={({ nativeEvent }) => {
          //   console.log(nativeEvent);
        }}
        onKeyPress={({ nativeEvent }) => {
          console.log(nativeEvent.key);
        }}
      />
      <Text>your input value is : {value}</Text>
    </View>
  );
}

// export default AppInput;
export default KeyboardAvoidingComponent;

function KeyboardAvoidingComponent() {
  const handlePress = () => {
    console.log("block pressed!");
    Keyboard.dismiss();
  };
  const handleLongPress = () => {
    console.log("block long pressed");
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "android" ? "height" : "padding"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback
        onPress={handlePress}
        onLongPress={handleLongPress}
      >
        <View style={styles.container}>
          <Text style={styles.header}>Header</Text>
          <TextInput style={styles.input} placeholder="input something" />
          <View style={styles.btnContainer}>
            <Button title="Submit here" onPress={() => null} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    borderWidth: 5,
    borderColor: "red",
    justifyContent: "space-around",
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  btnContainer: {
    // marginTop: 120,
  },
});
