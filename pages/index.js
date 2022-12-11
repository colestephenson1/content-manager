import React, { useState, useEffect } from "react"
import Layout from "../components/Layout"
import ResourceHighlight from "../components/ResourceHighlight"
import ResourceList from "../components/ResourceList"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"

export default function Home( {resources} ) {

  return (
    <div>
      <Layout>
        <ResourceHighlight resources={resources.slice(0, 2)}/>
        <Newsletter/>
        <ResourceList resources={resources.slice(2)}/>
        <Footer/>
      </Layout>
      
    </div>
  )
}


export async function getServerSideProps() {

  const resData = await fetch("http://localhost:3000/api/resources");
  const data = await resData.json()

  return {
    props: {
      resources: data
    }
  }
}

// export async function getStaticProps() {

//   const resData = await fetch("http://localhost:3000/api/resources");
//   const data = await resData.json()

//   return {
//     props: {
//       resources: data
//     }
//   }
// }