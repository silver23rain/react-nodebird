import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Form from 'antd/lib/form/Form';
import { Input, Checkbox, Button } from 'antd';

const TextInput = ({ value }) => {
	return <div>{value}</div>;
};

TextInput.propTypes = {
	value: PropTypes.string,
};

export const useInput = (inputValue = null) => {
	const [value, setter] = useState(inputValue);
	const handler = useCallback((e) => {
		setter(e.target.value);
	}, []);
	return [value, handler];
};

const Signup = () => {
	// custom hook

	const [id, setId] = useInput('');
	const [nick, setNick] = useInput('');
	const [password, setPassword] = useInput('');
	const [passwordCheck, setPasswordCheck] = useState('');
	const [term, setTerm] = useState(false);
	const [passwordError, setPasswordError] = useState(false);
	const [termError, setTermError] = useState(false);

	const onSubmit = useCallback(() => {
		if (password !== passwordCheck) {
			return setPasswordError(true);
		}

		if (!term) {
			setTermError(true);
		}
		console.log(id, nick, password, passwordCheck, term);
	}, [password, passwordCheck, term]);

	const onChangePassCheck = useCallback(
		(e) => {
			setPasswordError(e.target.value !== password);
			setPasswordCheck(e.target.value);
		},
		[password]
	);

	const onChangeTerm = useCallback((e) => {
		setTermError(false);
		setTerm(e.target.checked);
	}, []);

	return (
		<>
			<Form onFinish={onSubmit} style={{ padding: '10px' }}>
				<TextInput value={'12121'} />
				<div>
					<label htmlFor="user-id">아이디</label>
					<br />
					<Input name="user-id" value={id} required onChange={setId} />
				</div>
				<div>
					<label htmlFor="user-nick">닉네임</label>
					<br />
					<Input name="user-nick" required value={nick} onChange={setNick} />
				</div>
				<div>
					<label htmlFor="user-password">비밀번호</label>
					<br />
					<Input name="user-password" required value={password} onChange={setPassword} type="password" />
				</div>
				<div>
					<label htmlFor="user-pass-check">비밀번호 체크</label>
					<br />
					<Input
						name="user-pass-check"
						required
						value={passwordCheck}
						onChange={onChangePassCheck}
						type="password"
					/>
					{passwordError && <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</div>}
				</div>
				<div>
					<Checkbox name="user-term" value={term} onChange={onChangeTerm}>
						약관 동의 동의합니다.
					</Checkbox>
					{termError && <div style={{ color: 'red' }}>약관에 동의하셔야합니다.</div>}
				</div>
				<div style={{ marginTop: 10 }}>
					<Button type="primary" htmlType="submit">
						가입하기
					</Button>
				</div>
			</Form>
		</>
	);
};

export default Signup;
