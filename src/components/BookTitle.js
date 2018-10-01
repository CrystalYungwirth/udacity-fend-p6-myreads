import React, { Component } from 'react'

//Essentially the same as BookCover
export default class BookTitle extends Component {
	render(){
      return(
        this.props.book.title 
        ? <p className="book-title">{this.props.book.title}</p>
       : ''
      )
    }
}