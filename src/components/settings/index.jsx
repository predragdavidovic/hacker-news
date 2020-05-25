import React, {Component} from 'react';
import {connect} from 'react-redux';
import {searchSettings} from '../../actions/search.js'

import './style/style.css';

class Settings extends Component {
    constructor(props){
        super(props);
        this.state = {
            hitsPerPage: 50,
        }
    }

    render(){
        return (
            <div className="settings_container">
                <p>Settings</p>
                <div className="settings_container_display">
                    <span className="settings_container_heading"> Display Options</span>
                    <hr/>
                    <div className="settings_container_content">
                        <label htmlFor="hitsPerPage"> Hits per page </label>
                        <select id="hitsPerPage" onChange={(e) => {this.setState({hitsPerPage: e.target.value})}}>
                            <option value={10}>10</option>
                            <option value={20}>20</option>
                            <option value={30}>30</option>
                            <option value={50}>50</option>
                        </select>
                    </div>
                </div>
                <div className="settings_container_ranking">
                    <span className="settings_container_heading">Ranking Options</span>
                    <hr/>
                    <div className="settings_container_content">
                        <div>
                            <label htmlFor="defaultType"> Default type </label>
                            <select id="hitsPerPage" onChange={(e) => {}}>
                                <option value={"comments"}>Stories</option>
                                <option value={"stories"}>Comments</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="defaultBy"> Default by </label>
                            <select id="defaultBy" onChange={(e) => {}}>
                                <option value={"comments"}>Most popular first</option>
                                <option value={"stories"}>Most recent first</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="settings_container_button">
                    <span onClick={() => {this.props.searchSettings(this.state.hitsPerPage)}}> Apply </span>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    searchSettings: (item) => dispatch(searchSettings(item))
})

export default connect(null, mapDispatchToProps)(Settings);