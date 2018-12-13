import React, { Component } from 'react';
import SeriesList from '../../components/SeriesList';

class Series extends Component {
	// The concept state is a bit similar to class static attribute
  	state = {
    	series: []
  	}

  	// Lifecycle tutorial: needs to understand callback function
  	// Async call to API and need to understand Promise
  	componentDidMount() {
    	fetch('http://api.tvmaze.com/search/shows?q=Vikings')
      		.then(response => response.json())
      		.then(json => this.setState({ series: json }))
  	}

	render() {
		return (
			<div>
				The length of series array - {this.state.series.length}
				<SeriesList list={this.state.series} />
			</div>
		)
	}
}

export default Series;