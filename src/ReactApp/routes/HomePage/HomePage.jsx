import React, { Component } from 'react';
import importcss from 'importcss';
import Button from 'react-bootstrap/lib/Button';
import styles from './HomePage.css';

@importcss(styles)
export default class HomePage extends Component {
  render() {
    return (
      <div styleName="root">
        <h1>Welcome to Blogger!</h1>
        <div>
          <Button bsStyle="primary">Войти</Button>
        </div>
        <hr />
        <div>
          Тут будут статьи
        </div>
      </div>
    );
  }
}
