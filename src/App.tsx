import { Layout as AntdLayout } from "antd";
import styled from "styled-components";
import Header from "./Components/Header/Index";
import BREAKPOINTS from "./Constants/breakpoints";
import Homepage from "./Pages/Homepage";

const Layout = styled(AntdLayout)`
  height: 100%;
  width: 100%;
  min-height: 100vh;
  background-color: var(--bg);
  padding: 5rem 10rem;

  @media ${BREAKPOINTS.mdDown} {
    padding: 5rem 1rem;
  }
`;

function App() {
  return (
    <Layout>
      <Header />
      <Layout.Content>
        <Homepage />
      </Layout.Content>
      {/* <Footer /> */}
    </Layout>
  );
}

export default App;
