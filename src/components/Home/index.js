import {Component} from 'react'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {isLoggedin: false}

  onClickButton = () => {
    this.setState(prevState => ({isLoggedin: !prevState.isLoggedin}))
  }

  render() {
    const {isLoggedin} = this.state
    return (
      <div>
        <Message isLoggedin={isLoggedin} />
        {isLoggedin ? (
          <Logout logout={this.onClickButton} />
        ) : (
          <Login login={this.onClickButton} />
        )}
      </div>
    )
  }
}

export default Home
