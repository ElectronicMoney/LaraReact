import React, { Component } from 'react';
import Dashboard from './Dashboard';

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <Dashboard />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
