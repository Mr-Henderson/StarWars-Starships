import React, { Component } from 'react';
import StarshipList from '../components/StarshipList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
	constructor() {
		super()
		this.state = {
			starships: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		const urls = [
			'https://swapi.co/api/starships/',
			'https://swapi.co/api/starships/?page=2', 
			'https://swapi.co/api/starships/?page=3',
			'https://swapi.co/api/starships/?page=4'
		]
				
		Promise.all(urls.map(async url => {
			const response = await fetch(url);
			const moreStarships = await response.json();
			var combinedArrayOfStarships = this.state.starships;
			combinedArrayOfStarships.push(moreStarships.results);
			
			var sortedArrayOfStarships = combinedArrayOfStarships
				.flat()
				.sort((a, b) => a.name.localeCompare(b.name));
			
			this.setState({starships: sortedArrayOfStarships})
		}))
		.catch(error => 
			console.log('Error during fetching of starships:', error)
		);
	}
	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render() {
		const { starships, searchfield } = this.state; console.log(starships)
		const filteredStarships = starships.filter(starship => starship.name.toLowerCase().includes(searchfield.toLowerCase()));
			
			return !starships.length ?
				<h1 className='tc f-subheadline'>Loading ...</h1> :
				(
					<div className='tc'>
						<h1 className='f-subheadline'>STAR WARS</h1>
						<h2 className='f1'>STARSHIPS</h2>	
						<SearchBox searchChange={this.onSearchChange}/><br/>
						<Scroll>
							<br/><StarshipList starships={filteredStarships}/>
						</Scroll>
					</div>
				);
			}
	}

export default App;