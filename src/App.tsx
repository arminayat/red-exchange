import { Layout } from "antd";
import styled from "styled-components";
import Homepage from "./Pages/Homepage";

const Content = styled(Layout.Content)`
  padding: 10rem;
  background-color: var(--bg);
`;

function App() {
  return (
    <Layout
      style={{
        height: "100%",
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "var(--bg)",
      }}
    >
      {/* <Header /> */}
      <Content>
        <Homepage />
      </Content>
      {/* <Footer /> */}
    </Layout>
  );
}

export default App;
