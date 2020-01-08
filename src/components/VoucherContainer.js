import React from 'react'
import styled from 'styled-components'
import createAbsoluteGrid from 'react-absolute-grid'
import Voucher from './Voucher'
import media from '../helpers/media'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  height: 100%;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  ${media.down.m`
        padding-bottom: 40vh;
    `}
`

class VoucherContainer extends React.Component {
  constructor(props) {
    super(props)
    this.onVoucherPressed = this.onVoucherPressed.bind(this)
    this.absoluteGrid = createAbsoluteGrid(Voucher, {
      onPress: this.onVoucherPressed,
    })
  }

  onVoucherPressed(voucher) {
    if (this.props.onVoucherPressed) this.props.onVoucherPressed(voucher)
  }

  render() {
    const { vouchers, currentVouchers, onVoucherPressed } = this.props
    return (
      <Container>
        {vouchers.map(voucher => {
          const count = currentVouchers.filter(
            voucherElement => voucherElement.uuid === voucher.uuid
          ).length
          return (
            <Voucher
              key={voucher.uuid}
              voucher={voucher}
              onPress={onVoucherPressed}
              count={count}
            />
          )
        })}
      </Container>
    )
  }
}

export default VoucherContainer
