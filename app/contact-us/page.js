'use client'
import { useState } from 'react'

export default function ContactPage() {
  // const [form, setForm] = useState({ name: '', email: '', message: '' })
  // const [status, setStatus] = useState(null)

  // async function handleSubmit(e) {
  //   e.preventDefault()
  //   setStatus('loading')
  //   // try {
  //   //   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
  //   //     method:'POST',
  //   //     headers:{ 'Content-Type': 'application/json' },
  //   //     body: JSON.stringify(form)
  //   //   })
  //   //   if (res.ok) {
  //   //     setStatus('sent')
  //   //     setForm({ name:'', email:'', message:'' })
  //   //   } else setStatus('error')
  //   // } catch(e){ setStatus('error') }
  // }
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ state: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Basic frontend validation
    if (!form.name || !form.email || !form.message) {
      setStatus({ state: 'error', message: 'All fields are required.' })
      return
    }

    try {
      setStatus({ state: 'loading', message: 'Sending your enquiry...' })

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus({ state: 'success', message: 'Your enquiry has been sent successfully!' })
        setForm({ name: '', email: '', message: '' })
      } else {
        const errMsg = await res.text()
        setStatus({
          state: 'error',
          message: errMsg || 'Something went wrong. Please try again later.',
        })
      }
    } catch (err) {
      console.error(err)
      setStatus({ state: 'error', message: 'Network error. Please try again.' })
    }
  }

  return (
    <div class="main overflow-hidden">
      <section class="common-banner-section contact-banner position-relative">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="common-banner-heading">
                <h1 class="common-heading fs-40 fw-700">Contact Us Today</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="contact-section section-padding pb-0">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="contact-info-wrap">
                <div class="section-heading">
                  <h2 class="section-title fs-30 fw-600">Contact Us Today</h2>
                  <h3 class="contact-sub-heading fs-20 fw-400">How can we serve you? Let’s start a conversation</h3>
                </div>
                <p>
                  If you have any questions about our beautiful ladies or would like to book one of our escorts, please
                  don’t hesitate to call or message us at any time on the number provided.
                  <br />
                  You can likewise email us at whenever and you will get our answer inside 24 hours. Our email address is
                  support@gmail.com
                  <br />
                  It is not only a business that makes it a success but how the business treats its customers and hence we
                  provide our customers immense support throughout support team.
                  <br />
                  We would love to hear from you.
                </p>
                <div class="section-heading">
                  <h3 class="section-title fs-30 fw-600">Never end Services Escorts, Jaipur</h3>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="form-section section-padding position-relative">
        <img class="contact-shape-left position-absolute updown-anim " src="assets/img/shapes/deco_left_shape.png" alt="" />
        <img class="contact-shape-right position-absolute updown-anim" src="assets/img/shapes/round_bg_shape.webp" alt="" />
        <div class="container position-relative">
          <div class="row">
            <div class="col-md-6 info-contact-col ps-0">
              <div class="contact-details h-100 position-relative">
                <div class="contact-inner-details position-relative">
                  <div class="section-heading">
                    <h4 class="section-title fs-30 fw-600">Contact Us</h4>
                  </div>
                  <div class="single-contact-info mb-3">
                    <i class="fa-solid fa-envelope fs-20 me-3"></i>
                    <a href="#" class="fs-20 fw-500">hello@esj.in</a>
                  </div>
                  <div class="single-contact-info mb-3">
                    <i class="fa-solid fa-phone fs-20 me-3"></i>
                    <a href="#" class="fs-20 fw-500">+91XXXXXXXXXX</a>
                  </div>
                  <div class="single-contact-info">
                    <i class="fa-brands fa-whatsapp fs-20 me-3"></i>
                    <a href="#" class="fs-20 fw-500">+91XXXXXXXXXX</a>
                  </div>
                </div>
                <div class="form-arrow">
                  <img class="arrow-shape opacity-anim" src="assets/img/shapes/arrow_shape.svg" alt="" />
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-wrap h-100">
                <div class="section-heading">
                  <h4 class="section-title fs-30 fw-600">Get In Touch</h4>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="inner-form-details">
                    <div className="form-field mb-3">
                      <label className="form-label d-block w-100" htmlFor="contactName">
                        Name
                      </label>
                      <input
                        className="form-input common-filed"
                        type="text"
                        id="contactName"
                        name="contactName"
                        placeholder="Enter Your Name"
                        value={form.contactName}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-field mb-3">
                      <label className="form-label d-block w-100" htmlFor="contactEmail">
                        Email
                      </label>
                      <input
                        className="form-input common-filed"
                        type="email"
                        id="contactEmail"
                        name="contactEmail"
                        placeholder="Enter Your Email"
                        value={form.contactEmail}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-field mb-3">
                      <label className="form-label d-block w-100" htmlFor="contactMessage">
                        Message
                      </label>
                      <textarea
                        className="form-message common-filed"
                        name="contactMessage"
                        id="contactMessage"
                        placeholder="Write your message here"
                        value={form.contactMessage}
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="submit-form-btn common-btn btn w-100 primary-btn mt-4"
                      disabled={status.state === 'loading'}
                    >
                      {status.state === 'loading' ? 'Sending...' : 'SUBMIT'}
                    </button>

                    {status.message && (
                      <p
                        className={`text-center mt-3 ${status.state === 'success'
                            ? 'text-green-600'
                            : status.state === 'error'
                              ? 'text-red-600'
                              : 'text-gray-600'
                          }`}
                      >
                        {status.message}
                      </p>
                    )}
                  </div>
                </form>
                {/* <form action="#">
                  <div class="inner-form-details">
                    <div class="form-field mb-3">
                      <label class="form-label d-block w-100" for="contactName">Name</label>
                      <input class="form-input common-filed" type="text" id="contactName" name="contactName"
                        placeholder="Enter Your Name" />
                    </div>
                    <div class="form-field mb-3">
                      <label class="form-label d-block w-100" for="contactEmail">Name</label>
                      <input class="form-input common-filed" type="email" id="contactEmail" name="contactEmail"
                        placeholder="Enter Your Name" />
                    </div>
                    <div class="form-field mb-3">
                      <label class="form-label d-block w-100" for="contactMessage">Name</label>
                      <textarea class="form-message common-filed" name="contactMessage" id="contactMessage"
                        placeholder="Write your message here"></textarea>
                    </div>
                    <button class="submit-form-btn common-btn btn w-100 primary-btn mt-4">SUBMIT</button>
                  </div>
                </form> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
