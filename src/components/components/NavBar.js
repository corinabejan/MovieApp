import React from 'react'
import { NavLink } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  return (
    <div className="navigation">
      <NavLink className="home" to='/'>Home Page</NavLink>
      <NavLink className="about" to='/about'>About Page</NavLink>
      <NavLink className="discover" to='/discover'>Discover Movies Page</NavLink>
    </div>
  )
}
