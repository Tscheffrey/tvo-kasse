import React, { Component } from 'react'

class Price extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    let amountRounded = this.props.amount.toFixed(2)
    let amountLeft = Math.floor(amountRounded).toString()

    let amountRight = amountRounded.toString().split('.')[1]


    return(
      <div className='price-container'>
        <span className='price-value'>
          <span className='price-left'>{amountLeft}</span>
          <span className='price-right'>,{amountRight}</span>
          <span className='price-currency'>{this.props.currency}</span>
        </span>
      </div>
    )
  }

}

export default Price
