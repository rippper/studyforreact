import React, { Component } from 'react';

class MainHeader extends Component {
    
    render () {
        return (
            <div className="MainHeader">
                <div>
                    <img src={require('../images/jyzx_logo.png')} />
                </div>
            </div>
        )
    }
}

export default MainHeader;