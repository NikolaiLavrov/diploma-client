import React from 'react';
import { Navbar, Button, Container } from "react-bootstrap";
import withRouter from "react-router-dom/es/withRouter";
import {observer} from "mobx-react";
import appStore from "../store";



const NaviBar = observer(withRouter((props) => {
	return (
		<>
			<Navbar variant="dark" expand="lg">
				<Container>
					<Navbar.Brand onClick={()=>props.history.push('/')}>REST API Composer</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Button onClick={()=>appStore.signout()} variant="outline-light mr-2">Выйти</Button>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	)
}))

export default NaviBar
