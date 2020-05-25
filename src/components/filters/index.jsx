import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchAllStoriesIdsAsync} from '../../actions/network.js';
import './style/style.css'

class Filters extends Component {
    constructor(props){
        super(props);
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }
    
    handleSearchChange(type){
        this.props.fetchAllStoriesIdsAsync(type)
    }

    renderFilters(){
        const { currentPage, searchBy, searchFor, searchType } = this.props;
        return (
            <div className="filter">
                <label htmlFor="search"> Search </label>
                <select id="search" onChange={(e) => this.handleSearchChange({searchType: e.currentTarget.value, currentPage, searchBy, searchFor})}>
                    <option value="comment">Comments</option>
                    <option value="story">Stories</option>
                </select>

                <label htmlFor="by"> by </label>
                <select id="by" onChange={(e) => this.handleSearchChange({searchBy: e.currentTarget.value, currentPage, searchFor, searchType })}>
                    <option value="">Popularity</option>
                    <option value="_by_date">Date</option>
                </select>

                <label htmlFor="by"> for </label>
                <select id="by" onChange={(e) => this.handleSearchChange({searchFor: e.currentTarget.value, currentPage, searchBy, searchType })}>
                    <option value="all">All time</option>
                    <option value="last24">Last 24h</option>
                    <option value="pastWeek">Past Week</option>
                    <option value="pastMonth">Past Month</option>
                    <option value="pastYear">Past Year</option>
                </select>
            </div>
        )
    }

    render(){
        return !this.props.showSettings ? this.renderFilters() : "";
    }
}

const mapStateToProps = state => {
    const {currentPage, searchType, searchBy, searchFor} = state.news;
    return {currentPage, searchType, searchBy, searchFor};
}

const mapDispatchToProps = dispatch => ({
        fetchAllStoriesIdsAsync: (type) => dispatch(fetchAllStoriesIdsAsync(type))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filters);