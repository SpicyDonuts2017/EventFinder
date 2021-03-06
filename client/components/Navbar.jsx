import React from 'react';
import Search from './Search.jsx';
import { Menu, Icon, Header, Transition, Button, Radio } from 'semantic-ui-react';
import FacebookButton from './FacebookButton.jsx';

class Navbar extends React.Component {
	constructor(props) {
		super(props);
    this.state = {
      loggedIn: false
    };
	}

  componentWillReceiveProps({loggedIn}) {
    this.setState({loggedIn});
  }


	render () {
		return (
      
      <Menu id="nav" secondary >

        <Menu.Item>
          <Header as='h1' onClick={() => this.props.changeView('home')}><Icon name='search' verticalAlign='center'/>EventFinder</Header>
        </Menu.Item>

        <Menu.Item>
          <Radio slider label='Dashboard' onClick={() => this.props.changeView()} disabled={!this.state.loggedIn}/>
        </Menu.Item>

        <Menu.Item position='right'>
          <FacebookButton fb={FB} getUser={this.props.getUser}/>
        </Menu.Item>

      </Menu>
    )
	}
}

export default Navbar;