import styled from "styled-components";
import TopBar from "./topBar";

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default ({ children }) => {
  return (
    <>
    <TopBar />
    <Layout>
      {children}
    </Layout>
    </>
  )
}
