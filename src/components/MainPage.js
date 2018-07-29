import React from 'react'
import Link from 'gatsby-link'
import Price from '../components/Price'
import VoucherContainer from '../components/VoucherContainer'
import Shortid from 'shortid'

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
          price: 6.5,
          deposit: 2.5,
          depositMark: true,
          price: 2.3,
          deposit: 2,
        }
      ],

      currentVouchers: {},

      totalPrice: 0.0

    }

    this.onVoucherPressed = this.onVoucherPressed.bind(this)
    this.resetVouchers = this.resetVouchers.bind(this)
  }

  onVoucherPressed(voucher) {
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

  render(){
    return (
      <div className='main-container'>
        <Price amount={this.getTotalPrice()} primaryColor='#121212' currency='€' onReset={this.resetVouchers}/>
        <VoucherContainer vouchers={this.state.vouchers} voucherAdded onVoucherPressed={this.onVoucherPressed}/>
        <Link to="/settings/">zu den Einstellungen</Link>
      </div>
    )
  }

}

export default MainPage
