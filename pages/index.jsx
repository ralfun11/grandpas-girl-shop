import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
import styled from "styled-components";
import Post from "../components/post"

const Container = styled.div`
  
`;

const Showcase = styled.div`
  display: grid;
  /*grid-template-rows: repeat(3, 40vh);*/
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 40vh;
  grid-auto-columns: 1fr;

  padding: 10px;
`;

export default function Home({ posts }) {
  return (
    <>
      <Layout>
        <Showcase>
          { 
            posts.map((post,index) => 
            <Post
              title={post.title}
              body={post.body}
              key={index}
            />)
          }
        </Showcase>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await data.json();

  return {
    props: {
      posts,
    },
  };
}
