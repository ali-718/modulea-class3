import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  safeArea: {
    marginTop: Platform.OS == "android" ? 20 : 0
  }
});
