import React, {Component} from 'react';

class UserList extends Component {
  state = {
    showGame: false
  }
 
  onButtonToggle = () => {
    this.setState({showGame: !this.state.showGame});
  }
 
  render () {
    const { users } = this.props;
    return(
      <div className='ui clearing segment'>
          <button class="ui blue right floated button" onClick={this.onButtonToggle}>{this.state.showGame ? 'Show' : 'Hide'} Number</button>
          <ol className='ui list'>
              {users.map((user, index) => (
                   <li key={index}>{user.username} played {this.state.showGame ? user.score : 'X'} games</li>
              ))}
          </ol>
      </div>
   );
  }
  
}

export default UserList;

