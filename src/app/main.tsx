import { render } from 'react-dom';
import * as React from 'react';
import App from './App';

export default function () {
    render(
        <App />, 
        document.getElementById("neutralinoapp"),
        function() {
            console.log("React is render");
        })
};