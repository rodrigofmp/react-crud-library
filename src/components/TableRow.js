import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import packageJson from '../../package.json';

class TableRow extends Component {

  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }

  delete() {

    axios.delete(packageJson.backendBaseURL + 'api/books/' + this.props.obj.id)
      .then(res => {
        if (res.status == 200) {
          window.location.reload();
        }
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
        <tr>
          <td>
            {this.props.obj.title}
          </td>
          <td>
            <Link to={"/edit/"+this.props.obj.id} className="btn btn-secondary">Edit</Link>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;