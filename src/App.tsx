import RootApp from "./RootApp";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./store/index.ts";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { theme } from "./theme/index.ts";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MantineProvider defaultColorScheme="dark" theme={theme}>
          <RootApp />;
        </MantineProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
