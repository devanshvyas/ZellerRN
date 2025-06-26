import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { RootStackParamList } from "../types/router";
import ProfileView from "../components/ProfileVIew";
import { Colors } from "../constants/Colors";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

export default function CustomerDetail({ route }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <ProfileView
        character={route.params.name?.at(0) ?? ""}
        style={styles.profileView}
        textStyle={styles.profileText}
      />
      <Text style={styles.detailText}>{route.params.name}</Text>
      <Text style={styles.detailText}>{route.params.email}</Text>
      <Text style={styles.roleText}>{route.params.role}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  profileView: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 30,
    marginTop: -30,
  },
  profileText: {
    fontSize: 40,
  },
  detailText: {
    fontSize: 25,
    fontWeight: "400",
    padding: 5,
  },
  roleText: {
    fontSize: 25,
    fontWeight: "300",
    padding: 5,
    color: Colors.grey,
  },
});
