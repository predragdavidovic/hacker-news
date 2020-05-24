import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from './header/index.jsx';
import Filters from './filters/index.jsx';
import Result from './result/index.jsx';
import Pagination from './pagination/index.jsx';
import {renderAppropriateList} from '../utilites/index.js'
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
        this.props.fetchAllStoriesIdsAsync({});
    }

    handleCurrentPage(currentPage){
        const {visitedStory, visitedComment, searchType, searchBy, searchFor } = this.props;
        let list = renderAppropriateList(searchType, visitedStory, visitedComment) 
         this.setState({currentPage})
       
        if (!list.includes(currentPage)) {
            this.props.fetchAllStoriesIdsAsync({currentPage, searchType, searchBy, searchFor})
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
    const {visitedComment, visitedStory, searchType, searchBy, searchFor} = state.news;
    return {visitedComment, visitedStory, searchType, searchBy, searchFor};
}

export default connect(mapStateToProps, {fetchAllStoriesIdsAsync})(App);