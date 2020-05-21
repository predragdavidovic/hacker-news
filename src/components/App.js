import React, {Component} from 'react';
import {connect} from 'react-redux';

import Header from './header/index.jsx';
import Filters from './filters/index.jsx';
import Result from './result/index.jsx';
import Pagination from './pagination/index.jsx';

import {saveVisitedPage} from '../actions/index.js'
import {fetchAllStoriesIdsAsync} from '../actions/network.js'

import './style.css'

class App extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchAllStoriesIdsAsync();
    }

    render(){
        const pages = this.props.newsIds.map((item, index) => index);
        return (
            <div className="container">
                <Header/>
                <Filters/>
                <Result/>
                <Pagination items={pages}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    const {newsIds} = state.news;
    return {newsIds};
}

export default connect(mapStateToProps, {fetchAllStoriesIdsAsync, saveVisitedPage})(App);