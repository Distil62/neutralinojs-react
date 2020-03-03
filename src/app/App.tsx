import * as React from 'react';

export default () => {

    const [counter, setCounter] = React.useState(0);

    return <div>
        <h1 style={{color: 'white'}}>React is working Well</h1>
        <p style={{color: 'white'}}>
            {counter}
        </p>
        <button onClick={() => {
            setCounter(counter + 1);
        }} > add</button>
    </div>
}