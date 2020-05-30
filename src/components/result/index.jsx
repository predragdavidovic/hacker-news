import React, {Component} from 'react';
import {connect} from 'react-redux';
import Loader from '../loader/index.jsx';
import Item from '../item/index.jsx';
import Settings from '../settings/index.jsx'
import {renderAppropriateList} from '../../utilites/index.js'
import './style/style.css';

class Result extends Component {
    constructor(props){
        super(props);
    }

    renderListType(list, currentPage, searchType) {
        const {searchValue} = this.props;
        const currentPageItems = list && list[currentPage];
        
        return currentPageItems && currentPageItems.hits.map(
            (item,index) => <span key={index}>{Item(item, searchValue, searchType)}</span>)
    }

    renderList(){
        const {currentPage, searchValue, showSettings, searchTypeSearch, searchTypeNews} = this.props;
        const {isFetching, listStory, listComment} = this.props.news;
        const searchType = searchValue ? searchTypeSearch : searchTypeNews;
        const {isFetching: isFetchingSearch, list: searchList} = this.props.search;
        const list = renderAppropriateList(searchType, listStory, listComment);
        
        if (showSettings) {
            return <Settings/>
        } else if (searchValue) {
            return isFetchingSearch ? <Loader/> : this.renderListType(searchList, currentPage, searchType)
        } else {
            return isFetching ? <Loader/> : this.renderListType(list, currentPage, searchType)
        }
    }

    render(){ 
        return (
            <div className="search_result">
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    const {news, news: {listStory, listComment, searchType: searchTypeNews}, search} = state;
    const {searchType: searchTypeSearch} = state.search;
    return {news, listStory, listComment, searchTypeNews, searchTypeSearch, search}
}

export default connect(mapStateToProps, null)(Result);