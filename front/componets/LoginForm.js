import { Button, Form, Input } from 'antd';
import Link from 'next/link';
import React, { useCallback } from 'react';
import { useInput } from '../pages/signup';

const LoginForm = () => {
	const [id, onChangeId] = useInput('');
	const [passeord, onChangePassword] = useInput('');
	const onSubmitForm = useCallback(
		(e) => {
			e.preventDefault;
			console.log({ id, passeord });
		},
		[id, passeord]
	);
	return (
		<Form style={{ padding: '10px' }} onFinish={onSubmitForm}>
			<div>
				<label htmlFor="user-id">아이디</label>
				<br />
				<Input name="user-id" value={id} onChange={onChangeId} required />
			</div>
			<div>
				<label htmlFor="user-password">비밀번호</label>
				<br />
				<Input name="user-password" type="password" value={passeord} onChange={onChangePassword} required />
			</div>
			<div style={{ marginTop: '10px' }}>
				<Button type="primary" htmlType="submit" loading={false}>
					로그인
				</Button>
				<Link href="/signup">
					<a>
						<Button>회원가입</Button>
					</a>
				</Link>
			</div>
		</Form>
	);
};

export default LoginForm;
