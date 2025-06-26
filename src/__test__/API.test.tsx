import { fetchZellerCustomerList } from "../api/api";
import { generateClient } from "aws-amplify/api";
import { listZellerCustomersQuery } from "../graphQL/queries";

describe("fetchZellerCustomerList", () => {
  const client = generateClient() as any;

  afterEach(() => {
    jest.clearAllMocks();
  });

  const mockDataForRole = (role: string) => [
    { id: `1-${role}`, name: `Name ${role}`, email: `${role}@test.com`, role },
  ];

  it.each([["ADMIN"], ["MANAGER"]])(
    'returns customer list for role "%s"',
    async (role) => {
      client.graphql.mockResolvedValueOnce({
        data: {
          listZellerCustomers: {
            items: mockDataForRole(role),
          },
        },
      });

      const result = await fetchZellerCustomerList(role);
      expect(client.graphql).toHaveBeenCalledWith({
        query: listZellerCustomersQuery,
        variables: { filter: { role: { eq: role } } },
      });

      expect(result).toEqual(mockDataForRole(role));
    }
  );

  it("returns empty array on API error", async () => {
    client.graphql.mockRejectedValueOnce(new Error("network error"));

    const result = await fetchZellerCustomerList("ADMIN");
    expect(result).toEqual([]);
  });
});
