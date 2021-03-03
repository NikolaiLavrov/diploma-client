import React from 'react';
import { Container } from 'react-bootstrap';
import { Form, Col, Button, Modal } from "react-bootstrap";
import {getFormData} from "../utils/getFormData";
import withRouter from "react-router-dom/es/withRouter";
import appStore from "../store";
const SignUpWindow = (props) => {

	const onRegisterHandler = (e) => {
		const formData = getFormData(e);
		appStore.register(formData.email, formData.password).then(res => console.log(res));
		props.history.push('/')
	}


	return (
		<>
			<Modal.Dialog>
				<Modal.Header closeButton>
					<Modal.Title>Регистрация</Modal.Title>
				</Modal.Header>
				<Container>
					<Form onSubmit={onRegisterHandler}>

						<Form.Group as={Col} controlId="formGridEmail">
							<Form.Label>Почта</Form.Label>
							<Form.Control name="email" type="email" placeholder="Введите email" />
						</Form.Group>

						<Form.Group as={Col} controlId="formGridPassword">
							<Form.Label>Пароль</Form.Label>
							<Form.Control name="password" type="password" placeholder="Пароль" />
						</Form.Group>

						<div className="text-center"><Button variant="dark" type="submit">
							Подтвердить
  					</Button>
						</div>
					</Form>
				</Container>
			</Modal.Dialog>
		</>
	)
}

export default withRouter(SignUpWindow);
