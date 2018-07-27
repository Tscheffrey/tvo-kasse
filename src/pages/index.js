import React from 'react'
import Link from 'gatsby-link'
import Price from '../components/Price'
import VoucherContainer from '../components/VoucherContainer'

const IndexPage = () => (
  <div className='main-container'>
    <Price amount={14.03} primaryColor='#121212' currency='€' />
    <VoucherContainer/>
    <Link to="/settings/">zu den Einstellungen</Link>
  </div>
)

export default IndexPage
