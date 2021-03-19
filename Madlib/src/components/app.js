import React, { Component } from 'react';
import Madlibform from './madlib_form';
import { Button } from 'reactstrap';


export default class App extends Component {
  render() {
    return (
      <div>
        <div className="backgroundSkew">
          <div className="madlib-heading">
            <h1>Terry's Mad Libs</h1>  
            <div className="madlib-subheading">
              Fill out the fields below and click the generate button<br/>to see the Mad Lib story.
            </div>
          </div>
          <Madlibform />
        </div>
      </div>
    );
  }
}
 