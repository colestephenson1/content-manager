import React from 'react'
import Link  from "next/link"

const ResourceHighlight = ({ resources }) => {

  return (
    <section className="hero ">
      <div className="hero-body">
        <div className="container">
            {
                resources.map(resource => {
                    let {title, description } = resource
                    return (
                        <section key={title} className="section">
                            <div className="columns">
                              <div className="column is-8 is-offset-2">
                                  <div className="content is-medium">
                                    <h2 className="subtitle is-4">December 25, 2022</h2>
                                    <h1 className="title">{title}</h1>
                                    <p>{description}</p>
                                    <Link legacyBehavior href={`/resources/${resource.id}`}><p className="button is-link">Details</p></Link> 
                                  </div>
                              </div>
                            </div>
                        </section>
                    )
                })
            }
        </div>
      </div>
    </section>

  )
}

export default ResourceHighlight