import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import packageJson from '../../package.json';

export default class Create extends Component {
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
  
        this.state = {
            title: '',
            redirectToReferrer: false
        }
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const obj = {
            title: this.state.title
        };

        axios.post(packageJson.backendBaseURL + 'api/books', obj)
        .then(res => {
            if (res.status == 200)
            {
                this.setState({
                    title: '',
                    redirectToReferrer: true
                });
            }    
        });

    }

    render() {
        const redirectToReferrer = this.state.redirectToReferrer;
        if (redirectToReferrer === true) {
            return <Redirect to="/" />
        }        
        return (
            <div style={{marginTop: 10}}>
                <h3>Add New Book</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Book Title:  </label>
                        <input type="text" className="form-control" value={this.state.title} onChange={this.onChangeTitle} required/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register Book" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}