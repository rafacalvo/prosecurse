import Head from 'next/head'
import NavBar from '../components/navBar'
import Footer from '../components/footer'

export default function Form() {
  const registerUser = async (event) => {
    event.preventDefault()

    const res = await fetch('/api/register', {
      body: JSON.stringify({
        name: event.target.name.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const result = await res.json()
    // result.user => 'Ada Lovelace'
  }

  return (
    <div>
      <Head>
        <link
          rel='stylesheet'
          href='https://use.fontawesome.com/releases/v5.15.2/css/all.css'
          integrity='sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu'
          crossorigin='anonymous'></link>
        <link rel='icon' href='/favicon.png' />
        <title>Prosecurse Law | Our Team</title>
      </Head>
      <NavBar />

      <main className='contact-section container flex flex-jc-c flex-ai-c flex-fd-c'>
        <h2>Tell Us Your Inquiry</h2>
        <form className='contact-form' onSubmit={registerUser}>
          <div className='form-name'>
            <div className='f-name flex flex-jc-sb flex-fd-c'>
              <label htmlFor='fname'>First Name</label>
              <input id='fname' name='firstname' type='text' required />
            </div>

            <div className='l-name flex-jc-sb flex-fd-c'>
              <label htmlFor='lname'>Last Name</label>
              <input id='lname' name='lastname' type='text' required />
            </div>
          </div>

          <label htmlFor='subject'>Subject/Message</label>
          <textarea id='subject' name='subject'></textarea>
          <button type='submit'>Submit</button>
        </form>
      </main>

      <Footer />
    </div>
  )
}
