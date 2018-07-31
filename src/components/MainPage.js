import React from 'react'
import Link from 'gatsby-link'
import Price from '../components/Price'
import VoucherContainer from '../components/VoucherContainer'
import Shortid from 'shortid'
import styled from 'styled-components'

import sound1 from '../audio/frog_croaking_x1.mp3'

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
      vouchers : [
        {
          key: Shortid.generate(),
          title: 'Maultaschen gebr.',
          color: '#BADA55',
          price: 6.5,
          deposit: 2.5,
          depositMark: true,
          others: [
            'test1',
            'test2',
            'test3',
          ]
        },
        {
          key: Shortid.generate(),
          title: 'Bier',
          color: 'red',
          price: 2.5,
          deposit: 2,
        },
        {
          key: Shortid.generate(),
          title: 'Kräusen',
          color: 'green',
          price: 2.3,
          deposit: 2,
          depositMark: true,
          deposit: 2,
        },
        {
          key: Shortid.generate(),
          title: 'Wein',
          color: 'orange',
          price: 2.5,
          deposit: 0,
        },
      ],

      currentVouchers: {},

      totalPrice: 0.0

    }

    this.onVoucherPressed = this.onVoucherPressed.bind(this)
    this.resetVouchers = this.resetVouchers.bind(this)
  }

  onVoucherPressed(voucher) {
    this.playSound()
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
    this.setState({currentVouchers: {} })
  }

  playSound() {
    let myAudio = new Audio()
    myAudio.src = sound1
    myAudio.play()
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
