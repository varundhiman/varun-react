import React, { Component } from 'react';
import Header from './header';
import NewsContent from './content';

export default class Main extends Component {
    render() {
        return (
            <div>
                <Header/>
                <NewsContent/>
            </div>
        )
    }
}
