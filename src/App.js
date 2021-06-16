import React from 'react';
import styles from "./App.css";
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from './Components/Navibar';
import MainBlock from './Components/Mainblock';
import CatalogBlock from './Components/Catalog';
import {BaseRouter} from "./router";
import 'antd/dist/antd.css'


function App() {
	return (
		<>
			<BaseRouter/>
			{/*<NaviBar />*/}
			{/*<MainBlock endpoints={[{ placeholder: 'Endpoint_name_1' }, { placeholder: 'Endpoint_name_2' }, { placeholder: 'Endpoint_name_3' }, { placeholder: 'Endpoint_name_4' }]} />*/}
			{/*<CatalogBlock items={[{title: 'Kolya', description: 'Это описание карточки'}]} />*/}
		</>
	);
}

export default App;


