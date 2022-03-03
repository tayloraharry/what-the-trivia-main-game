import { useEffect, useState } from "react";
import "../node_modules/antd/dist/antd.css";
import { IRoomObject } from "what-the-trivia-types";
import { Provider } from "react-redux";
import { store } from "./store";
import Layout from "antd/lib/layout";
import Main from "./components/main";
import { disconnectSocket } from "./socketio.service";

const App = () => {
  useEffect(() => {
    return () => {
      disconnectSocket();
    };
  }, []);
  
  return (
    <Provider store={store}>
      <Layout>
        <Layout.Content>
          <Main/>
        </Layout.Content>
      </Layout>
    </Provider>
  );
};

export default App;
