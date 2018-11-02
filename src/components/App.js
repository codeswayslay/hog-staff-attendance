import React, { Component, Fragment } from 'react';
import WelcomePanel from './welcome/WelcomePanel';
import LoginPanel from './welcome/LoginPanel';
import 'typeface-roboto';

class App extends Component {
  state = {
    delay: 500,
    duration: 900,
    bar_health: 0,
    buffer: 10,
    bar_multiplier: 100,
    welcome_fade_in: true,
    login_fade_in: false,
    switch_to_login: false
  };

  componentDidMount() {
    setTimeout(() => {
      this.timer = setInterval(this.progressBarLoad, 500);
    }, this.state.delay*3)
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  progressBarLoad = () => {
    const { bar_health, bar_multiplier } = this.state;
    if (bar_health > 100) {
      clearInterval(this.timer);
      this.setState({ welcome_fade_in: false, login_fade_in: true });
      //delay switching to login screen so fade effect on welcome screen can execute properly
      setTimeout(() => {
        this.setState({ switch_to_login: true });
      }, this.state.delay*5);
    } else {
      const diff = Math.random() * bar_multiplier;
      const diff2 = Math.random() * bar_multiplier;
      this.setState({ bar_health: bar_health + diff, buffer: bar_health + diff + diff2 });
    }
  };

  render() {
    const { switch_to_login } = this.state;

    return (
      <Fragment>
        {
          !switch_to_login
            ?
            <WelcomePanel
              {...this.state}
            />
            :
            <LoginPanel
              {...this.state}
            />
        }
      </Fragment>
    );
  }
}

export default App;