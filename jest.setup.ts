import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./src/types/router";

jest.mock("@aws-amplify/api", () => {
  const mockGraphql = jest.fn();
  return {
    generateClient: () => ({
      graphql: mockGraphql,
    }),
  };
});

export const mockNavigate = jest.fn();
jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
}));

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export const mockProps: Props = {
  navigation: {
    navigate: mockNavigate,
    goBack: jest.fn(),
    setParams: jest.fn(),
    dispatch: jest.fn(),
    reset: jest.fn(),
    popToTop: jest.fn(),
    push: jest.fn(),
    pop: jest.fn(),
    replace: jest.fn(),
    canGoBack: jest.fn(),
    isFocused: jest.fn(),
    getId: jest.fn(),
    getParent: jest.fn(),
    getState: jest.fn(),
    addListener: jest.fn(),
    removeListener: jest.fn(),
  } as any,
  route: {
    key: "key-home",
    name: "Home",
    params: undefined,
  },
};
