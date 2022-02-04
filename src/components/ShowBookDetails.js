import React, { useEffect, useState } from 'react';
import "../App.css";
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';

const ShowBookDetails = (props) => {
    const [book, setBook] = useState({})
    const { id } = useParams();
    let navigate = useNavigate();
    useEffect(() => {
        axios.get('https://amil-book-manager-api.herokuapp.com/api/books/' + id)
            .then((res) => {
              setBook(res.data)
              axios.Cancel()
            }).catch((err) => {
                    console.log("Error fetching single book")
                })
    }, [])

    const onDeleteClick = id => {
        axios.delete('https://amil-book-manager-api.herokuapp.com/api/books/' + id)
            .then((res) => {
              alert("Deleted successfully");
              setBook({});
              navigate("/");
            }).catch((err) => {
                alert("Can not delete book!")
            })

    }

      return(
        <div className="ShowBookDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Book List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Book's Record</h1>
              <p className="lead text-center">
                  View Book's Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>          <div>
            <table className="table table-hover table-dark">
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Title</td>
                  <td>{ book.title }</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Author</td>
                  <td>{ book.author }</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>ISBN</td>
                  <td>{ book.isbn }</td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={() => onDeleteClick(book._id)}>Delete Book</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-book/${book._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Book
              </Link>
              <br />
            </div>

          </div>

        </div>
      </div>
      )
    }


export default ShowBookDetails