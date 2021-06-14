import React from 'react';
import { Form, Container, Col, Row, Button, Nav } from "react-bootstrap";
import PlusButton from './Plus_button';
import PlusButton2 from './Plus_button_2';
import HorizontalLine from './Horizontal_Line';
import {withRouter} from "react-router-dom";

export default withRouter(function MainBlock(props) {
	const {endpoints} = props;
	return (
		<>
			<div className="Main">
				<Container>
					<Row>
						<Col>
							{endpoints && endpoints.map((i, index) => <Form.Control type="search" placeholder={i.placeholder} key={index} />)}
							<div className="text-center btn_plus"><PlusButton /></div>
						</Col>
						<Col md={{ span: 1 }}>{ }</Col>
						<Col>
							<Form.Label>Имя:</Form.Label>
							<Form.Control as="select" defaultValue="endpoint_name_1">
								<option>endpoint_name_1</option>
								<option>...</option>
							</Form.Control>
							<Form.Label>Метод:</Form.Label>
							<Form.Control as="select" defaultValue="POST">
								<option>POST</option>
								<option>...</option>
							</Form.Control>
							<Form.Label>Схема запросов:<div className="btn_plus"><PlusButton2 /></div></Form.Label>
							<Row>
								<Col>
									<Form.Control type="search" placeholder="Key" />
								</Col>
								<div className="line_middle"><HorizontalLine /></div>
								<Col>
									<Form.Control as="select" defaultValue="Value type">
										<option>Value type</option>
										<option>...</option>
									</Form.Control>
								</Col>
							</Row>
							<Row>
								<Col>
									<Form.Control type="search" placeholder="Key" />
								</Col>
								<div className="line_middle"><HorizontalLine /></div>
								<Col>
									<Form.Control as="select" defaultValue="Value type">
										<option>Value type</option>
										<option>...</option>
									</Form.Control>
								</Col>
							</Row>
							<Row>
								<Col>
									<Form.Control type="search" placeholder="Key" />
								</Col>
								<div className="line_middle"><HorizontalLine /></div>
								<Col>
									<Form.Control as="select" defaultValue="Value type">
										<option>Value type</option>
										<option>...</option>
									</Form.Control>
								</Col>
							</Row>
							<div className="btn_edit"><Button variant="dark">Изменить</Button>{' '}</div>
							<div className="generate_link text-center"><Nav.Link href="#home">https://squrrelrest.ml/IDINBD</Nav.Link></div>

						</Col>
					</Row>
				</Container>
			</div>
		</>
	)
})