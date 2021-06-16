import React from 'react';
import { createSchema, useSchema, Diagram } from 'beautiful-react-diagrams/dist';
import 'beautiful-react-diagrams/dist/styles.css'
import { Form, Container, Col, Row, Button, Nav } from "react-bootstrap";
import Modal from 'react-responsive-modal';
import { dataflowBlocks } from './Dataflow/blocks/index';
import { DataflowMenuItem } from './Dataflow/DataflowMenuItem';
import PlusButton from './Plus_button';
import PlusButton2 from './Plus_button_2';
import HorizontalLine from './Horizontal_Line';
import {withRouter} from "react-router-dom";
import 'react-responsive-modal/styles.css';
import './Mainblock.css'
import { getValueBlock } from './Dataflow/blocks/getValue'

const VisualProgramming = () => {
	const handleDropBlock = (e) => {
		const blockIndex = e.dataTransfer?.getData('text');
		const targetBlockType = dataflowBlocks[blockIndex];
		const targetBlock = targetBlockType([e.nativeEvent.layerX, e.nativeEvent.layerY]);

		controller.addNode(targetBlock);
	};

	const initialSchema = createSchema({
		nodes: [
			getValueBlock(),
		]
	});

	const [schema, controller] = useSchema(initialSchema);
	const [selectedNode, setSelectedNode] = React.useState(null);

	const handleDragOver = (e) => {
		e.preventDefault();
	};

	return (
		<div className="dataflow">
			<div className="dataflow__blocks-menu__search-list">
				<h2 style={{textAlign: "center"}}>Blocks</h2>
				{dataflowBlocks.map((block, index) => (
					<DataflowMenuItem index={index} key={index}/>
				))}
			</div>
			<div className="dataflow__workspace">

				<div
					className="dataflow__workspace__diagram"
					onDragOver={handleDragOver}
					onDrop={handleDropBlock}
				>
					<Diagram
						onSelectNode={(id) => setSelectedNode(id)}
						schema={schema}
						onChange={controller.onChange}
					/>
				</div>
			</div>
		</div>
	)
}

export default withRouter(function MainBlock(props) {
	const {endpoints} = props;
	const [modal, showModal] = React.useState(false);
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
							</Form.Control>
							<Form.Label>Метод:</Form.Label>
							<Form.Control as="select" defaultValue="POST">
								<option>POST</option>
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
										<option>String</option>
										<option>Boolean</option>
										<option>Number</option>
										<option>Array</option>
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
										<option>String</option>
										<option>Boolean</option>
										<option>Number</option>
										<option>Array</option>
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
										<option>String</option>
										<option>Boolean</option>
										<option>Number</option>
										<option>Array</option>
									</Form.Control>
								</Col>
							</Row>
							<div className="btn_edit"><Button variant="dark" onClick={()=>showModal(true)}>Изменить</Button>{' '}</div>
							<div className="generate_link text-center"><Nav.Link href="#home">https://squrrelrest.ml/IDINBD</Nav.Link></div>
							<Modal open={modal} onClose={()=>showModal(false)} center>
								<VisualProgramming/>
							</Modal>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	)
})