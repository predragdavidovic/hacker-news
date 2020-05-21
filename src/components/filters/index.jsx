import React, {Component} from 'react';
import {connect} from 'react-redux';
import {sortByPopularity, sortByDate} from '../../actions/sort.js';
import {fetchAllStoriesIdsAsync} from '../../actions/network.js';

import './style/style.css'

class Filters extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    handleChange(selectOption, list , currentPage){
        switch(selectOption){
            case 'popularity': {
                this.props.sortByPopularity(list, currentPage)
                return;
            }
            case 'date': {
                this.props.sortByDate(list, currentPage)
                return;
            }
            default: {
                return;
            }
        }
    }
    handleSearchChange(type){
        this.props.fetchAllStoriesIdsAsync(type)
    }

    render(){
        const {list, currentPage} = this.props;
        return(
            <div className="filter">

                <label htmlFor="search"> Search </label>
                <select id="search" onChange={(e) => this.handleSearchChange(e.currentTarget.value)}>
                    <option value="topstories">Top Stories</option>
                    <option value="newstories">New Stories</option>
                    <option value="beststories">Best Stories</option>
                </select>

                <label htmlFor="by"> by </label>
                <select id="by" onChange={(event) => this.handleChange(event.currentTarget.value, list, currentPage)}>
                    <option value="popularity">Popularity</option>
                    <option value="date">Date</option>
                </select>
            </div>
        )
    }
}

function mapStateToProps(state){
    const {list, currentPage} = state.news;
    return {list, currentPage};
}

const mapDispatchToProps = dispatch => {
    return {
        sortByPopularity: (items,currentPage) => dispatch(sortByPopularity(items, currentPage)),
        sortByDate: (items,currentPage) => dispatch(sortByDate(items, currentPage)),
        
        fetchAllStoriesIdsAsync: (type) => dispatch(fetchAllStoriesIdsAsync(type))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);