import React, { Component } from 'react'
import styled from 'styled-components'
import createAbsoluteGrid from 'react-absolute-grid'
import Shortid from 'shortid'

const VoucherWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 12px;
`

const VoucherInner = styled.div`
  height: 100%;
  width: 100%;
  background: red;
`

function Voucher(props)  {
  return (
    <VoucherWrapper>
      <VoucherInner>
        {props.item.title}
      </VoucherInner>
    </VoucherWrapper>
      )
}

const items = [
  {key: Shortid.generate(), title: 'test1'},
  {key: Shortid.generate(), title: 'test2'},
  {key: Shortid.generate(), title: 'test3'}
]

const AbsoluteGrid = createAbsoluteGrid(Voucher, {someProp: 'test'})

class VoucherContainer extends React.Component {
  constructor(props){
    super(props)
  }

  render(){

    return(
      <AbsoluteGrid items={items} itemWidth={270} itemHeight={170} animation='transform 200ms ease' responsive/>
    )
  }

}

export default VoucherContainer
