import React from 'react'
import Layout from '../components/layout';
import Header from '../components/header';
import Homeintroduction from '../components/home/introduction/homeintroduction';
import Homeabout from '../components/home/about/homeabout';
import Roade from '../components/home/roade/roade';
import Tesmonial from '../components/home/testemonial/tesmonial';
import Partners from '../components/partens/partners';


const index = () => {
    return (
        <Layout>
            <Header />
            <Homeintroduction />
            <Homeabout />
            <Roade />
            <Tesmonial />
            <Partners />
        </Layout>
    )
}

export default index
