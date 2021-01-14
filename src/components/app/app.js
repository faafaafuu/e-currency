import React, { Component } from 'react';

import Header from '../header/header';
// import Footer from '../footer/footer'; 

import './app.scss'

export default class App extends Component {

    render() {
        return (
            <div className="main">
                <Header/>
            </div>
        )
    }
}