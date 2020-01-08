import React from 'react'
import Price from '../components/Price'
import VoucherContainer from '../components/VoucherContainer'
import styled from 'styled-components'
import Fullscreen from 'react-fullscreen-crossbrowser'

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
  constructor(props) {
    super(props)

    this.state = {
      currentVouchers: [],
      totalPrice: 0.0,
      muted: true,
      isFullscreenEnabled: false,
    }

    this.onVoucherPressed = this.onVoucherPressed.bind(this)
    this.resetVouchers = this.resetVouchers.bind(this)
  }

  onVoucherPressed(voucher) {
    this.playSound(sound2)
    this.addVoucher(voucher.uuid)
  }

  addVoucher(voucherId) {
    const { currentVouchers } = this.state
    const selectedVoucher = vouchers.find(voucher => voucher.uuid === voucherId)
    currentVouchers.push(selectedVoucher)
    this.setState({ currentVouchers })
  }

  getPrice() {
    const { currentVouchers } = this.state
    let price = 0.0
    let deposit = 0.0

    for (const voucher of currentVouchers) {
      price += voucher.price
      deposit += voucher.deposit
    }

    const totalPrice = price + deposit

    return { price, deposit, totalPrice }
  }

  resetVouchers() {
    this.playSound(sound1)
    this.setState({ currentVouchers: [] })
  }

  playSound(src) {
    if (!this.state.muted) {
      let myAudio = new Audio()
      myAudio.src = src
      myAudio.play()
    }
  }
  render() {
    const { totalPrice } = this.getPrice()
    const { currentVouchers, isFullscreenEnabled } = this.state
    return (
      <Fullscreen
        enabled={this.state.isFullscreenEnabled}
        onChange={isFullscreenEnabled => this.setState({ isFullscreenEnabled })}
      >
        <Container className="main-container">
          <Price
            isFullscreenEnabled={isFullscreenEnabled}
            onFullScreenPressed={() =>
              this.setState({
                isFullscreenEnabled: !isFullscreenEnabled,
              })
            }
            amount={totalPrice}
            primaryColor="#121212"
            currency="€"
            onReset={this.resetVouchers}
          />
          <VoucherContainer
            currentVouchers={currentVouchers}
            vouchers={vouchers}
            onVoucherPressed={this.onVoucherPressed}
          />
          {/* <Link to="/settings/">zu den Einstellungen</Link> */}
        </Container>
      </Fullscreen>
    )
  }
}

export default MainPage
