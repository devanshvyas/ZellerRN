import { fireEvent, render, waitFor } from "@testing-library/react-native";
import ZellerCustomerList from "../screens/ZellerCustomerList";
import { fetchZellerCustomerList } from "../api/api";
import { mockNavigate, mockProps } from "../../jest.setup";
import { mockAdminCustomers } from "./__mocks__/mockCustomers";

jest.mock("../api/api");

describe("ZellerCustomerList", () => {
  beforeEach(() => {
    (fetchZellerCustomerList as jest.Mock).mockResolvedValue(
      mockAdminCustomers
    );
  });

  it("Radio button check", async () => {
    const { getByText, queryByTestId } = render(
      <ZellerCustomerList {...mockProps} />
    );

    const manager = queryByTestId("Manager");
    expect(manager).toBeTruthy();
    fireEvent.press(manager);
    expect(getByText("Manager Users")).toBeTruthy();

    const admin = queryByTestId("Admin");
    expect(admin).toBeTruthy();
    fireEvent.press(admin);
    expect(getByText("Admin Users")).toBeTruthy();
  });

  it("Loading indicator test..", async () => {
    const { getByText, queryByTestId } = render(
      <ZellerCustomerList {...mockProps} />
    );

    await waitFor(() => {
      expect(queryByTestId("loading-indicator")).toBeNull();
    });

    expect(getByText("David")).toBeTruthy();
  });

  it("navigates to Details on press", async () => {
    const { getByText } = render(<ZellerCustomerList {...mockProps} />);

    fireEvent.press(getByText("Manager"));

    await waitFor(() => getByText("David"));
    fireEvent.press(getByText("David"));
    expect(mockNavigate).toHaveBeenCalledWith("Details", {
      id: "3",
      name: "David",
      email: "David@gmail.com",
      role: "ADMIN",
    });
  });

  it("Search customers", async () => {
    const { queryByText, queryByTestId, getByPlaceholderText } = render(
      <ZellerCustomerList {...mockProps} />
    );

    const searchBar = getByPlaceholderText("Search Customer");
    expect(searchBar).toBeTruthy();

    await waitFor(() => {
      expect(queryByTestId("loading-indicator")).toBeNull();
    });

    fireEvent.changeText(searchBar, "David");
    await waitFor(() => {
      expect(queryByText("David")).toBeTruthy();
      expect(queryByText("Ryan Muller")).toBeNull();
      expect(queryByText("Chris Miller")).toBeNull();
    });

    fireEvent.changeText(searchBar, "");
    await waitFor(() => {
      expect(queryByText("David")).toBeTruthy();
      expect(queryByText("Ryan Muller")).toBeTruthy();
      expect(queryByText("Chris Miller")).toBeTruthy();
    });
  });
});
