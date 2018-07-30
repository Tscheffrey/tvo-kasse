import React, { Component } from 'react'
import styled from 'styled-components'

const VoucherWrapper = styled.div`
  height: 200px;
  width: 33%;
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
  box-shadow: 0 0 30px 6px rgba(32,31,36,.11);
  transition: transform 300ms cubic-bezier(.01,.68,.33,1.44),box-shadow .5s cubic-bezier(.01,.68,.33,1.44);
  :active {
    box-shadow: 0 0 40px 13px rgba(32,31,36,.11);
    transform: scale(1.01);
  }
`

const Title = styled.span`
  font-size: 24px;
  font-family: 'Roboto Condensed'
`

const TitleContainer = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`

const Price = styled.span`
  font-family: 'Roboto Mono', monospace;
  font-size: 24px;
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
    return (this.props.item.price + this.props.item.deposit).toLocaleString('de-DE',  {minimumFractionDigits: 2})
  }

  render(){
    return (
      <VoucherWrapper>
        <VoucherInner onClick={this.onClick} bgcolor={this.props.item.color}>
          <TitleContainer>
            <Title>{this.props.item.title}</Title>
            <Price>{this.totalPrice()}</Price>
          </TitleContainer>

        </VoucherInner>
      </VoucherWrapper>
    )
  }

}

export default Voucher
