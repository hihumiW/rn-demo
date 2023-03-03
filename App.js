import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar as StatusBarAPI,
  Platform,
} from "react-native";
import AppText from "./components/AppText";
import AppView from "./components/AppImage";
import AppList from "./components/AppList";
import AppInput from "./components/AppInput";
import Mail from "./components/Mail";
import AppScrollView from "./components/AppScrollView";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Mail />
      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: "gold",
    borderWidth: 5,
    paddingTop: Platform.OS === "android" ? StatusBarAPI.currentHeight : 0,
  },
});
