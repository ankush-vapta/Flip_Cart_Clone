import React from 'react'
import { Link } from 'react-router-dom'


const Cards = ({ item }) => {
  // console.log(item, "item")

  return (

    <>
      {


        <div className="container-fluid" key={item.id}>
          <div className="row">
            <div className="col-md-12 my-3" key={item.id}>

              <div className="card bg-light" key={item.id}>
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <h5 className="card-title">{item.username}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{item.categories}</h6>
                  <p className="card-text">{item.description}</p>
                  <Link className="card-link" to={`details/${item._id}`} >Card link</Link>
                  <a href="/" className="card-link">Another link</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      }

    </>
  )
}

export default Cards