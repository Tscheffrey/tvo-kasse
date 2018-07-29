import React, { Component } from 'react'
import styled from 'styled-components'

const VoucherWrapper = styled.div`
  height: 200px;
  width: 50%;
  padding: 8px;
`

const VoucherInner = styled.div`
  height: 100%;
  width: 100%;
  background: ${props => props.bgcolor ? props.bgcolor : 'grey' };
  cursor: pointer;
  user-select: none;
  padding: 32px;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
`

const Title = styled.span`
  font-size: 48px;
  font-family: 'Roboto Condensed'
`

const Price = styled.span`
  font-family: 'Roboto Mono', monospace;
  font-size: 32px;
  position: absolute;
  bottom: 32px;
  right: 32px;
`

class Voucher extends React.Component {
  constructor(props){
    super(props)
    this.onClick = this.onClick.bind(this)
  }

  onClick(){
    if(this.props.onPress) this.props.onPress(this.props.item)
  }

  totalPrice(){
    return this.props.item.price + this.props.item.deposit
  }

  render(){
    return (
      <VoucherWrapper>
        <VoucherInner onClick={this.onClick} bgcolor={this.props.item.color}>
          <Title>{this.props.item.title}</Title>
          <Price>{this.totalPrice()}</Price>

        </VoucherInner>
      </VoucherWrapper>
    )
  }

}

export default Voucher
