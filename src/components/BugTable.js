import React from "react";

class BugTable extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Line</th>
            <th>Bug Number</th>
            <th>Title</th>
            <th>User</th>
            <th>State</th>
            <th>Body</th>
            <th>Created at</th>
          </tr>
        </thead>
        <tbody>
          {this.props.results.map((it, index) => (
            <tr key={it.id}>
              <td>{index + 1}</td>
              <td>{it.number}</td>
              <td>{it.title}</td>
              <td>{it.user.login}</td>
              <td>{it.state}</td>
              <td>{it.body}</td>
              <td>{it.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default BugTable;
