import React from 'react'
import styled from 'styled-components'
import { readableColor, ellipsis } from 'polished'

import media from '../helpers/media'

const VoucherWrapper = styled.div`
  height: auto;
  min-height: 103px;
  width: 100%;
  ${media.l`width: 50%;`}
  ${media.xl`width: 33.33%;`}
  padding: 8px;
`
const CounterWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`

const VoucherInner = styled.div`
  color: ${props => readableColor(props.bgcolor)};
  height: 100%;
  width: 100%;
  background: ${props => (props.bgcolor ? props.bgcolor : 'grey')};
  cursor: pointer;
  user-select: none;
  padding: 16px;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 0 8px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: transform 100ms cubic-bezier(0.01, 0.68, 0.33, 1.44),
    box-shadow 100ms cubic-bezier(0.01, 0.68, 0.33, 1.44);
  :active {
    box-shadow: 0 0 8px 4px rgba(0, 0, 0, 0.1);
    transform: translateY(3px);
  }
  ${media.down.m`
    padding: 8px;
  `}
`

const Title = styled.span`
  font-size: 28px;
  font-family: 'Roboto Condensed';
  font-weight: 700;
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
  font-weight: 700;
  white-space: nowrap;
`

const Deposit = styled.span`
  font-family: 'Roboto Mono', monospace;
  font-size: 24px;
  font-weight: 300;
  white-space: nowrap;
  opacity: 0.5;
`

const DepositLabel = styled.span`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 12px;
  line-height: 12px;
  text-transform: uppercase;
  margin-right: 8px;
`

const Counter = styled.span`
  /* font-family: 'Roboto Mono', monospace;
  font-size: 1rem;
  white-space: nowrap; */
  display: inline-block;
  border-radius: 20px;
  padding-top: 2px;
  transition: opacity 100ms ease, transform 100ms ease;
  transform: ${props => (props.visible ? 'none' : 'translateY(12px)')};
  opacity: ${props => (props.visible ? '0.5' : '0')};
`

const CounterBadge = styled.div`
  color: white;
  font-family: 'Roboto Mono', monospace;
  font-weight: 700;
  font-size: 12px;
  height: 26px;
  min-width: 26px;
  padding: 0 3px;
  background: #232323;
  position: absolute;
  right: -7px;
  top: -7px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 100ms ease, transform 100ms ease;
  transform: ${props => (props.visible ? 'none' : 'scale(0.2)')};
  opacity: ${props => (props.visible ? '1' : '0')};
  z-index: 10;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
`

const CounterBadgeText = styled.span`
  position: relative;
  top: -1px;
`

class Voucher extends React.Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    if (this.props.onPress) this.props.onPress(this.props.item)
  }

  formatPrice(price) {
    return price.toLocaleString('de-DE', { minimumFractionDigits: 2 })
  }

  totalPrice() {
    return this.formatPrice(this.props.item.price + this.props.item.deposit)
  }

  deposit() {
    return this.formatPrice(this.props.item.deposit)
  }

  render() {
    const { count, item } = this.props
    let subtitle = this.props.item.others
      ? 'oder ' + this.props.item.others.join(', ')
      : ''
    return (
      <VoucherWrapper>
        <CounterWrapper>
          <VoucherInner onMouseDown={this.onClick} bgcolor={item.color}>
            <TitleContainer>
              <Title title={item.title}>{item.title}</Title>
              <Price>{this.totalPrice()}</Price>
            </TitleContainer>
            <SubtitleContainer>
              <Subtitle>{subtitle}</Subtitle>
              {item.deposit > 0 && (
                <Deposit>
                  <DepositLabel>davon Pfand</DepositLabel>
                  {this.deposit()}
                </Deposit>
              )}
            </SubtitleContainer>
          </VoucherInner>
          <CounterBadge visible={count > 0}>
            <CounterBadgeText>{count}</CounterBadgeText>
          </CounterBadge>
        </CounterWrapper>
      </VoucherWrapper>
    )
  }
}

export default Voucher
