import * as React from "react"

import Hero from 'src/components/Hero';
import FeatureSection from 'src/components/FeatureSection';
import Layout from "src/components/Layout";

// markup
const IndexPage = () => {
  return (
    <Layout>
        <title>Home Page</title>
        <Hero />
        <FeatureSection />
    </Layout>
  )
}

export default IndexPage
