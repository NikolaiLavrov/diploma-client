import React from 'react';
import {Form, Modal, Col, Container, Button} from "react-bootstrap";
import { observer } from "mobx-react";
import {getFormData} from "../utils/getFormData";
import withRouter from "react-router-dom/es/withRouter";
import appStore from "../store";

const SignInWindow = observer(withRouter((props) => {

	const onLoginHandler = (e) => {
		e.preventDefault();
		const formData = getFormData(e);
		appStore.login(formData.email, formData.password);
		props.history.push('/')
	}
	
	return (
		<>
			<Modal.Dialog>
				<Modal.Header closeButton>
					<Modal.Title>Вход</Modal.Title>
				</Modal.Header>
				<Container>
					<Form onSubmit={onLoginHandler}>
						<Form.Group as={Col} controlId="formGroupEmail">
							<Form.Label>Почта</Form.Label>
							<Form.Control name="email" type="email" placeholder="Введите email" />
						</Form.Group>
						<Form.Group as={Col} controlId="formGroupPassword">
							<Form.Label>Пароль</Form.Label>
							<Form.Control name="password" type="password" placeholder="Пароль" />
						</Form.Group>
						<div className="text-center">
							<Button variant="dark" type="submit">
							Подтвердить
						</Button>
						</div>
					</Form>
					<div>Еще нет аккаунта? <div className="page-link" onClick={()=>props.history.push('/signup')}>Регистрация</div></div>
				</Container>
			</Modal.Dialog>


		</>
	)
}))

export default SignInWindow;