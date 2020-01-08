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
  box-shadow: 100ms cubic-bezier(0.01, 0.68, 0.33, 1.44);
  &:active .voucher-content-wrapper {
    transform: scale(0.99);
  }
  ${media.down.m`
    padding: 8px;
  `}
`

const ContentWrapper = styled.div`
  height: 100%;
  width: 100%;
  transform: none;
  transition: transform 100ms cubic-bezier(0.01, 0.68, 0.33, 1.44);
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
  pointer-events: none;
`

class Voucher extends React.Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    this.props.onPress(this.props.voucher)
  }

  formatPrice(price) {
    return price.toLocaleString('de-DE', { minimumFractionDigits: 2 })
  }

  totalPrice() {
    const { voucher } = this.props
    return this.formatPrice(voucher.price + voucher.deposit)
  }

  renderDeposit() {
    return this.formatPrice(this.props.voucher.deposit)
  }

  render() {
    const { count, voucher } = this.props
    const subtitle = voucher.others ? 'oder ' + voucher.others.join(', ') : null
    return (
      <VoucherWrapper>
        <CounterWrapper>
          <VoucherInner onMouseDown={this.onClick} bgcolor={voucher.color}>
            <ContentWrapper className="voucher-content-wrapper">
              <TitleContainer>
                <Title title={voucher.title}>{voucher.title}</Title>
                <Price>{this.totalPrice()}</Price>
              </TitleContainer>
              <SubtitleContainer>
                <Subtitle>{subtitle}</Subtitle>
                {voucher.deposit > 0 && (
                  <Deposit>
                    <DepositLabel>davon Pfand</DepositLabel>
                    {this.renderDeposit()}
                  </Deposit>
                )}
              </SubtitleContainer>
            </ContentWrapper>
          </VoucherInner>
          <CounterBadge visible={count > 0}>{count}</CounterBadge>
        </CounterWrapper>
      </VoucherWrapper>
    )
  }
}

export default Voucher
