import React from 'react';
import {Link} from 'react-router-dom';

import '../css/top-nav.css'

export default class TopNav extends React.Component {

    state = {
        search: '',
    }

    onSearchChange = (event) => {
        this.setState({search: event.target.value})
    }

    render() {
        const {search} = {...this.state};

        return (
            <ul className="top-nav-list">
              <li className="top-nav-item"><Link to="/">Home</Link></li>
              <li className="top-nav-item"><Link to="/quiz">Quiz</Link></li>
              <li className="top-nav-item"><Link to="/create">Create</Link></li>
              <li className="top-nav-item">
                <div className="search-wrapper">
                  <input type="text" className="search-field" onChange={this.onSearchChange} placeholder="Search quiz..."></input>
                  <Link to={"/search-quiz/"+search}>
                    <button className="search-button">Go</button>
                  </Link>
                </div>
              </li>
            </ul>
        )
    }
}