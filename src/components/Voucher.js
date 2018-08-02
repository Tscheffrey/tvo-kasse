import React, { Component } from 'react'
import styled from 'styled-components'

import media from '../helpers/media'

import { readableColor, ellipsis, invert } from 'polished'

const VoucherWrapper = styled.div`
  height: auto;
  width: 100%;
  ${media.l`width: 50%;`}
  ${media.xl`width: 33.33%;`}
  padding: 8px;

`

const VoucherInner = styled.div`
  color: ${props => readableColor(props.bgcolor)};
  height: 100%;
  width: 100%;
  background: ${props => props.bgcolor ? props.bgcolor : 'grey' };
  cursor: pointer;
  user-select: none;
  padding: 16px;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 0 30px 6px  rgba(142, 142, 142, 0.5);
  border: 1px solid rgba(0,0,0,0.1);
  transition: transform 100ms cubic-bezier(.01,.68,.33,1.44), box-shadow 100ms cubic-bezier(.01,.68,.33,1.44);
  :active {
    box-shadow: 0 0 30px 6px  rgba(142, 142, 142, 0);
    transform: translateY(6px);
  }
`

const Title = styled.span`
  font-size: 28px;
  font-family: 'Roboto Condensed';
  font-weight: 600;
  ${ellipsis('250px')}
`

const Subtitle = styled.span`
  font-size: 14px;
  font-family: 'Roboto Condensed';
`

const TitleContainer = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`

const SubtitleContainer = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: top;
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
  white-space: nowrap;
  opacity: ${props => props.visible ? 0.5 : 0 };
`

const DepositLabel = styled.span`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 12px;
  text-transform: uppercase;
  margin-right: 8px;
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
    let subtitle = this.props.item.others ? 'oder ' + this.props.item.others.join(', ') : ''
    return (
      <VoucherWrapper>
        <VoucherInner onMouseDown={this.onClick} bgcolor={this.props.item.color}>
          <TitleContainer>
            <Title title={this.props.item.title}>{this.props.item.title}</Title>
            <Price>{this.totalPrice()}</Price>
          </TitleContainer>
          <SubtitleContainer>
            <Subtitle>{subtitle}</Subtitle>
            <Deposit visible={!(this.props.item.deposit == 0)}><DepositLabel>Pfand</DepositLabel>{this.deposit()}</Deposit>
          </SubtitleContainer>
        </VoucherInner>
      </VoucherWrapper>
    )
  }

}

export default Voucher
