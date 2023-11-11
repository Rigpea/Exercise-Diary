import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//
export default class Navbar extends Component {
    //navbar from the bootstrap documentation converted to work for our representation:
    render() {
        return (
            //Line by line explanation
            //nav creates a navigation link with several Bootstrap classes applied for styling
            //Link is a component from React Router, a library for handling navigation
                //it creates a link to the home page :"/" and applies Bootstrap bootsrap navbar
                // brand class for stypling 
                //with label ExerTracker
            //div acts as a container for the navbar items and uses Bootstrap classes for
                // collapsing behaviour on smaller screens
                //alligning items withing the navbar
            //ul defines an unordered list with bootstrap classes. the naavbar-nav styles the list,
                // mr-auto pushes the navigation
                //itesms to the left
            //li clasname; each li(list item) is part of the navigation menu. 
                //the nvbar styles each of these elements as individual elements in the navbar
            //link to: create a clickable link direction to somehwere
            
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg"> 
            <Link to="/" className="navbar-brand">ExcerTracker</Link>
            <div classsName="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
              <Link to="/" className="nav-link">Exercises</Link>
              </li>
              <li className="navbar-item">
              <Link to="/create" className="nav-link">Create Exercise Log</Link>
              </li>
              <li className="navbar-item">
              <Link to="/user" className="nav-link">Create User</Link>
              </li>
            </ul>
            </div>
        </nav>
        );
    }
}


