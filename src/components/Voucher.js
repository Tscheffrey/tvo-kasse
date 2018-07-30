import React, { Component } from 'react'
import styled from 'styled-components'

const VoucherWrapper = styled.div`
  height: auto;
  width: 33%;
  padding: 8px;
`

const VoucherInner = styled.div`
  height: 100%;
  width: 100%;
  background: ${props => props.bgcolor ? props.bgcolor : 'grey' };
  cursor: pointer;
  user-select: none;
  padding: 16px;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 0 30px 6px rgba(32,31,36,.11);
  transition: transform 100ms cubic-bezier(.01,.68,.33,1.44),box-shadow 100ms cubic-bezier(.01,.68,.33,1.44);
  :active {
    box-shadow: none;
    transform: scale(0.99);
  }
`

const Title = styled.span`
  font-size: 24px;
  font-family: 'Roboto Condensed'
  font-weight: 700;
`

const Subtitle = styled.span`
  font-size: 12px;
  font-family: 'Roboto Condensed'
`

const TitleContainer = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`

const SubtitleContainer = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`

const Price = styled.span`
  font-family: 'Roboto Mono', monospace;
  font-size: 24px;
  font-weight: 600;
`

const Deposit = styled.span`
  font-family: 'Roboto Mono', monospace;
  font-size: 24px;
  font-weight: 300;
`

class Voucher extends React.Component {
  constructor(props){
    super(props)
    this.onClick = this.onClick.bind(this)
  }

  onClick(){
    if(this.props.onPress) this.props.onPress(this.props.item)
  }

  formatPrice(price) {
    return price.toLocaleString('de-DE',  {minimumFractionDigits: 2})
  }

  totalPrice(){
    return this.formatPrice(this.props.item.price + this.props.item.deposit)
  }

  deposit(){
    return this.formatPrice(this.props.item.deposit)
  }

  render(){
    return (
      <VoucherWrapper>
        <VoucherInner onClick={this.onClick} bgcolor={this.props.item.color}>
          <TitleContainer>
            <Title>{this.props.item.title}</Title>
            <Price>{this.totalPrice()}</Price>
          </TitleContainer>
          <SubtitleContainer>
            <Subtitle>{'test'}</Subtitle>
            <Deposit>{this.deposit()}</Deposit>
          </SubtitleContainer>
        </VoucherInner>
      </VoucherWrapper>
    )
  }

}

export default Voucher
