import { ZellerCustomer } from "../../types/zeller";

export const mockAdminCustomers: ZellerCustomer[] = [
  { id: "3", name: "David", email: "David@gmail.com", role: "ADMIN" },
  { id: "4", name: "Ryan Muller", email: "ryan@gmail.com", role: "ADMIN" },
  { id: "5", name: "Chris Miller", email: "cris@gmail.com", role: "ADMIN" },
];

export const mockManagerCustomers: ZellerCustomer[] = [
  { id: "1", name: "Lynn", email: "lynn@gmail.com", role: "MANAGER" },
  { id: "2", name: "Joe Perera", email: "joe@gmail.com", role: "MANAGER" },
];
