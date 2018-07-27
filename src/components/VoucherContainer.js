import React, { Component } from 'react'
import styled from 'styled-components'
import createAbsoluteGrid from 'react-absolute-grid'
import Shortid from 'shortid'

const VoucherInner = styled.div`
  height: 100px;
  width: 200px;
  background: red;
`

function Voucher(props)  {
  return <VoucherInner>{props.item.title}</VoucherInner>
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
      <AbsoluteGrid items={items} itemWidth={200} itemHeight={100} animation='transform 200ms ease' responsive/>
    )
  }

}

export default VoucherContainer
