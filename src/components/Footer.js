import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div className="container-fluid text-center pb-5">
                <hr className="my-5" />
                <small className="text-muted">All rights reserved. <a target="_blank" className="link-warning mx-1" ></a> © 2022 |
                     made using <a className="text-muted">React JS</a>
                </small>
            </div>
        );
    }
}

export default Footer;