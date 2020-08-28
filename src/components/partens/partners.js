import React from 'react';
import qtl from '../../images/qtl.jpeg'
import art from '../../images/artf.jpeg'
import ssw from '../../images/ssw.jpeg'
import shiraz from '../../images/shiraz.jpeg'
import aftab from '../../images/aft.jpeg'
import pardis from '../../images/par.jpeg'
import pix from '../../images/pix.jpeg'
import ram from '../../images/ram.jpeg'
import motion from '../../images/motion.jpeg'
import doctorto from '../../images/doctorto.png'

const Partners = () => {
    return (
       <section className="partners">
           <div className="container-fluid">
            <h2 >Partners And Clients</h2>
            <div className="image-container">
               <img src={qtl}  alt="quality to life"/>
               <img src={art} alt="art factory"/>
               <img src={ssw} alt="sherkate sahamie petroshimie bandare emam"/>
               <img src={shiraz} alt="shirazeh"/>
               <img src={aftab} alt="honare shahre aftab"/>
               <img src={pardis} alt="pardise cinamaei golestan"/>
               <img src={pix} alt="pixflow"/>
               <img src={ram} alt="ram"/>
               <img src={motion} alt="motion factory"/>
               <img src={doctorto} alt="doctorto"/>
            </div>
           </div>
       </section>
    )
}

export default Partners
