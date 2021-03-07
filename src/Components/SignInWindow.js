import React from 'react';
import {Form, Modal, Col, Container, Button} from "react-bootstrap";
import { observer } from "mobx-react";
import {getFormData} from "../utils/getFormData";
import withRouter from "react-router-dom/es/withRouter";
import appStore from "../store";

const SignInWindow = observer(withRouter((props) => {

	const [error, setError] = React.useState('');

	const onLoginHandler = (e) => {
		e.preventDefault();
		const formData = getFormData(e);
		appStore.login(formData.email, formData.password)
			.then(()=>	props.history.push('/')).catch(
			()=>setError(true)
		);
	}

	const onChangeHandler = () => {
		setError(false);
	}
	
	return (
		<>
			<Modal.Dialog>
				<Modal.Header closeButton>
					<Modal.Title>Вход</Modal.Title>
				</Modal.Header>
				<Container>
					<Form style={{padding:'20px 0'}} onSubmit={onLoginHandler}>
						<Form.Group as={Col}>
							<Form.Label>Почта</Form.Label>
							<Form.Control onChange={onChangeHandler} name="email" type="email" placeholder="Введите email" required/>
						</Form.Group>
						<Form.Group as={Col}>
							<Form.Label>Пароль</Form.Label>
							<Form.Control onChange={onChangeHandler}  name="password" type="password" placeholder="Пароль" minLength="6" required/>
						</Form.Group>
						<Form.Group as={Col}>
							<Form.Label style={{color: 'red'}}>{error? 'Неправильный логин или пароль!':''}</Form.Label>
						</Form.Group>
						<div className="text-center mb-3" >
							<Button variant="dark" type="submit">
							Войти
						</Button>
						</div>
						<div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '0 15px', fontSize: '13px'}}>
							<div >Еще нет аккаунта?</div>
							<div className="btn-reg" onClick={()=>props.history.push('/signup')}>Зарегистрироваться</div>
						</div>
					</Form>

				</Container>
			</Modal.Dialog>


		</>
	)
}))

export default SignInWindow;