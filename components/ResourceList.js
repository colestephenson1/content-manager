import React from 'react'

const ResourceList = ({ resources }) => {
  return (
    <section className="hero ">
      <div className="hero-body">
        <div className="container">

          <section className="section">
            <div className="columns is-multiline is-variable is-8">
                {
                resources.map(resource => {
                    let {title, description, createdAt } = resource
                    return (
                        <div key={title} className="column is-5 is-offset-1 ">
                            <div className="content is-medium">
                            <h2 className="subtitle is-5 has-text-grey">{createdAt}</h2>
                            <h1 className="title has-text-black is-3">{title}</h1>
                            <p className="has-text-dark">{description}</p>
                            </div>
                        </div>
                    )
                })
                }
              
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}

export default ResourceList