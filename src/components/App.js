import React, {Component} from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import {withRouter} from 'react-router'
import apiKey from '../config';
import axios from 'axios';
import SearchForm from './SearchForm'
import Nav from './Nav'
import Gallery from './Gallery'
import NotFound from './NotFound'

const SearchWithRouter = withRouter(SearchForm);

class App extends Component {

constructor() {
  super()
  this.state = {
      searchTag: '', //must be initiated with something or the flickr.photos.search API doesn't work
      loading: true,
      pictures: []
  }
}

componentDidMount() {
  this.updatePictures(this.state.searchTag)
}

componentDidUpdate(prevProps, prevState) {
 let regex = /^\//
 if(this.props.location.pathname !== prevProps.location.pathname) {
   let newSearchTerm = this.props.location.pathname.replace(regex,"")
   this.updatePictures(newSearchTerm);
 }
}

/*updatePicture()
- receive a string as an argument
uses Axios to retrieve data form the flickr API
then sets the application state to include the array of pictures returned, and the searchTag to the word passed in as an argument
catches errors and prints them to the log
*/

updatePictures = (word) => {
  this.setState({
    loading: true
  })
  let flickrUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&safe_search=2&tags=${word}&per_page=24&format=json&nojsoncallback=1`
  axios.get(flickrUrl)
     .then(res => {
        this.setState({
          searchTag: word,
          loading: false,
          pictures: [...res.data.photos.photo]
        })
      })
    .catch(e => {
      console.log("Damn, couldn't get any data for that page", e)
      //failing to fetch empties the pictures array in state, so that NoResults can be shown
      this.setState({
        searchTag: '',
        loading: false,
        pictures: []
      })
    })
}

  render() {
    return (

        <div className="container">
          <SearchWithRouter updateTag={this.updatePictures}/>
          <Nav updateTag={this.updatePictures}/>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/sunrise"/>}/>
            <Route exact path="/:searchTag" render={() => <Gallery loading={this.state.loading} pictureBook={this.state.pictures}/>}/>
            <Route component={NotFound}/> {/*To capture 404 - caused by funky routes*/}
          </Switch>
        </div>

    );
  }
}

export default withRouter(App);
