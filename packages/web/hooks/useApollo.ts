import { useMemo } from "react";
import { initializeApollo } from "../services/apollo/client.service";

export function useApollo(initialState: undefined) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
