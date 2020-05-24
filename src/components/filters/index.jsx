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

    render(){
        const {currentPage} = this.props;
        return(
            <div className="filter">
                <label htmlFor="search"> Search </label>
                <select id="search" onChange={(e) => this.handleSearchChange({searchType: e.currentTarget.value, currentPage})}>
                    <option value="comment">Comments</option>
                    <option value="story">Stories</option>
                </select>

                <label htmlFor="by"> by </label>
                <select id="by" onChange={(e) => this.handleSearchChange({searchBy: e.currentTarget.value, currentPage})}>
                    <option value="">Popularity</option>
                    <option value="_by_date">Date</option>
                </select>
            </div>
        )
    }
}

function mapStateToProps(state){
    const {currentPage} = state.news;
    return {currentPage};
}

const mapDispatchToProps = dispatch => ({
        fetchAllStoriesIdsAsync: (type) => dispatch(fetchAllStoriesIdsAsync(type))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filters);