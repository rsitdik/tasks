import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "./NavBar.css"

class NavBar extends Component {
    render() {
        return (
            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Задачи</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/add">Добавить задачу</Link>
                </li>
            </ul>
        );
    }
}

export default NavBar;