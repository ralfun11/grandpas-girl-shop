import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;

	padding: 15px;
	text-align: center;

    display: grid;
    place-items: center;
`;

const Post = ({ title, body }) => (
	<Container>
		<h2>{title}</h2>
		<p>{body}</p>
	</Container>
)

export default Post