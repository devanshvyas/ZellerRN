export const listZellerCustomersQuery = `
  query ListZellerCustomers($filter: TableZellerCustomerFilterInput) {
    listZellerCustomers(filter: $filter) {
      items {
        id
        name
        email
        role
      }
      nextToken
    }
  }
`;
