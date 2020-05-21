import React, {useState} from 'react';
import {connect} from 'react-redux';
import {setCurrentPage} from '../../actions/index.js';
import {fetchStoriesPerPageAsync} from '../../actions/network.js'

import './style/style.css'

function Pagination({items, isFetching, newsIds, pageNumbers, fetchStoriesPerPageAsync, setCurrentPage, currentPage}) {
    return (
        <div className="pagination">
            {
               isFetching ? "" : items.map((item,index) => {
                   const selected = currentPage == index ? 'pagination_item_selected' : "";
                   return (
                        <span className={`pagination_item ${selected}`} key={index}
                            onClick={() => {

                                if( pageNumbers.includes(index)) {
                                setCurrentPage(index)
                                    return;
                                }
                                fetchStoriesPerPageAsync(newsIds[index], index)
                            }
                            }>
                            {item + 1} 
                        </span>
                   )
               })
            }
        </div>
    )
}

function mapStateToProps(state){
    const {newsIds, pageNumbers, isFetching, currentPage} = state.news;
    return {newsIds, pageNumbers, isFetching, currentPage};
}
export default connect(mapStateToProps, {fetchStoriesPerPageAsync, setCurrentPage})(Pagination);