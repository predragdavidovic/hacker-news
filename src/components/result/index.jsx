import React, {Component} from 'react';
import {connect} from 'react-redux';

import Loader from '../loader/index.jsx';
import Item from '../item/index.jsx';

import {fetchStoriesPerPageAsync} from '../../actions/network.js'

import './style/style.css';

class Result extends Component {
    constructor(props){
        super(props);
    }

    render(){ 
        const {list, isFetching} = this.props.news;
        const currentPageItems = list && list[this.props.currentPage];
        return (
            <div className="search_result">
            {
               isFetching ? <Loader/> : currentPageItems && currentPageItems.hits.map(item => Item(item))
            }
            </div>
        )
    }
}

function mapStateToProps(state){
    const {news, news: {newsIds, list}} = state;
    return {news, newsIds, list}
}

export default connect(mapStateToProps, {fetchStoriesPerPageAsync})(Result);