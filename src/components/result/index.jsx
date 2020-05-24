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

    renderListType(list, currentPage) {
        const currentPageItems = list && list[currentPage];
        return currentPageItems && currentPageItems.hits.map((item,index) => <span key={index}>{Item(item)}</span>)
    }


    renderList(){
        const {currentPage, searchValue} = this.props;
        const {isFetching, searchType, listStory, listComment} = this.props.news;
        const {isFetching: isFetchingSearch, list: searchList} = this.props.search;
        const list = renderAppropriateList(searchType, listStory, listComment);
        let displaySearchList;
        
        const displayList = isFetching ? <Loader/> : this.renderListType(list, currentPage) 
        
        
        if (searchValue && isFetchingSearch) {
            displaySearchList = <Loader/>
        } else if (searchValue && !isFetchingSearch) {
            displaySearchList = this.renderListType(searchList, currentPage)
        }

        return {
            displayList,
            displaySearchList
        }
    }

    render(){ 
        const renderList = this.renderList();
        return (
            <div className="search_result">
                { renderList.displaySearchList || renderList.displayList }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {news, news: {listStory, listComment, searchType}, search} = state;
    return {news, listStory, listComment, searchType, search}
}

export default connect(mapStateToProps, null)(Result);