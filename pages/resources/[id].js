import React from 'react'
import Layout from '../../components/Layout'

const ResourceDetails = ({resource}) => {
  return (
    <Layout>
        <section className="hero ">
            <div className="hero-body">
                <div className="container">
                    <section className="section">
                        <div className="columns">
                        <div className="column is-8 is-offset-2">
                            <div className="content is-medium">
                            <h2 className="subtitle is-4">{resource.createdAt}</h2>
                            <h1 className="title">{resource.title}</h1>
                            <p>{resource.description}</p>
                            </div>
                        </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    </Layout>
  )
}

export async function getStaticPaths() {

    const resData = await fetch("http://localhost:3000/api/resources");
    const data = await resData.json()
    const paths = data.map(resource => {
        return {
            params: {id: resource.id}
        }
    })

    return {
        paths,
        fallback: false 
    }
}

export async function getStaticProps({params}) {

    const resData = await fetch(`http://localhost:3001/api/resources/${params.id}`)
    const data = await resData.json()

    return {
        props: {
            resource: data
        }
    }
}

export default ResourceDetails