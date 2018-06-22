import React, {Component} from 'react';
import { connect } from 'react-redux';


class Beverages extends Component {
  componentDidMount() {
    console.log("Beverages")
    console.log(this.props)
  }
  render(){
    return (
      <div>
        <ul>
          <li>
            Testing!
          </li>
          <li>
            Beverages!
          </li>
          <li>
            Testing!
          </li>
        </ul>
      </div>
    )
  }
}

export default Beverages;
