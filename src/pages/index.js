import * as React from 'react';
import Carlist from '../components/carlist';
import Layout from '../components/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from '../components/hero';


const IndexPage = () => {
  return (
    <>
    <Hero />
    <Layout>
    <Carlist />
    </Layout>
    </>
  )
}

export default IndexPage