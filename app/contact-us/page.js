'use client'
import { useState } from 'react'

export default function ContactPage(){
  const [form, setForm] = useState({ name:'', email:'', message:'' })
  const [status, setStatus] = useState(null)

  async function handleSubmit(e){
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
        method:'POST',
        headers:{ 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name:'', email:'', message:'' })
      } else setStatus('error')
    } catch(e){ setStatus('error') }
  }

  return (
    <div className="max-w-lg">
      <h1 className="text-2xl font-bold">Contact</h1>
      <form onSubmit={handleSubmit} className="mt-4 space-y-3">
        <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Name" className="w-full p-2 border"/>
        <input value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="Email" className="w-full p-2 border"/>
        <textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Message" className="w-full p-2 border"/>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Send</button>
      </form>
      {status === 'sent' && <p className="mt-2 text-green-600">Message sent.</p>}
      {status === 'error' && <p className="mt-2 text-red-600">Something went wrong.</p>}
    </div>
  )
}
