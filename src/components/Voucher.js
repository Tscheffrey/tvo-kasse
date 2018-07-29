import React, { Component } from 'react'
import styled from 'styled-components'

const VoucherWrapper = styled.div`
  height: 200px;
  width: 50%;
  padding: 12px;
`

const VoucherInner = styled.div`
  height: 100%;
  width: 100%;
  background: ${props => props.bgcolor ? props.bgcolor : 'grey' };
  cursor: pointer;
  user-select: none;
  padding: 12px;
`

const Title = styled.span`

`

class Voucher extends React.Component {
  constructor(props){
    super(props)
    this.totalPrice = props.item.price + props.item.deposit
    this.onClick = this.onClick.bind(this)
  }

  onClick(){
    if(this.props.onPress) this.props.onPress(this.props.item)
  }

  render(){
    return (
      <VoucherWrapper>
        <VoucherInner onClick={this.onClick} bgcolor={this.props.item.color}>
          <Title>{this.props.item.title}</Title>

           - {this.totalPrice} €
        </VoucherInner>
      </VoucherWrapper>
    )
  }

}

export default Voucher
