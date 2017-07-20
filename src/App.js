import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import ThemeDefault from '../theme-default';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     navDrawerOpen: false,
  //   };
  //   this.handleChangeRequestNavDrawer = this.handleChangeRequestNavDrawer.bind(this);
  // }
  //
  // componentWillReceiveProps(nextProps) {
  //   if (this.props.width !== nextProps.width) {
  //     this.setState({ navDrawerOpen: nextProps.width === LARGE });
  //   }
  // }

  // handleChangeRequestNavDrawer() {
  //   this.setState({
  //     navDrawerOpen: !this.state.navDrawerOpen,
  //   });
  // }
  //
  // renderLeftDrawer() {
  //   const navDrawerOpen = this.state.navDrawerOpen;
  //   const { isLoggedIn } = this.props;
  //   if (isLoggedIn) {
  //     return (
  //       <LeftDrawer
  //         navDrawerOpen={navDrawerOpen}
  //         menus={[]}
  //       />
  //     );
  //   }
  //   return null;
  // }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Break Path</h2>
        </div>
      </div>
    );
  }
}

export default App;
