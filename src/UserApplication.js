import React, { Component } from 'react';


class UserApplication extends Component {
  state = {
    firstName: '',
    lastName: '',
    username: '',
    score: 0
  }

  onFirstName = (e) => {
    this.setState({firstName: e.target.value});
  }

  onLastName = (e) => {
      this.setState({lastName: e.target.value});
   }

 onUsername = (e) => {
      this.setState({username: e.target.value});
   }


userObject = () => {
   const { firstName, lastName, username, score } = this.state;
  return {firstName, lastName, username, score};
}

onFormSubmit = (e) => {
  e.preventDefault();
  this.props.createUsers(this.userObject())
}

emptyInputs = () => {
  const { firstName, lastName, username } = this.state;
  return (firstName === '' && lastName === '') || username === '';
 }

  render() {
    return(
      <div className='ui very padded segment' style={{marginTop: '20px'}}>
      	<form class="ui form" onSubmit={this.onFormSubmit}>
      		<div className="field">
      			<label>Firs Name</label>
      			<input type="text" name="first-name" placeholder="First Name"
					value={this.state.firstName}
					onChange={this.onFirstName}
				/>
      		</div>
      		<div className='field'>
      			<label>Last Name</label>
      			<input type='text' name='last-name' placeholder='Last Name'
					value={this.state.lastName}
					onChange={this.onLastName}
				/>
      		</div>
      		<div className='field'>
      			<label>User Name</label>
      			<input type='text' name='user-name' placeholder='User Name'
					value={this.state.username}
					onChange={this.onUsername}
				/>
      		</div>
			<p style={{color: 'red'}}>
				{this.props.userExist && "User already exist, please use another username!"}
			</p>
      		<button className='ui blue button' 
					type='submit' 
					disabled={this.emptyInputs()}>
				Submit
			</button>
        </form>
		
      </div>
    );
  }
}

export default UserApplication;
