import React from 'react'

const Book = props => (
  <div className="col-xs-6 col-sm-3" key={props.id}>
    <div className="thumbnail">
      <img alt="" className="img-responsive" src={props.cover} />
    </div>
  </div>
)

export default Book
