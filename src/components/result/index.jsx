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

    componentDidUpdate(prevProps){
        const {newsIds, currentPage, isFatching} = this.props;
        if (prevProps.currentPage !== currentPage && !isFatching) {
            window.scrollTo(0, 0)
        }
    }

    render(){ 
        const {list, currentPage, isFetching} = this.props.news;
        const currentPageItems = list && list[currentPage];
        return (
            <div className="search_result">
            {
               isFetching ? <Loader/> : currentPageItems && currentPageItems.map(item => Item(item))
            }
            </div>
        )
    }
}

function mapStateToProps(state){
    const {news, news: {newsIds, currentPage, list}} = state;
    return {news, currentPage, newsIds, list}
}

export default connect(mapStateToProps, {fetchStoriesPerPageAsync})(Result);