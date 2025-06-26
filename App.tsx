import { Amplify } from "aws-amplify";
import { SafeAreaView, StyleSheet } from "react-native";
import awsconfig from "./src/amplify/aws-exports";
import ZellerCustomerList from "./src/screens/ZellerCustomerList";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./src/types/router";
import CustomerDetail from "./src/screens/CustomerDetail";

Amplify.configure({
  API: {
    GraphQL: {
      defaultAuthMode: "apiKey",
      endpoint: awsconfig.aws_appsync_graphqlEndpoint,
      apiKey: awsconfig.aws_appsync_apiKey,
      region: awsconfig.aws_appsync_region,
    },
  },
});

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{ title: "Users", headerShown: false }}
          component={ZellerCustomerList}
        />
        <Stack.Screen
          name="Details"
          options={{ title: "Customer Details", headerLargeTitle: true }}
          component={CustomerDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
