import React from 'react'
import './gallery.scss'
import images from './../../assets/dataGallery'
//import G1 from './../../assets/img/gallery1.jpg'

function Gallery() {
  return (
     <section className="gallery">
       <div className="gallery__grid">
        {
            images.map((img)=>{
                return (
                    <img src={img}></img>
                )
            })
        }
    
       </div>
     </section>
  )
}

export default Gallery