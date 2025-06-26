import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { Colors } from "../constants/Colors";

interface ProfileProp {
  character: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export default function ProfileView({
  character,
  style,
  textStyle,
}: ProfileProp) {
  return (
    <View style={[styles.profileContainer, style]} testID="profileView">
      <Text style={[styles.profileChar, textStyle]}>{character}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    height: 50,
    width: 50,
    borderRadius: 8,
    backgroundColor: Colors.backgroundBlue,
    justifyContent: "center",
    alignItems: "center",
  },
  profileChar: {
    fontSize: 25,
    color: Colors.blue,
  },
});
