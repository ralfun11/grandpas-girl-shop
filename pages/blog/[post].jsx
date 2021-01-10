import Layout from '../../components/layout'

export default function Post({ post }) {
	return (
		<Layout>
			<h1>Post {post.id}</h1>
			<p>{post.body}</p>
		</Layout>
	)
}

export async function getStaticPaths() {
	const data = await fetch('https://jsonplaceholder.typicode.com/posts')
	const posts = await data.json()

	const paths = posts.map(post => ({
		params: { 
					post: post.id.toString(),
					test: 'ahoj',
		},
	}))

	console.log(paths[0])

	return {
		paths,
		fallback: false,
	}
}

export async function getStaticProps({ params }) {

	const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.post}`)
	const post = await data.json()

	return {
		props: {
			post,
		}
	}
}