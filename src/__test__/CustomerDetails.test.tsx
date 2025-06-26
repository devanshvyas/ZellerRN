import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/router";
import { mockAdminCustomers } from "./__mocks__/mockCustomers";
import { render } from "@testing-library/react-native";
import CustomerDetail from "../screens/CustomerDetail";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

const mockProps: Props = {
  navigation: {} as any,
  route: {
    key: "customer-detail",
    name: "Details",
    params: mockAdminCustomers[0],
  },
};

describe("Customer detail tests", () => {
  it("check user details", () => {
    const { getByText, queryByTestId } = render(
      <CustomerDetail {...mockProps} />
    );
    const user = mockAdminCustomers[0];
    expect(getByText(user.name ?? "")).toBeTruthy();
    expect(getByText(user.email ?? "")).toBeTruthy();
    expect(getByText(user.role ?? "")).toBeTruthy();
    expect(queryByTestId("profileView")).toBeTruthy();
  });
});
