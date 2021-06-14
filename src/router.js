import React from 'react';
import {
    BrowserRouter as Router,
} from "react-router-dom";
import Route from 'react-router-dom/Route'
import SignInWindow from "./Components/SignInWindow";
import SignUpWindow from "./Components/SignUpWindow";
import NaviBar from "./Components/Navibar";
import MainBlock from "./Components/Mainblock";
import {MainPage} from "./Components/MainPage";
import {Container, Nav} from "react-bootstrap";
import CatalogBlock from "./Components/Catalog";
import {CustomNavBar} from "./Components/CustomNavBar";
import {observer} from "mobx-react";
import appStore from "./store";
import Redirect from "react-router-dom/es/Redirect";

const CheckAuth = observer((props) => {
    if(appStore.authToken) return props.children;

    return <Redirect to="/login"/>
})


export const BaseRouter = () => {
    return (
        <Router>
            <Route path="/signup" component={SignUpWindow}/>
            <Route path="/login" component={SignInWindow}/>
            <CheckAuth>
                <NaviBar />
                <CustomNavBar/>
                <div>
                    <Route exact path="/" component={MainPage}/>
                    <Route path="/api" component={()=><MainBlock endpoints={[{placeholder: 'endpoint_name_1'}]}/>}/>
                    <Route path="/catalog" component={()=><CatalogBlock items={[{title: "Карточка", description: 'Описание карточки'}]}/>}/>
                </div>
            </CheckAuth>
        </Router>
    )
}