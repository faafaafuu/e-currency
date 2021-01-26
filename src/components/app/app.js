import React, { Component } from 'react';
import {connect} from 'react-redux';

import Header from '../header/header';
// import Footer from '../footer/footer'; 

import './app.scss'

class App extends Component {

    render() {
        console.log(this.props.test[0],'tst')
        return (
            <div className="main">
                <Header/>
            </div>
        )
    }
}

export default connect(
    state => ({
        test: state
    }),
    dispotch => ({})
)(App)