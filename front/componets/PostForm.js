import { Button, Input } from 'antd';
import Form from 'antd/lib/form/Form';
import React from 'react';

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

const PostForm = () => {
	return (
		<Form style={{ margin: '10px 0 20px ' }} encType="multipart/form-data">
			<Input.TextArea maxLength={140} placeholder="어떤 신기한 일이 있었나요?" />
			<div>
				<Input type="file" multiple hidden />
				<Button>이미지 업로드</Button>
				<Button type="primary" style={{ float: 'right' }} htmlType="submit">
					짹짹
				</Button>
			</div>
			<div>
				{dummy.imagePaths.map((v, i) => {
					return (
						<div key={v} style={{ display: 'inline-block' }}>
							<img src={'http://localhost:3000/' + v} style={{ width: '200px' }} alt="" />
							<div>
								<Button>제거</Button>
							</div>
						</div>
					);
				})}
			</div>
		</Form>
	);
};

export default PostForm;
