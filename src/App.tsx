import { RouterProvider } from "react-router-dom";
import Router from "./pages/router";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  const queryClient = new QueryClient();

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={Router} />
          </QueryClientProvider>
        </Provider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
