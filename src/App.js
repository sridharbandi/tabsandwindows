import React, {Component} from 'react';
import Windows from './components/Windows/Windows';
import NewWindow from './components/Windows/Window/NewWindow';
import { Route } from 'react-router-dom';
import Aux from './hoc/Aux';
import {BrowserRouter} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Aux>
                    <Route path='/' exact component={Windows}/>
                    <Route path='/window/:id' exact component={NewWindow} />
                    <Route path='/tab/:id' exact component={NewWindow} />
                </Aux>
            </BrowserRouter>
        );
    }
}

export default App;
