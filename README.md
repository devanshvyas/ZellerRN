
# ZellerRN 📱

A **React Native** app using **Expo** + **TypeScript** to display a list of customers from an AWS Amplify GraphQL API. This project demonstrates best practices including modular components, typed navigation, and comprehensive unit testing.

---

## 🧩 Features

- 🔁 Fetches customers from GraphQL via Amplify
- 🧭 Navigates between screens using native stack
- 💅 Modular component structure
- 🔍 Unit tested using Testing Library
- 🧪 Code coverage via Jest
- ⚡ Optimized for scalability

---

## 📦 Tech Stack

- **React Native (Expo)**
- **TypeScript**
- **React Navigation (Native Stack)**
- **AWS Amplify GraphQL**
- **@testing-library/react-native + Jest**
- **Modular file structure**

---

## 🚀 Getting Started

### Prerequisites

- Node.js v16+
- `expo-cli`
- Xcode or Android Studio (for device simulation)

### Setup

```bash
git clone https://github.com/devanshvyas/ZellerRN.git
cd ZellerRN
npm install
```

### Run the App

```bash
npx expo start
```

> To run on device or emulator: press `i` (iOS) or `a` (Android)

---

## 📁 Project Structure

```txt
ZellerRN/
├── App.tsx                         # Entry point
├── babel.config.js                 # Babel config for Jest & Expo
├── jest.config.js                  # Jest testing configuration
├── jest.setup.ts                   # Global test setup (matchers, mocks)
├── package.json
├── tsconfig.json                   # TypeScript configuration
├── README.md
│
├── src/
│   ├── api/
│   │   └── fetchZellerCustomerList.ts      # Amplify GraphQL query wrapper
│   │
│   ├── components/
│   │   └── ZellerCustomerItem.tsx          # Reusable list item component
│   │
│   ├── screens/
│   │   ├── ZellerCustomerList.tsx          # Customer list screen (uses FlatList)
│   │   └── CustomerDetailScreen.tsx        # Screen to display customer details
│   │
│   ├── navigation/
│   │   └── RootNavigator.tsx               # Native stack navigator setup
│   │
│   ├── types/
│   │   └── ZellerCustomer.ts               # Type definition for customer object
│   │
│   └── __mocks__/
│       └── mockCustomers.ts                # Reusable mock data for testing
│
├── __tests__/
│   ├── ZellerCustomerList.test.tsx         # Test for list screen behavior
│   └── CustomerDetailScreen.test.tsx       # Test for detail screen (route param)
│
└── coverage/                                # Jest coverage output (ignored in Git)
```

---

## 🧪 Running Tests

```bash
npm test
```

### With Code Coverage

```bash
npm run test:coverage
```

View the HTML report at:

```bash
open coverage/lcov-report/index.html
```

---

## 📃 Mocked Customer Example

```ts
export const mockManagerCustomers: ZellerCustomer[] = [
  { id: "1", name: "Lynn", email: "lynn@gmail.com", role: "MANAGER" },
  { id: "2", name: "Joe Perera", email: "joe@gmail.com", role: "MANAGER" },
];
```
---

## 🧑‍💻 Author

Built with ❤️ by [Devansh Vyas](https://github.com/devanshvyas)
