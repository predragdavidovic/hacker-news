import React, {Component} from 'react';
import {connect} from 'react-redux';
import {sortByPopularity, sortByDate} from '../../actions/sort.js'

import './style/style.css'

class Filters extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(selectOption, list){
        switch(selectOption){
            case 'popularity': {
                this.props.sortByPopularity(list)
                return;
            }
            case 'date': {
                this.props.sortByDate(list)
                return;
            }
            default: {
                return;
            }
        }
    }

    render(){
        const {list} = this.props;
        return(
            <div className="filter">

                <label htmlFor="search"> Search </label>
                <select id="search" onChange={(e) => this.props.fetchNews()}>
                    <option value="topstories">Top Stories</option>
                    <option value="newstories">New Stories</option>
                    <option value="beststories">Best Stories</option>
                </select>

                <label htmlFor="by"> by </label>
                <select id="by" onChange={(event) => this.handleChange(event.currentTarget.value, list)}>
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
    const {list} = state.news;
    return {list};
}

const mapDispatchToProps = dispatch => {
    return {
        sortByPopularity: item => dispatch(sortByPopularity(item)),
        sortByDate: item => dispatch(sortByDate(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);