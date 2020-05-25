import React, {useState} from 'react';
import {connect} from 'react-redux';
import './style/style.css'

function handleClick(item, onPageChange, nbPages) {
    const maximalNumberOfPages = nbPages -1;
    switch(item){
        case "<<": {
            onPageChange(1);
            return;
        }
        case ">>": {
            onPageChange(maximalNumberOfPages);
            return;
        }
        default: {
            onPageChange(item);
            return;
        }
    }
}

function paginationStructure(pages, currentPage, nbPages) {
    const maximalNumberOfPages = nbPages - 1;
    let pagination = [];
    let currentPagePlusPages;
    if (pages.length <= 5) {
        pagination = Array.from({length: pages.length}, (v,i) => i + 1);
    } else {
        const fromFirstToCurrentPages = Array.from({length: currentPage}, (v,i) => i +1);
        if (maximalNumberOfPages - currentPage >= 5) {
            currentPagePlusPages = Array.from({length: 5}, (v,i) => i + (currentPage+1))
        } else {
            const addThisNumOfPages = maximalNumberOfPages - currentPage;
            currentPagePlusPages = Array.from({length: addThisNumOfPages}, (v,i) => i + (currentPage+1))
        }
        const showOnlyLast5Pages = fromFirstToCurrentPages.slice(-6)
        pagination = [...showOnlyLast5Pages, ...currentPagePlusPages];
        currentPage !== 1 ? pagination.unshift('<<') : pagination 
        currentPage !== maximalNumberOfPages  ? pagination.push('>>') : pagination 
    } 
    return pagination;
}

function renderPagination(visiblePages, currentPage, onPageChange, nbPages){
    return visiblePages.map((item,index) => {
        const selected = currentPage == item ? 'pagination_item_selected' : "";
        return (
            <span className={`pagination_item ${selected}`} key={index}
                onClick={() => handleClick(item, onPageChange, nbPages)}>
                {item}
            </span>
        )
    })
}

function Pagination({isFetching, currentPage, onPageChange, nbPages, showSettings}) {
    const pages = Array.from({length: nbPages}, (v, i) => i + 1)
    const visiblePages = paginationStructure(pages, currentPage, nbPages);
    const pagination = !showSettings ? renderPagination(visiblePages, currentPage, onPageChange, nbPages) : "";
    return (
        <div className="pagination">
            {!isFetching ?  pagination : ""}
        </div>
    )
}

const mapStateToProps = state => {
    const {isFetching, nbPages} = state.news;
    return {isFetching, nbPages};
}
export default connect(mapStateToProps)(Pagination);