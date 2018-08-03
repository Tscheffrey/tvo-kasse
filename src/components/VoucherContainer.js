import React, { Component } from 'react'
import styled from 'styled-components'
import createAbsoluteGrid from 'react-absolute-grid'
import Shortid from 'shortid'
import Voucher from './Voucher'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    height: 100%;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
`

class VoucherContainer extends React.Component {
  constructor(props){
    super(props)
    this.onVoucherPressed = this.onVoucherPressed.bind(this)
    this.absoluteGrid = createAbsoluteGrid(Voucher, {onPress: this.onVoucherPressed})
  }

  onVoucherPressed(voucher){
    if(this.props.onVoucherPressed) this.props.onVoucherPressed(voucher)
  }

  render(){
    return(
      <Container>
        {this.props.vouchers.map( voucher => <Voucher key={voucher.key} item={voucher} onPress={this.props.onVoucherPressed} />)}
      </Container>
    )
  }

}

export default VoucherContainer
