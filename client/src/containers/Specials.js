import React, {Component} from 'react';
import { connect } from 'react-redux';


class Specials extends Component {
  componentDidMount() {
    console.log("Specials")
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
            Specials!
          </li>
          <li>
            Testing!
          </li>
        </ul>
      </div>
    )
  }
}

export default Specials;
