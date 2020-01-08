import React from 'react'
import styled from 'styled-components'
import resetIcon from '../images/loop.svg'
import FullscreenIcon from '../images/fullscreen.svg'
import FullscreenExitIcon from '../images/fullscreen-exit.svg'
import media from '../helpers/media'
import { isMobileSafari } from 'react-device-detect'

const Container = styled.div`
  background: ${props => props.primaryColor};
  color: white;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  flex-shrink: 0;
  height: 110px;
  ${media.down.m`
      height: 92px;
      `}
`

const Value = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 80px;
  ${media.down.m`
      font-size: 64px;
      padding-top: 4px;
      padding-bottom: 4px;
      `}
  margin-right: 16px;
  font-weight: 500;
`

const Currency = styled.span`
  font-weight: 100;
  margin-left: 16px;
  opacity: ${props => (props.visible ? 1 : 0.1)};
`

const AmountRight = styled.span`
  opacity: ${props => (props.visible ? 1 : 0.1)};
  ${props => (props.visible ? '' : 'font-weight: 100;')};
`

const AmountLeft = styled.span`
  opacity: ${props => (props.visible ? 1 : 0.1)};
  ${props => (props.visible ? '' : 'font-weight: 100;')};
`

const ResetButton = styled.div`
  height: 110px;
  width: 110px;
  ${media.down.m`
        position: fixed;
        bottom: 24px;
        right: 24px;
        border-radius: 50%;
        height: 88px;
        width: 88px;
        z-index: 3;
        box-shadow: 0px 4px 19px 8px rgba(47, 47, 47, 0.22);
        background-color: #2546bf;
        transition: transform 100ms cubic-bezier(.01,.68,.33,1.44), box-shadow 100ms cubic-bezier(.01,.68,.33,1.44);
        &:active {
          box-shadow: 0 0 30px 6px rgba(47, 47, 47, 0);
          transform: translateY(4px);
        }
        `}
  background: #1f1f1f;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:active .price-reset-icon {
    transform: rotate(-30deg);
  }
`

const ResetIcon = styled.img`
  height: 60%;
  width: 60%;
  object-fit: contain;
  transform: none;
  pointer-events: none;
  transition: transform 200ms cubic-bezier(0.01, 0.68, 0.33, 1.44);
`

const FullscreenButton = styled.div`
  height: 110px;
  width: 20px;
  background: #1f1f1f;
  cursor: pointer;
  padding: 24px;
  background-image: url(${props =>
    props.isFullscreenEnabled ? FullscreenExitIcon : FullscreenIcon});
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
  margin-right: auto;
  ${media.down.m`
      height: 92px;
      padding: 18px;
        `}
`

class Price extends React.Component {
  renderFullScreenButton() {
    const isBrowser = typeof window !== 'undefined'
    const isPwa = isBrowser
      ? window.matchMedia('(display-mode: standalone)').matches
      : false
    const hideFullscreenButton = isMobileSafari || isPwa
    if (!hideFullscreenButton)
      return (
        <FullscreenButton
          isFullscreenEnabled={this.props.isFullscreenEnabled}
          onClick={this.props.onFullScreenPressed}
        />
      )
  }

  render() {
    const { amount, placeholder, primaryColor, currency, onReset } = this.props
    const amountRounded = parseFloat(amount).toFixed(2)
    const amountLeft = Math.floor(amountRounded).toString()
    const amountRight = amountRounded.toString().split('.')[1]
    const rightSideVisible = amountRight !== '00'
    const amountIsNotZero = amount !== 0

    return (
      <Container className="price-container" primaryColor={primaryColor}>
        {!placeholder && (
          <>
            {this.renderFullScreenButton()}
            <Value>
              <AmountLeft className="price-left" visible={amountIsNotZero}>
                {amountLeft}
              </AmountLeft>
              <AmountRight className="price-right" visible={rightSideVisible}>
                ,{amountRight}
              </AmountRight>
              <Currency className="price-currency" visible={amountIsNotZero}>
                {currency}
              </Currency>
            </Value>
          </>
        )}
        <ResetButton onClick={onReset}>
          <ResetIcon src={resetIcon} className={'price-reset-icon'} />
        </ResetButton>
      </Container>
    )
  }
}

export default Price
