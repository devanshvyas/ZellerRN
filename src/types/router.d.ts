import { ZellerCustomer } from "./zeller";

export type RootStackParamList = {
  Home: undefined;
  Details: ZellerCustomer;
};

export type NavigationProps = NativeStackScreenProps<
  RootStackParamList,
  "Home"
>;

export type UserItemProps = {
  item: ZellerCustomer;
  onPress: () => void;
};
