import React from 'react'
import Layout from '../components/Layout'
import styles from '../components/products.module.css'

const products = () => {
    return (
        <Layout>
            <div className={styles.page}>
                <h3>Products page</h3>
                <p className={styles.text}>Content of products</p>
            </div>
        </Layout>
    )
}

export default products