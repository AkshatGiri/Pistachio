import { createConnectedStore } from "undux";

// Create a store with an initial value.
export default createConnectedStore({
  contributions: [],
  transactions: [],
});
