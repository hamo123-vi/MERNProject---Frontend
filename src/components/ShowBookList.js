import React, { Component } from 'react';
import "../App.css";
import { Link } from 'react-router-dom';
import BookCard from './BookCard';
import axios from 'axios';

class ShowBookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        };
    }

    componentDidMount() {
        axios.get("https://amil-book-manager-api.herokuapp.com/api/books")
            .then(res => { this.setState({
                books: res.data
            }) }).catch(e => {
                console.log('Error fetching data');
            })
    }

    render() {
        const books = this.state.books;
        let bookList;
        if(!books) {
            bookList = "There are no books in database";
        } else {
            bookList = books.map((book, k) => 
                <BookCard book={book} key={k} />
            );
        }
        return(
            <div className="ShowBookList">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <br />
                  <h2 className="display-4 text-center">Books List</h2>
                </div>

                <div className="col-12">
                  <Link to="/create-book" className="btn btn-outline-warning float-right">
                    + Add New Book
                  </Link>
                  <br />
                  <br />
                  <hr />
                </div>

              </div>

              <div className="list">
                    {bookList}
              </div>
            </div>
          </div>
        );
    }
}

export default ShowBookList