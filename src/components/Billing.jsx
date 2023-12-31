import React from 'react'
import { apple, bill, google } from '../assets'
import styles, { layout } from '../style'

const Billing = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
      
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>How we will deliver with 100% discount <br className='sm:block hidden'/></h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          So the catch here is simple whatever we will create with the team, most of the website white labeled and content may be used for portfolio Purpose the only reason we are doing it to have better opportunities for our team
        </p>
        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
         
        </div>
      </div>  
    </section>
  )
}

export default Billing
