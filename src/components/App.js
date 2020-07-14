import React, {Component} from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import apiKey from '../config';
import axios from 'axios';
import SearchForm from './SearchForm'
import Nav from './Nav'
import Gallery from './Gallery'

class App extends Component {

constructor() {
  super()
  this.state = {
      searchTag: 'camel', //must be initiated with something or the flickr.photos.search API doesn't work
      pictures: []
  }
}

componentDidMount() {
  this.updatePictures(this.state.searchTag)
}

/*updatePicture()
- receive a string as an argument
uses Axios to retrieve data form the flickr API
then sets the application state to include the array of pictures returned, and the searchTag to the word passed in as an argument
catches errors and prints them to the log
*/

updatePictures = (word) => {
  let flickrUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&safe_search=2&tags=${word}&per_page=24&format=json&nojsoncallback=1`
  axios.get(flickrUrl)
     .then(res => {
        this.setState({
          searchTag: word,
          pictures: [...res.data.photos.photo]
        })
      })
    .catch(e => {
      console.log("Damn, couldn't get the data", e)
    })
}

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm updateTag={this.updatePictures}/>
          <Nav updateTag={this.updatePictures}/>
          <Switch>
            <Route exact path="/" render={() => <Gallery pictureBook={this.state.pictures}/>}/>
            <Route path="/cats" render={() => <Gallery pictureBook={this.state.pictures}/>}/>
            <Route path="/dogs" render={() => <Gallery pictureBook={this.state.pictures}/>}/>
            <Route path="/computers" render={() => <Gallery pictureBook={this.state.pictures}/>}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
