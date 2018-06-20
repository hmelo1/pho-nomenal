import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="blue-grey darken-4">
      <div className="nav-wrapper">
        <Link to ="/" className="brand-logo center"> PHO-NOMINAL!</Link>
      </div>
    </nav>
  )
}
