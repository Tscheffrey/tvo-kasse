import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import '../style/index.scss'
import favicon from '../images/favicon96.png'

import { ThemeProvider } from 'styled-components'

const theme = {
  primaryColor: 'red'
}

const Layout = ({ children, data }) => (
  <div>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          // { name: 'description', content: 'Sample' },
          // { name: 'keywords', content: 'sample, something' },
          { name: 'viewport', content: 'width=device-width, user-scalable=no' },
        ]}
        link={[
            { rel: 'shortcut icon', type: 'image/png', href: favicon }
        ]}
      />
      <div>
        {children()}
      </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
