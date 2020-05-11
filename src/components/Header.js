import React, {Component} from 'react';
import {
  Link,
} from 'react-router-dom'
import debounce from 'debounce';

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchString: "",
    }

    this.searchMovie = this.searchMovie.bind(this)
    this.navToSearchDebounced = debounce(this.navToSearch, 500)
  }

  searchMovie(e) {
    this.setState({
      searchString: e.target.value
    })

    this.navToSearchDebounced()
  }

  navToSearch() {
    this.props.history.push(`/search/${this.state.searchString}`)
  }

  render() {
    return (
      <div className="ui borderless main menu fixed" id="header">
        <div className="ui text container">
          <div className="header item center aligned">
            <Link to='/'>Moviefone!</Link>
          </div>

          <div className="item right aligned category search">
            <div className="ui icon input">
              <input
                className="prompt"
                type="text"
                placeholder="Search movies..."
                onChange={this.searchMovie}
                autoFocus
              />
              <i className="search icon"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
