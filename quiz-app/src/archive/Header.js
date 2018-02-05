import React from 'react';
import './Header.css'

class Header extends React.Component {
    render() {
      return (
        <header class="header">
            <nav class="topNav">
                <a href="#home" class="navItem">Home</a>
                <a href="./index.html" class="navItem">Quizzes</a>
                <a href="#create-quiz" class="navItem active">Create Quiz</a>
                <div class="searchContainer">
                    <input type="text" class="navItem searchField" placeholder="Search.."></input>
                    <button class="navItem">Go</button>
                </div>
            </nav>
        </header>
        )
    }
}

export default Header;