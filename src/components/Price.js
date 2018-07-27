import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background: ${props => props.primaryColor};
    color: white;
    width: 100%;
    display: flex;
    justify-content: flex-end;
`

const Value = styled.div`
    font-size: 80px;
`

const Currency = styled.span`
    font-weight: 100;
    opacity: 0.5;
    margin-left: 16px;
`

class Price extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    let amountRounded = this.props.amount.toFixed(2)
    let amountLeft = Math.floor(amountRounded).toString()

    let amountRight = amountRounded.toString().split('.')[1]

    return(
      <Container className='price-container' primaryColor={this.props.primaryColor}>
        <Value>
          <span className='price-left'>{amountLeft}</span>
          <span className='price-right'>,{amountRight}</span>
          <Currency className='price-currency'>{this.props.currency}</Currency>
        </Value>
      </Container>
    )
  }

}

export default Price
