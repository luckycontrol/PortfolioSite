import React from 'react'
import ReactDom from 'react-dom'

class MyForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      age: null,
      errorMessage: '',
    };
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    let err = '';

    if(!Number(this.state.age) && this.state.age != null) {
      err = <strong>Your age must be Number</strong>;
      this.setState({errorMessage: err});
    } else {
      alert("You're submitting " + this.state.username + " " + this.state.age);
    }
  }

  myChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    
    this.setState({[name]: value});
  }

  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
        <h1> Hello {this.state.username} {this.state.age} </h1>
        <p> Enter your name</p>
        <input type='text' name='username' onChange={this.myChangeHandler}/>

        <p> Enter your age </p>
        <input type='text' id='age' name='age' onChange={this.myChangeHandler}/>
        <button type='submit'>확인</button>
        {this.state.errorMessage}
      </form>
    );
  }
}

ReactDom.render(<MyForm/>, document.getElementById('root'));