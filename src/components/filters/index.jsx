import React, {Component} from 'react';
import './style/style.css'

class Filters extends Component {

    render(){
        return(
            <div className="filter">
                
                <label for="search"> Search </label>
                <select id="search">
                    <option value="all">All</option>
                    <option value="stories">Stories</option>
                    <option value="comments">Comments</option>
                </select>

                <label for="by"> by </label>
                <select id="by">
                    <option value="popularity">All</option>
                    <option value="Date">Stories</option>
                </select>

                <label for="for"> for </label>
                <select id="for">
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

export default Filters;