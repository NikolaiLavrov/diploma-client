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
					<Form style={{padding:'20px 0'}} onSubmit={onRegisterHandler}>

						<Form.Group as={Col} controlId="formGridEmail">
							<Form.Label>Почта</Form.Label>
							<Form.Control name="email" type="email" placeholder="Введите email" minLength="14" required/>
						</Form.Group>

						<Form.Group as={Col} controlId="formGridPassword">
							<Form.Label>Пароль</Form.Label>
							<Form.Control name="password" id="pass1" type="password" placeholder="Пароль" minLength="6" required />
						</Form.Group>

						<Form.Group as={Col} controlId="formGridPassword">
							<Form.Label>Подтвердите пароль</Form.Label>
							<Form.Control name="password" id="pass2" type="password" placeholder="Введите пароль повторно" minLength="6" required/>
						</Form.Group>

						<div className="text-center mb-3"><Button variant="dark" type="submit">
							Подтвердить</Button>
						</div>

						<div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '0 15px', fontSize: '13px'}}>
							<div >У вас уже есть аккаунт?</div>
							<div className="btn-reg" onClick={()=>props.history.push('/login')}>Выполнить вход</div>
						</div>
					</Form>
				</Container>
			</Modal.Dialog>
		</>
	)
}

export default withRouter(SignUpWindow);
