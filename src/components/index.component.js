import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import packageJson from '../../package.json';

export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {books: []};
    }
    componentDidMount(){
      axios.get(packageJson.backendBaseURL + 'api/books')
        .then(response => {
          this.setState({ books: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    tabRow(){
      return this.state.books.map(function(object, i){
          return <TableRow obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
        </div>
      );
    }
  }