import React from 'react';
import { Form, Button } from 'semantic-ui-react';

class TestButton extends React.Component {
  state = { //state will be changed when user types something in form field
    data:{  //stores the form data
      email: '',
      password:''
    },
    loading: false,
    errors: {}
  };
  onChange = e => this.setState({
     data: {...this.state.data, [e.target.name]: e.target.value }
  });
  render(){
return(
    <h1>Test Button clicked!</h1>
)
  }
}

export default TestButton;
