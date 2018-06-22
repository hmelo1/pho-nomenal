import React, {Component} from 'react';
import { connect } from 'react-redux';


class Breakfast extends Component {
  componentDidMount() {
    console.log("Breakfasts")
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
            Breakfast!
          </li>
          <li>
            Testing!
          </li>
        </ul>
      </div>
    )
  }
}

export default Breakfast;
