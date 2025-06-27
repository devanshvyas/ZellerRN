import { RadioButton } from "../components/RadioButton";
import UserItem from "../components/UserItem";
import { fetchZellerCustomerList } from "../api/api";
import { ZellerCustomer } from "../types/zeller";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { capitalizeFirst } from "../utils/stringutils";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList, UserItemProps } from "../types/router";
import { Colors } from "../constants/Colors";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function ZellerCustomerList({ navigation }: Props) {
  const [role, setRole] = useState<"ADMIN" | "MANAGER">("ADMIN");
  const [customers, setCustomers] = useState<ZellerCustomer[]>([]);
  const [filteredCustomers, setFilteredCustomers] = useState<ZellerCustomer[]>(
    []
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchZellerCustomerList(role).then((res) => {
      setCustomers(res);
      setFilteredCustomers(res);
      console.log(customers.length);
      setLoading(false);
    });
  }, [role]);

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.title}>User Types</Text>
          <RadioButton
            label="Admin"
            selected={role == "ADMIN"}
            onPress={() => {
              setRole("ADMIN");
            }}
          />
          <RadioButton
            label="Manager"
            selected={role == "MANAGER"}
            onPress={() => {
              setRole("MANAGER");
            }}
          />
        </View>
        <View style={styles.separator} />
        <Text style={styles.title} testID="userTitle">
          {capitalizeFirst(role)} Users
        </Text>
        <TextInput
          style={{
            borderRadius: 20,
            borderWidth: 1,
            borderColor: Colors.grey,
            padding: 15,
            marginVertical: 20,
          }}
          placeholder="Search Customer"
          onChangeText={(text: string) => {
            var filterCust = customers.filter(
              (item) =>
                item.name?.toLowerCase().includes(text.toLowerCase()) ||
                item.email?.toLowerCase().includes(text.toLowerCase())
            );
            setFilteredCustomers(filterCust);
          }}
        />
        {loading ? (
          <ActivityIndicator
            testID="loading-indicator"
            size="large"
            color={Colors.blue}
            style={styles.loader}
          />
        ) : filteredCustomers.length === 0 ? (
          <Text style={styles.noDataText}>No {role.toLowerCase()} found.</Text>
        ) : (
          <FlatList
            data={filteredCustomers}
            renderItem={({ item }) => {
              return (
                <UserItem
                  item={item}
                  onPress={() => {
                    navigation.navigate("Details", item);
                  }}
                />
              );
            }}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    justifyContent: "flex-start",
  },

  container: {
    flex: 1,
    padding: 24,
  },
  main: {
    justifyContent: "flex-start",
    maxWidth: "100%",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  separator: {
    height: 1,
    backgroundColor: Colors.seperator,
    marginVertical: 20,
  },
  loader: {
    marginTop: 40,
  },
  noDataText: {
    marginTop: 40,
    textAlign: "center",
    color: Colors.grey,
  },
});
