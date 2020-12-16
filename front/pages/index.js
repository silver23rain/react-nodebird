import React from 'react';
import PostForm from '../componets/PostForm';
import PostCard from '../componets/PostCard';

const dummy = {
	isLoggedIn: true,
	imagePaths: [],
	mainPosts: [
		{
			User: {
				id: 1,
				nickname: '박은비',
			},
			content: '첫 게시글',
			img: 'https://item.kakaocdn.net/do/ae897b8fe81a9cf7bcbe9af58d473755617ea012db208c18f6e83b1a90a7baa7',
		},
	],
};

const Home = () => {
	return (
		<div>
			{dummy.isLoggedIn && <PostForm />}
			{dummy.mainPosts.map((c) => {
				return <PostCard key={c} post={c} />;
			})}
		</div>
	);
};

export default Home;
