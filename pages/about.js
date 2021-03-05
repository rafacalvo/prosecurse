import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/navBar'
import ContactFooter from '../components/contact-footer'
import Footer from '../components/footer'

export default function About() {
  return (
    <div>
      <Head>
        <link
          rel='stylesheet'
          href='https://use.fontawesome.com/releases/v5.15.2/css/all.css'
          integrity='sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu'
          crossorigin='anonymous'></link>
        <link rel='icon' href='/favicon.png' />
        <title>Prosecurse Law | About Us</title>
      </Head>
      <NavBar />
      <main className='about-section container '>
        <h2>Learn More about our firm</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit
          amet quam id nunc porttitor tristique. Integer et sapien et neque
          porta imperdiet. Cras ac enim aliquam, sodales nunc id, iaculis dolor.
          Etiam pellentesque elit dui, vitae lacinia nibh venenatis fringilla.
          Vestibulum id quam in velit lacinia viverra. Pellentesque sapien odio,
          tristique ac scelerisque quis, rutrum eget tortor. Nullam maximus,
          neque pulvinar blandit aliquet, mi tellus euismod sapien, at vehicula
          nisl ante ut urna. Curabitur laoreet rhoncus tortor eu pretium. In a
          ultrices lectus. Aliquam erat volutpat. Sed id finibus ligula. Nunc
          fermentum porta erat. Proin sed mollis enim, eu interdum turpis.{' '}
        </p>
        <Image
          className='team-img'
          src='/images/team1.jpg'
          alt='Team picture 1'
          layout='responsive'
          width={640}
          height={426}
        />
        <p>
          Phasellus dictum eget felis non cursus. Nam in ullamcorper nulla, non
          tristique ipsum. Sed dignissim ornare ligula, vel scelerisque augue
          facilisis vel. Aenean vel mauris non sapien varius venenatis lacinia
          id lacus. Morbi lacinia dignissim posuere. Vivamus molestie molestie
          nulla. Proin mattis porta eros ut faucibus. Nunc nibh nunc, finibus in
          justo id, convallis rhoncus diam. Fusce massa eros, volutpat hendrerit
          blandit fermentum, auctor aliquet elit. Pellentesque est nisi,
          condimentum in magna et, viverra ornare leo. Phasellus sit amet
          feugiat turpis, sed tincidunt sem.{' '}
        </p>
        <Image
          className='team-img'
          src='/images/team2.jpg'
          alt='Team picture 1'
          layout='responsive'
          objectPosition='50% 50%'
          width={640}
          height={426}
        />
      </main>

      <ContactFooter />
      <Footer />
    </div>
  )
}
