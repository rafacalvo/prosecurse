import Image from 'next/image'

export default function Advice() {
  return (
    <section className='advice flex flex-jc-c flex-fd-c flex-ai-c'>
      <h2>Practice Advice</h2>
      <p>We offer advices to help you with any type of problem you have.</p>
      <div className='advice__grid'>
        <div className='advice-card'>
          <h5>Fraud and Recovery</h5>
          <p>
            We provide comprehensive fraud management services for clients in
            the financial services, insurance, healthcare, and retail sectors
            with a focus on fraud litigation, Ponzi schemes, and corporate
            theft.
          </p>
          <Image
            className='advice-card-img'
            src='/images/fraud.jpg'
            alt='Fraud helper'
            width={230}
            height={138}
          />
        </div>
        <div className='advice-card'>
          <h5>Taxes</h5>
          <p>
            We offer advise to individuals, and nonprofit institutions on
            international, federal, state, and local tax issues, including tax
            planning, audit defense, tax litigation, controversy, and
            legislation.
          </p>
          <Image
            src='/images/tax.jpg'
            alt='Warrants helper'
            width={230}
            height={138}
          />
        </div>
        <div className='advice-card'>
          <h5>Healthcare</h5>
          <p>
            We have experience in regulatory, risk management, and corporate
            matters. We also represent managed care organizations, physician
            practice groups, and pharmacy-related organizations.
          </p>
          <Image
            src='/images/healthcare.jpg'
            alt='Fraud helper'
            width={230}
            height={138}
          />
        </div>
        <div className='advice-card'>
          <h5>Intellectual Property</h5>
          <p>
            Represent clients worldwide in many areas of intellectual property
            law, including patents, trademarks, copyrights, trade secrets, and
            the internet.
          </p>
          <Image
            src='/images/fraud.jpg'
            alt='Fraud helper'
            width={230}
            height={138}
          />
        </div>
      </div>
    </section>
  )
}
