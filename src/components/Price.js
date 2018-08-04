import React, { Component } from 'react'
import styled from 'styled-components'
import ResetIcon from '../images/loop.svg'
import media from '../helpers/media'
import Responsive from 'react-responsive'

const MUp = props => <Responsive {...props} minWidth={576 - 1} />


const Container = styled.div`
    background: ${props => props.primaryColor};
    color: white;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    flex-shrink: 0;
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
    opacity: ${props => props.visible ? 1 : 0.1 };
`

const AmountRight = styled.span`
    opacity: ${props => props.visible ? 1 : 0.1 };
    ${props => props.visible ? '' : 'font-weight: 100;' };
    /*transition: opacity 100ms ease;*/
`

const AmountLeft = styled.span`
    opacity: ${props => props.visible ? 1 : 0.1 };
    ${props => props.visible ? '' : 'font-weight: 100;' };
    /*transition: opacity 100ms ease;*/
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
        :active {
          box-shadow: 0 0 30px 6px rgba(47, 47, 47, 0);
          transform: translateY(4px);
        }
        `}
    background: #1f1f1f;
    cursor: pointer;
    padding: 24px;
    background-image: url(${ResetIcon});
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: center;
`

class Price extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    let amountRounded = this.props.amount.toFixed(2)
    let amountLeft = Math.floor(amountRounded).toString()

    let amountRight = amountRounded.toString().split('.')[1]

    let rightSideVisible = (amountRight !== '00')

    let amountIsNotZero = (this.props.amount != 0)

    return(
      <Container className='price-container' primaryColor={this.props.primaryColor}>
        <Value>
          <AmountLeft className='price-left' visible={amountIsNotZero}>{amountLeft}</AmountLeft>
          <AmountRight className='price-right' visible={rightSideVisible}>,{amountRight}</AmountRight>
          <Currency className='price-currency'  visible={amountIsNotZero}>{this.props.currency}</Currency>
        </Value>
        {/* <MUp> */}
          <ResetButton onClick={this.props.onReset} />
        {/* </MUp> */}
      </Container>
    )
  }

}

export default Price
