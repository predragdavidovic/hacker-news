import React, {Component} from 'react';
import './style/style.css';

class Header extends Component {

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
                    <input type="text" placeholder="Search stories by title, url or author" />
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

export default Header;