import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const UpdateBookInfo = () => {

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');
  const { id } = useParams()

  useEffect(() => {

        axios.get("https://amil-book-manager-api.herokuapp.com/api/books/" + id)
            .then((res) => {
                    setTitle(res.data.title);
                    setAuthor(res.data.author);
                    setIsbn(res.data.isbn);
                }).catch((e) => {
                    console.log("Error fetching on update old data");
                }
            )
    }, [])

    const onSubmit = e => {

        e.preventDefault();

        const data = {
            title: title,
            isbn: isbn,
            author: author
        };

        axios.put("https://amil-book-manager-api.herokuapp.com/api/books/" + id, data)
            .then((res) => {
                alert("Updated successfully");
            }).catch((err) => {
                alert("Can not update")
            })
    }
        return(

            <div className="UpdateBookInfo">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <br />
                  <Link to="/" className="btn btn-outline-warning float-left">
                      Show Book List
                  </Link>
                </div>
                <div className="col-md-8 m-auto">
                  <h1 className="display-4 text-center">Edit Book</h1>
                  <p className="lead text-center">
                      Update Book's Info
                  </p>
                </div>
              </div>

              <div className="col-md-8 m-auto">
              <form noValidate onSubmit={onSubmit}>
                <div className='form-group'>
                  <label htmlFor="title">Title</label>
                  <input
                    type='text'
                    placeholder='Title of the Book'
                    name='title'
                    className='form-control'
                    value={title}
                    onChange={(e) => {setTitle(e.target.value)}}
                  />
                </div>

                <div className='form-group'>
                <label htmlFor="isbn">ISBN</label>
                  <input
                    type='text'
                    placeholder='ISBN'
                    name='isbn'
                    className='form-control'
                    value={isbn}
                    onChange={(e) => {setIsbn(e.target.value)}}
                  />
                </div>

                <div className='form-group'>
                <label htmlFor="author">Author</label>
                  <input
                    type='text'
                    placeholder='Author'
                    name='author'
                    className='form-control'
                    value={author}
                    onChange={(e) => {setAuthor(e.target.value)}}
                  />
                </div>

                <br />

                <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Book</button>
                </form>
              </div>

            </div>
          </div>
        );
}

export default UpdateBookInfo;