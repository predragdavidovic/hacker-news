import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from './header/index.jsx';
import Filters from './filters/index.jsx';
import Result from './result/index.jsx';
import Pagination from './pagination/index.jsx';
import {renderAppropriateList} from '../utilites/index.js'
import {fetchAllStoriesIdsAsync, fetchOnSearchAsync} from '../actions/network.js'
import './style.css'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentPage: 1,
            searchValue: "",
        }
        this.handleCurrentPage = this.handleCurrentPage.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount(){
        this.props.fetchAllStoriesIdsAsync({});
    }

    componentDidUpdate(prevProps, prevState){
        const {currentPage, searchValue} = this.state;
        const {searchType, searchBy, searchFor} = this.props;
        if (searchValue === "" && prevState.searchValue !== "") {
            this.props.fetchAllStoriesIdsAsync({currentPage, searchType, searchBy, searchFor})
        }
    }

    handleCurrentPage(currentPage){
        const {visitedStory, visitedComment, searchType, searchBy, searchFor } = this.props;
        let list = renderAppropriateList(searchType, visitedStory, visitedComment) 
         this.setState({currentPage})
       
        if (this.state.searchValue) {
            this.props.fetchOnSearchAsync({currentPage, searchType, value: this.state.searchValue})
            window.scrollTo(0, 0);
            return;   
        }

        if (!list.includes(currentPage)) {
            this.props.fetchAllStoriesIdsAsync({currentPage, searchType, searchBy, searchFor})
            return;
        }

        window.scrollTo(0, 0)
    }

    handleSearch(value) {
        const {currentPage} =this.state;
        const {searchType} = this.props;
        this.setState({searchValue: value})
        this.props.fetchOnSearchAsync({currentPage, searchType, value})
    }

    render(){
        const {currentPage} = this.state;

        return (
            <div className="container">
                <Header 
                    onSearch={this.handleSearch}
                    />
                <Filters/>
                <Result 
                    currentPage={currentPage}
                    searchValue={this.state.searchValue}
                    />
                <Pagination 
                    currentPage={currentPage}
                    onPageChange={this.handleCurrentPage}
                />
            </div>
        )
    }
}

function mapStateToProps(state){
    const {visitedComment, visitedStory, searchType, searchBy, searchFor} = state.news;
    return {visitedComment, visitedStory, searchType, searchBy, searchFor};
}

export default connect(mapStateToProps, {fetchAllStoriesIdsAsync, fetchOnSearchAsync})(App);