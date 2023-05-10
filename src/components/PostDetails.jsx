import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";

const FEED_QUERY = gql`
	query LinkQuery($id: ID!) {
		link(id: $id) {
			id
			createdAt
			url
			description
			postedBy {
				id
				name
			}
			votes {
				id
				user {
					id
				}
			}
		}
	}
`;

const PostDetails = () => {
	const params = useParams();

	const { data } = useQuery(FEED_QUERY, {
		variables: {
			id: params.id,
		},
	});

	if (!data) return <div>...</div>;

	const { id, createdAt, url, description, postedBy } = data.link;

	return (
		<div>
			<p>{id}</p>
			<p>{createdAt}</p>
			<p>{url}</p>
			<p>{description}</p>
		</div>
	);
};

export default PostDetails;
