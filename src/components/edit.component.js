import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class Edit extends Component {

    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
            title: '',
            redirectToReferrer: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:55729/api/books/'+this.props.match.params.id)
            .then(response => {
                this.setState({ 
                    title: response.data.title 
                });
            })
            .catch(function (error) {
                console.log(error);
            })
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

        axios.put('http://localhost:55729/api/books/'+this.props.match.params.id, obj)
        .then(res => {
            if (res.status == 200)
            {
                this.setState({
                    title: '',
                    redirectToReferrer: true
                });
            }    
        });
        
        //this.props.history.push('/');
      }

    render() {
        const redirectToReferrer = this.state.redirectToReferrer;
        if (redirectToReferrer === true) {
            return <Redirect to="/" />
        }         
        return (
            <div style={{marginTop: 10}}>
                <h3>edit Book {this.props.match.params.id}</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Edit Book Title:  </label>
                        <input type="text" className="form-control" value={this.state.title} onChange={this.onChangeTitle}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Change Book" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}