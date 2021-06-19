import React, {Component} from 'react';

class MovieList extends Component {
    constructor(){
        super();
        this.state = {
            movies: ['Van Helsing', 'Suberbad', 'A Quiet Place', 'Hot Rode', '2 Fast 2 Furious', 'The Prestige'],
            userInput: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            userInput: e.target.value
        })
    }

    handleAddMovie = () => {
        const { movies, userInput } = this.state;
        this.setState({
            movies: [...movies, userInput],
            userInput: ''
        })
    }

    render() {
        const { movies } = this.state;
        const movieDisplay = movies.map(element => <p>{element}</p>)
        return (
            <section>
                <input onChange={(e) => this.handleChange(e)} placeholder='Movie Title' value={this.state.userInput} />
                <button onClick={() => this.handleAddMovie()}>add movie</button>
                {movieDisplay}
            </section>
        )
    }
}

export default MovieList;