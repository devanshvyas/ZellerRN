import { UserItemProps } from "../types/router";
import { ZellerCustomer } from "../types/zeller";
import { capitalizeFirst } from "../utils/stringutils";
import { Pressable, StyleSheet, Text, View } from "react-native";
import ProfileView from "./ProfileVIew";
import { Colors } from "../constants/Colors";

export default function UserItem({ item, onPress }: UserItemProps) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <ProfileView character={item.name?.at(0) ?? ""} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.subtitle}>{capitalizeFirst(item.role ?? "")}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: 10,
  },
  titleContainer: {
    flexDirection: "column",
    paddingLeft: 15,
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
  },
  subtitle: {
    fontSize: 18,
    color: Colors.grey,
  },
});
