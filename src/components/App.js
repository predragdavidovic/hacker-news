import React, {Component} from 'react';
import Header from './header/index.jsx';
import Filters from './filters/index.jsx';

import './style.css'

class App extends Component {
    render(){
        return (
            <div>
                <Header/>
                <Filters/>
            </div>
        )
    }
}

export default App;