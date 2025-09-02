import { StrictMode } from "react";
// redux & react query
import { Provider as ReduxProvider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from "../redux/store.js";

// create client
const queryClient = new QueryClient();

export const Providers = ({ children }) => {
  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <StrictMode>{children}</StrictMode>
      </QueryClientProvider>
    </ReduxProvider>
  );
};
