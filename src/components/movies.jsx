import React, { Component } from "react";

class Movies extends Component {
  state = {
    movies: [
      {
        _id: "525252",
        title: "X-Man",
        genre: { _id: "asdad5asdas5", name: "Action" },
        numberInStock: 6,
        dailyRentalRate: 2.5,
        publishDate: "2020-01-20",
      },
      {
        _id: "987654",
        title: "X-Man2",
        genre: { _id: "asdad5aasdavdsfbv5", name: "Action" },
        numberInStock: 7,
        dailyRentalRate: 3.5,
        publishDate: "2020-01-21",
      },
    ],
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  render() {
    if (this.state.movies.length === 0)
      return <p>There are no movies in the database</p>;

    return (
      <React.Fragment>
        <p>Showing {this.state.movies.length} movies in the database.</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
