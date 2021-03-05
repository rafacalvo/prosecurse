import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/navBar'
import ContactFooter from '../components/contact-footer'
import Footer from '../components/footer'

export default function Team() {
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
      <h2>Meet Our Team</h2>
      <main className='team'>
        <div className='team__card'>
          <Image
            className='team-img'
            src='/images/portrait1.jpg'
            alt='Team picture 1'
            width={400}
            height={400}
          />
          <h3>Paul F. Lewis</h3>
          <h4>Corporate & Business.</h4>
          <p>
            <i class='fas fa-phone-alt'></i> 321-485-4618
          </p>
          <p>
            <i class='far fa-envelope'></i> PaulFLewis@teleworm.us
          </p>
        </div>
        <div className='team__card'>
          <Image
            className='team-img'
            src='/images/portrait2.jpg'
            alt='Team picture 1'
            width={400}
            height={400}
          />
          <h3>Randall J. Doherty</h3>
          <h4>Corporate & Business.</h4>
          <p>
            <i class='fas fa-phone-alt'></i> 870-935-2065
          </p>
          <p>
            <i class='far fa-envelope'></i> RandallJDoherty@jourrapide.com
          </p>
        </div>
        <div className='team__card'>
          <Image
            className='team-img'
            src='/images/portrait5.jpg'
            alt='Team picture 1'
            width={400}
            height={400}
          />
          <h3>Bryan M. Stevens</h3>
          <h4>Corporate & Business.</h4>
          <p>
            <i class='fas fa-phone-alt'></i> 973-316-3442
          </p>
          <p>
            <i class='far fa-envelope'></i> BryanMStevens@armyspy.com
          </p>
        </div>
        <div className='team__card'>
          <Image
            className='team-img'
            src='/images/portrait3.jpg'
            alt='Team picture 1'
            width={400}
            height={400}
          />
          <h3>Laura R. Voyles</h3>
          <h4>Corporate & Business.</h4>
          <p>
            <i class='fas fa-phone-alt'></i> 714-298-8652
          </p>
          <p>
            <i class='far fa-envelope'></i> LauraRVoyles@dayrep.com
          </p>
        </div>
        <div className='team__card'>
          <Image
            className='team-img'
            src='/images/portrait6.jpg'
            alt='Team picture 1'
            width={400}
            height={400}
          />
          <h3>Lori J. Cahill</h3>
          <h4>Corporate & Business.</h4>
          <p>
            <i class='fas fa-phone-alt'></i>
            409-759-1541
          </p>
          <p>
            <i class='far fa-envelope'></i> LoriJCahill@jourrapide.com
          </p>
        </div>
        <div className='team__card'>
          <Image
            className='team-img'
            src='/images/portrait7.jpg'
            alt='Team picture 1'
            width={400}
            height={400}
          />
          <h3>Andy B. Marshall</h3>
          <h4>Corporate & Business.</h4>
          <p>
            <i class='fas fa-phone-alt'></i> 406-783-4962
          </p>
          <p>
            <i class='far fa-envelope'></i> AndyBMarshall@armyspy.com
          </p>
        </div>
      </main>

      <ContactFooter />
      <Footer />
    </div>
  )
}
