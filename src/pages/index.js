import React from 'react'
import Layout from '../components/Layout'
import {Link} from 'gatsby'

const index = () => {
  return (
    <Layout>
        <h3>Homepage</h3>
        <Link to="/blog">Go to blog</Link>
        <br/>
        <Link to="/products">Go to products</Link>
        <br/>
        <Link to="/examples">Go to examples</Link>
    </Layout>
  )
}

export default index
