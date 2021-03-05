import Link from 'next/link'

export default function ContactFooter() {
  return (
    <header className='footer__header'>
      <div className='footer-cta flex flex-jc-sb flex-ai-c'>
        <div className='footer-header'>
          <h3>Request A Free Consultation</h3>
          <p>Free of charge. Hit the button to begin </p>
        </div>
        <Link href='/contact'>
          <a className='button'>Contact Us</a>
        </Link>
      </div>
    </header>
  )
}
