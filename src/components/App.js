import React, {Component} from 'react';
import {connect} from 'react-redux';

import Header from './header/index.jsx';
import Filters from './filters/index.jsx';
import Result from './result/index.jsx';

import {fetchNewsAsync} from '../actions/index.js'

import './style.css'

class App extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchNewsAsync()
    }

    render(){
        return (
            <div>
                <Header/>
                <Filters/>
                <Result/>
            </div>
        )
    }
}

export default connect(null, {fetchNewsAsync})(App);