import React, { Component } from 'react'
import styled from 'styled-components'
import createAbsoluteGrid from 'react-absolute-grid'
import Shortid from 'shortid'
import Voucher from './Voucher'



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
      <this.absoluteGrid
        items={this.props.vouchers}
        itemWidth={270}
        itemHeight={170}
        animation='transform 200ms ease'
        responsive
      />
    )
  }

}

export default VoucherContainer
