import React, {Component} from 'react';
import {connect} from 'react-redux';

import Loader from '../loader/index.jsx'
import Item from '../item/index.jsx'

import './style/style.css';

class Result extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
    }

    render(){   
        const {list, isFetching} = this.props.news;
        return (
            <div className="search_result">
            {
               isFetching ? <Loader/> : list.map(item => Item(item))
            }
            </div>
        )
    }
}

function mapStateToProps({news}){
    return {news}
}

export default connect(mapStateToProps, null)(Result);