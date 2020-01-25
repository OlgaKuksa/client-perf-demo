import React from "react";

class BugTable extends React.Component {
  render() {
    const count = this.props.results.length;
    return count ? (
      <div>
        <div className="count-message">{count} bug(s) found</div>
        <table>
          <thead>
            <tr>
              <th>Line</th>
              <th>Bug Number</th>
              <th>Refs</th>
              <th>Title</th>
              <th>User</th>
              <th>State</th>
              <th>Body</th>
              <th>Created at</th>
            </tr>
          </thead>
          <tbody>
            {this.props.results.map((it, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{it.number}</td>
                <td>{it.refCount}</td>
                <td>{it.title}</td>
                <td>
                  {it.user.login} ({it.user.issuesCount})
                </td>
                <td>{it.state}</td>
                <td>{it.body}</td>
                <td>
                  {new Date(it.created_at).toLocaleDateString("en-us", {
                    year: "numeric",
                    month: "numeric",
                    day: "numeric"
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ) : (
      <div className="big-message">No bugs found</div>
    );
  }
}

export default BugTable;
