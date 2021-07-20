import { useState } from 'react'
import WhatIs from '../components/WhatIs'
import WhatDoIDo from '../components/WhatDoIDo'
import Rules from '../components/Rules'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Sending')

    let data = {
      name,
      email,
      message
    }

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log('Respone received')
      if (res.statis === 200) {
        console.log('Response succeeded!')
        setSubmitted(true)
        setName('')
        setEmail('')
        setMessage('')
      }
    })
  }

  return (
    <div>
      <WhatIs />
      <WhatDoIDo />
      <Rules />
      
      <div id="form">
        <form>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' onChange={(e) => { setName(e.target.value) }} />

          <label htmlFor='email'>Email</label>
          <input type='email' name='email' onChange={(e) => { setEmail(e.target.value) }} />

          <label htmlFor='message'>Message</label>
          <input type='text' name='message' onChange={(e) => { setMessage(e.target.value) }} />

          <input type='submit' onClick={(e) => { handleSubmit(e) }} />

        </form>
      </div>
    </div>
  )
}