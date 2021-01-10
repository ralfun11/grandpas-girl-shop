import Head from 'next/head';
import styled from 'styled-components';

import Layout from '../components/layout';

const About = ({posts}) => (
	<>
		<Head>
    		<title>Grandpas Girl || About</title>
   			<link rel="icon" href="/favicon.ico" />
		</Head>
		<Layout>
			<h1>Grandpas</h1>
			<p>About page</p>
			<p>{JSON.stringify(posts)}</p>
		</Layout>
	</>
)

export default About