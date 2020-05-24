import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchOnSearchAsync} from '../../actions/network.js'
import './style/style.css';

class Header extends Component {

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value){
        this.props.onSearch(value)
    }

    render(){
        return (
            <div className="header">
                <div className="header_logo">
                </div>
                <div className="header_name">
                    Search <br/> Hacker News
                </div>
                <div className="header_search">
                    <div className="header_search_element">

                    </div>
                    <input 
                        type="text" 
                        placeholder="Search stories by title, url or author" 
                        onChange={(e) => this.handleChange(e.target.value)}/>
                </div>
                <div className="header_settings">
                    <div className="header_settings_image">
                    </div>    
                    <div className="header_settings_text">
                        Settings
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {searchType} = state.news;
    return {searchType};
}

const mapDispatchToProps = dispatch => ({
    fetchOnSearchAsync: (item) => dispatch(fetchOnSearchAsync(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);