import React, { Component } from 'react';
import UserApplication from './UserApplication';
import UserList from './UserList';

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
	state = {
      users: [],
      userExist: false
    }
	
	createUsers = (newUser) => {
     
      const exist = this.state.users.filter(user => {
        return user.username === newUser.username;
      })
     
      if(!exist.length) {
         this.setState({users: [...this.state.users, newUser],
                       userExist: false}) 
      } else {
         this.setState({userExist: true})      }
     
    }

  render() {
    return (
      <div className='ui container'>
       	<h1>Add Username</h1>
		<UserApplication 
       		createUsers={this.createUsers}
      		userExist={this.state.userExist}
		/>
		<h2>List of Users</h2>
    	<UserList users={this.state.users} gameNumber={this.state.gameNumber}/>
      </div>
    );
  }
}

export default App;
