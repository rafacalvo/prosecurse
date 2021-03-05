import Head from 'next/head'
import Header from '../components/header'
import Clients from '../components/clients'
import Advice from '../components/advice'
import AboutUs from '../components/about-us'
import Brands from '../components/subscription'
import Contact from '../components/contact'
import ContactFooter from '../components/contact-footer'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div>
      <Head>
        <link
          rel='stylesheet'
          href='https://use.fontawesome.com/releases/v5.15.2/css/all.css'
          integrity='sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu'
          crossOrigin='anonymous'></link>
        <link rel='icon' href='/favicon.png' />
        <title>Prosecurse Law</title>
      </Head>
      {/* Content goes here: */}
      <Header />
      <Clients />
      <Advice />
      <AboutUs />
      <Brands />
      <Contact />
      <ContactFooter />
      <Footer />
    </div>
  )
}
