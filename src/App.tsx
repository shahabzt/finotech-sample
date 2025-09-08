import { RouterProvider } from "react-router-dom";
import "./App.css";
import Router from "./pages/router";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";


function App() {
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        {/* <Provider store={store}> */}
        <RouterProvider router={Router} />
        {/* </Provider> */}
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
