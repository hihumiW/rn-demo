import { useEffect, useState } from "react";
import { View, Image, Text } from "react-native";

function AppView() {
  const [imageSize, setImageSize] = useState({
    width: 10,
    height: 10,
  });
  useEffect(() => {
    console.log("get the image Size");
    // 获取网络图片的宽高
    Image.getSize(
      "https://inews.gtimg.com/newsapp_bt/0/12771637767/641",
      (width, height) => {
        console.log("witdh", width, "height", height);

        setImageSize({
          width,
          height,
        });
      }
    );

    console.log(Image.resolveAssetSource(require("../assets/preview.jpeg")));
  }, []);

  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        alignItems: "flex-start",
      }}
    >
      <Text>
        对于本地图片可以不设置宽高，不设置默认会读取图片本身的高度和宽度
      </Text>
      <Image
        source={require("../assets/preview.jpeg")}
        style={{ width: 300, height: 200 }}
        resizeMode="cover"
      />
      <Text>对于网络图片，必须设置宽高，否则将无法显示（为0）</Text>
      <Image
        source={{
          uri: "https://inews.gtimg.com/newsapp_bt/0/12771637767/641",
        }}
        style={{ width: imageSize.width, height: imageSize.height }}
        resizeMode="cover"
        fadeDuration={300}
        loadingIndicatorSource={require("../assets/favicon.png")}
      />
      <Text>end</Text>
    </View>
  );
}

export default AppView;
