import Layout from '../../components/layout'
import Post from '../../components/post'
import styled from 'styled-components'

const Showcase = styled.div`
  display: grid;
  /*grid-template-rows: repeat(3, 40vh);*/
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 40vh;
  grid-auto-columns: 1fr;

  padding: 10px;
`;

export default ({posts}) => {
	console.log(posts)
	return (
		<Layout>
			<Showcase>
				{posts.map(post => {
					return <Post 
						title={post.title}
						body={post.body}
						/>
				})}
			</Showcase>
		</Layout>
	)
}

export async function getStaticProps({ params }) {

	const data = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
	const posts = await data.json()

	return {
		props: {
			posts,
		}
	}
}