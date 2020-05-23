import React, {Component} from 'react';
import {connect} from 'react-redux';

import Header from './header/index.jsx';
import Filters from './filters/index.jsx';
import Result from './result/index.jsx';
import Pagination from './pagination/index.jsx';

import {fetchAllStoriesIdsAsync} from '../actions/network.js'

import './style.css'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentPage: 1,
        }
        this.handleCurrentPage = this.handleCurrentPage.bind(this);
    }

    componentDidMount(){
        this.props.fetchAllStoriesIdsAsync();
    }

    handleCurrentPage(currentPage){
        const {visitedPages} = this.props;
        this.setState({currentPage})

        if (!visitedPages.includes(currentPage)) {
            this.props.fetchAllStoriesIdsAsync(currentPage)
            return;
        }
        window.scrollTo(0, 0)
    }

    render(){
        const {currentPage} = this.state;

        return (
            <div className="container">
                <Header/>
                <Filters/>
                <Result currentPage={currentPage}/>
                <Pagination 
                    currentPage={currentPage}
                    onPageChange={this.handleCurrentPage}
                />
            </div>
        )
    }
}

function mapStateToProps(state){
    const {nbPages, visitedPages} = state.news;
    return {nbPages, visitedPages};
}

export default connect(mapStateToProps, {fetchAllStoriesIdsAsync})(App);