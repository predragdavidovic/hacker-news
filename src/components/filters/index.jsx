import React, {Component} from 'react';
import {connect} from 'react-redux';
import {sortByPopularity, sortByDate} from '../../actions/sort.js'

import './style/style.css'

class Filters extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
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

    render(){
        const {list, currentPage} = this.props;
        return(
            <div className="filter">

                <label htmlFor="search"> Search </label>
                <select id="search" onChange={(e) => this.props.fetchNews()}>
                    <option value="topstories">Top Stories</option>
                    <option value="newstories">New Stories</option>
                    <option value="beststories">Best Stories</option>
                </select>

                <label htmlFor="by"> by </label>
                <select id="by" onChange={(event) => this.handleChange(event.currentTarget.value, list, currentPage)}>
                    <option value="popularity">Popularity</option>
                    <option value="date">Date</option>
                </select>

                <label htmlFor="for"> for </label>
                <select id="htmlFor">
                    <option value="alltime">All time    </option>
                    <option value="last24">Last 24h</option>
                    <option value="pastweek">Past Week</option>
                    <option value="pastmonth">Past Month</option>
                    <option value="pastyear">Past Year</option>
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
        sortByDate: (items,currentPage) => dispatch(sortByDate(items, currentPage))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);