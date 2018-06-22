import React, {Component} from 'react';
import { connect } from 'react-redux';


class Appetizers extends Component {
  componentDidMount() {
    console.log("Appetizers")
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
            Appetizers!
          </li>
          <li>
            Testing!
          </li>
        </ul>
      </div>
    )
  }
}

export default Appetizers;
