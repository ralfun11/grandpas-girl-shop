import styled from "styled-components";
import TopBar from "./TopBar";

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
