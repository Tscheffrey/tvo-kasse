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
      ]
    }
  }

  voucherAdded(voucher) {
    console.log(voucher);
  }

  render(){
    <div className='main-container'>
      <Price amount={14.03} primaryColor='#121212' currency='€' />
      <VoucherContainer vouchers={this.state.vouchers} voucherAdded/>
      <Link to="/settings/">zu den Einstellungen</Link>
    </div>
  }

}

export default MainPage
