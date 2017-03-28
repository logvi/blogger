import React, { Component } from 'react';
import importcss from 'importcss';
import Button from 'react-bootstrap/lib/Button';
import styles from './HomePage.css';
import A from '../../components/A';

@importcss(styles)
export default class HomePage extends Component {
  render() {
    return (
      <div styleName='root'>
        Welcome to HomePageasdas
        <Button>Войти</Button>
        <hr />
        <A href="/counter">Go to CounterPage</A>
      </div>
    );
  }
}
