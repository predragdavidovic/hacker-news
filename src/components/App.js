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
            showSettings: false,
        }
        this.handleCurrentPage = this.handleCurrentPage.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSettings = this.handleSettings.bind(this);
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

    handleSettings(){
        this.setState({showSettings: !this.state.showSettings})
    }

    handleCurrentPage(currentPage){
        const {visitedStory, visitedComment, searchType, searchBy, searchFor, hitsPerPage} = this.props;
        let list = renderAppropriateList(searchType, visitedStory, visitedComment) 
        this.setState({currentPage})
       
        if (this.state.searchValue) {
            this.props.fetchOnSearchAsync({currentPage, searchType, value: this.state.searchValue, hitsPerPage})
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
        const {searchType, hitsPerPage} = this.props;
        this.setState({searchValue: value})
        this.props.fetchOnSearchAsync({currentPage, searchType, value, hitsPerPage})
    }

    render(){
        const {currentPage, showSettings, searchValue} = this.state;
        return (
            <div className="container">
                <Header 
                    onSearch={this.handleSearch}
                    onSettings={this.handleSettings}
                    showSettings={showSettings}
                    />
                <Filters
                    showSettings={showSettings}
                    searchValue={searchValue}
                />
                <Result 
                    currentPage={currentPage}
                    searchValue={searchValue}
                    showSettings={showSettings}
                    />
                <Pagination 
                    currentPage={currentPage}
                    onPageChange={this.handleCurrentPage}
                    showSettings={showSettings}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    const {visitedComment, visitedStory, searchType, searchBy, searchFor} = state.news;
    const {searchType: sSearchType} = state.search;
    const {hitsPerPage} = state.search;
    return {visitedComment, visitedStory, searchType, sSearchType, searchBy, searchFor, hitsPerPage};
}

export default connect(mapStateToProps, {fetchAllStoriesIdsAsync, fetchOnSearchAsync})(App);