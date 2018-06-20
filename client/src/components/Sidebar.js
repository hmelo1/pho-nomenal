import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Grid, Row, Col, Modal } from 'react-bootstrap'

export const Sidebar = () => {
  return (
    <div className="modal-dialog" style={{"width" : "100%"}}>
      <div className="modal-header">
        <Link to ="/" className="nav-justified">Menu Options</Link>
      </div>
      <div className="modal-body">
        <ul style={{"list-style-type" : "none", "padding-left" : "0px"}}>
          <li>
            <Link to ="/appetizers" className="btn btn-primary btn-block">Appetizers</Link>
          </li>
          <li>
            <Link to ="/breakfast" className="btn btn-primary btn-block">Breakfast</Link>
          </li>
          <li>
            <Link to ="/breakfast" className="btn btn-primary btn-block">Lunch</Link>
          </li>
          <li>
            <Link to ="/breakfast" className="btn btn-primary btn-block">Dinner</Link>
          </li>
          <li>
            <Link to ="/breakfast" className="btn btn-primary btn-block">Specials</Link>
          </li>
          <li>
            <Link to ="/breakfast" className="btn btn-danger btn-block">BBeveragesreakfast</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
