import React from 'react'
import Link from 'gatsby-link'
import Price from '../components/Price'

const IndexPage = () => (
  <div className='main-container'>
  <Price amount={14.03} primaryColor='#121212' currency='€' />
  <Link to="/settings/">zu den Einstellungen</Link>
  </div>
)

export default IndexPage
