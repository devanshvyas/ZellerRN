import { generateClient } from "aws-amplify/api";
import { listZellerCustomersQuery } from "../graphQL/queries";

const client = generateClient();

export const fetchZellerCustomerList = async (role: String) => {
  try {
    const response: any = await client.graphql({
      query: listZellerCustomersQuery,
      variables: { filter: { role: { eq: role } } },
    });
    return response.data.listZellerCustomers.items;
  } catch (error) {
    console.error("GraphQL fetch error:", error);
    return [];
  }
};
