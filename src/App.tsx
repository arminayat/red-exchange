import { Layout } from "antd";
import styled from "styled-components";
import Header from "./Components/Header/Index";
import Homepage from "./Pages/Homepage";

function App() {
  return (
    <Layout
      style={{
        height: "100%",
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "var(--bg)",
        padding: "5rem 10rem",
      }}
    >
      <Header />
      <Layout.Content>
        <Homepage />
      </Layout.Content>
      {/* <Footer /> */}
    </Layout>
  );
}

export default App;
