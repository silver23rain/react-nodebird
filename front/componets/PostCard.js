import { EllipsisOutlined, HeartOutlined, MessageOutlined, RetweetOutlined } from '@ant-design/icons';
import { Button, Card, Avatar } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

const PostCard = ({ post }) => {
	return (
		<Card
			key={+post.createAt}
			cover={post.img && <img alt="example" src={post.img} />}
			actions={[
				<RetweetOutlined key="retweet" />,
				<HeartOutlined key="heart" />,
				<MessageOutlined key="message" />,
				<EllipsisOutlined />,
			]}
			extra={<Button>팔로우</Button>}
		>
			<Card.Meta
				avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
				title={post.User.nickname}
				description={post.content}
			></Card.Meta>
		</Card>
	);
};

PostCard.propTypes = {
	post: PropTypes.shape({
		User: PropTypes.object,
		content: PropTypes.string,
		img: PropTypes.string,
		createAt: PropTypes.object,
	}),
};
export default PostCard;
