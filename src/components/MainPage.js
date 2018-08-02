import React from 'react'
import Link from 'gatsby-link'
import Price from '../components/Price'
import VoucherContainer from '../components/VoucherContainer'
import Shortid from 'shortid'
import styled from 'styled-components'

import sound1 from '../audio/cash_register_01.mp3'
import sound2 from '../audio/cash_register_02.mp3'
import vouchers from '../content/vouchers'

const Container = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`

class MainPage extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      vouchers : vouchers,

      currentVouchers: {},

      totalPrice: 0.0,

      muted: true,
    }

    this.onVoucherPressed = this.onVoucherPressed.bind(this)
    this.resetVouchers = this.resetVouchers.bind(this)
  }

  onVoucherPressed(voucher) {
    this.playSound(sound2)
    this.addVoucher(voucher.key)

  }

  addVoucher(key) {
    let currentVouchers = this.state.currentVouchers

    if(currentVouchers[key]) currentVouchers[key] = ++currentVouchers[key]
    else currentVouchers[key] = 1

    this.setState({currentVouchers})
  }

  getTotalPrice() {
    let totalPrice = 0.0
    for (let key in this.state.currentVouchers) {
      let voucher = this.voucherByKey(key)
      totalPrice += (voucher.price + voucher.deposit) * this.state.currentVouchers[key]
    }

    return totalPrice
  }

  voucherByKey(key) {
    return this.state.vouchers.find(element => element.key === key)
  }

  resetVouchers(){
    this.playSound(sound1)
    this.setState({currentVouchers: {} })
  }

  playSound(src) {
    if(!this.state.muted) {
      let myAudio = new Audio()
      myAudio.src = src
      myAudio.play()
    }
  }

  render(){
    return (
      <Container className='main-container'>
        <Price amount={this.getTotalPrice()} primaryColor='#121212' currency='€' onReset={this.resetVouchers}/>
        <VoucherContainer vouchers={this.state.vouchers} onVoucherPressed={this.onVoucherPressed}/>
        {/* <Link to="/settings/">zu den Einstellungen</Link> */}
      </Container>
    )
  }

}

export default MainPage
