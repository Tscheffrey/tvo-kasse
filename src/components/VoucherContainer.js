import React, { Component } from 'react'
import styled from 'styled-components'
import createAbsoluteGrid from 'react-absolute-grid'
import Shortid from 'shortid'
import Voucher from './Voucher'

const AbsoluteGrid = createAbsoluteGrid(Voucher, {someProp: 'test'})

class VoucherContainer extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <AbsoluteGrid items={this.props.vouchers} itemWidth={270} itemHeight={170} animation='transform 200ms ease' responsive/>
    )
  }

}

export default VoucherContainer
