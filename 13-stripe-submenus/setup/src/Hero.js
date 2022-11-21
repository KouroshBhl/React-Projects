import React from 'react'
import phoneImg from './images/phone.svg'
import { useContextAPI } from './context'

const Hero = () => {
  const { setIsSubmenuOpen } = useContextAPI()
  return (
    <section className='hero' onMouseOver={() => setIsSubmenuOpen(false)}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>
            Payments infrastructure <br /> For the Internet
          </h1>
          <p>
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <button className='btn'>Start Now</button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} alt='phone' className='phone-img' />
        </article>
      </div>
    </section>
  )
}

export default Hero
