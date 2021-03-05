import React from 'react'

export default function Brands() {
  return (
    <section className='subscription'>
      <div className='brands-grid'>
        <i className='fab fa-hooli'></i>
        <i className='fab fa-lyft'></i>
        <i className='fab fa-ebay'></i>
        <i className='fab fa-stripe'></i>
        <i className='fab fa-aws'></i>
        <i className='fab fa-reddit-alien'></i>
      </div>
      <div className='newsletter container flex flex-js-sb flex-ai-c'>
        <h3>
          Subscribe For Latest <br /> Newsletter
        </h3>
        <form className='subs-form flex'>
          <input type='email' name='email' placeholder='Your Email' required />
          <button type='submit'>Subscribe</button>
        </form>
      </div>
      <div className='bottom-border'></div>
    </section>
  )
}
