import React from 'react'
import Layout from '../../components/Layout'
import { useState } from 'react'
import axios from "axios"
import { useRouter } from "next/router"

const DEFAULT_DATA = {
  title: "",
  description: "",
  link: "",
  priority: "2",
  timeToFinish: 60
}

const ResourceCreate = () => {

  const[form, setForm] = useState(DEFAULT_DATA)
  const router = useRouter()

  const submitForm = () => {
    axios.post("/api/resources", form)
    .then(_ => router.push("/"))
    .catch((error) => {alert(error.message)})
  }

  const resetForm = () => setForm(DEFAULT_DATA)

  const handleChange = (e) => {
    console.log(e.target.name)
    setForm({
      ...form,
      [e.target.name]: e.target.value  
    })
  }

  return (
    <Layout>
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <div className="resource-form">
              <h1 className="title">Add New Resource</h1>
              <form>
                <div className="field">
                  <label className="label">Title</label>
                  <div className="control">
                    <input className="input" type="text" placeholder="Learn Next.js" name="title" value={form.title} onChange={(e) => handleChange(e)}/>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Description</label>
                  <div className="control">
                    <textarea className="textarea" placeholder="Enter description here" name="description" value={form.description} onChange={(e) => handleChange(e)}></textarea>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Link</label>
                  <div className="control">
                    <input className="input" type="text" name="link" placeholder="Type external link to anything associated with this resource" value={form.link} onChange={(e) => handleChange(e)}/>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Priority</label>
                  <div className="control">
                    <div className="select">
                      <select value={form.priority} name="priority" onChange={(e) => handleChange(e)}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Time to Finish</label>
                  <div className="control">
                    <input className="input" type="number" value={form.timeToFinish} name="timeToFinish" onChange={(e) => handleChange(e)}/>
                  </div>
                  <p className="help">Time in minutes</p>
                </div>
                <div className="field is-grouped">
                  <div className="control">
                    <button type="button" className="button is-link" onClick={() => submitForm()}>Submit</button>
                  </div>
                  <div className="control">
                    <button type="button" className="button is-link is-light" onClick={() => resetForm()}>Reset Form</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
    </Layout>
  )
}

export default ResourceCreate