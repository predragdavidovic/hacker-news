import React, {Component} from 'react';
import {connect} from 'react-redux';
import Loader from '../loader/index.jsx';
import Item from '../item/index.jsx';
import {renderAppropriateList} from '../../utilites/index.js'
import './style/style.css';

class Result extends Component {
    constructor(props){
        super(props);
    }

    render(){ 
        const {isFetching, searchType, listStory, listComment} = this.props.news;
        const list = renderAppropriateList(searchType, listStory, listComment)
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
    const {news, news: {listStory, listComment, searchType}} = state;
    return {news, listStory, listComment, searchType}
}

export default connect(mapStateToProps, null)(Result);