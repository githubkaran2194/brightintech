
import React from 'react'

import { Link } from 'react-router-dom'


const Services = () => {

  return (
   
    <section className="expertise container col-md-12">
    <div className="row">
      <div className="title-text text-center align-items-md-center mx-auto col-md-5">
        <h1>Our expertise are in</h1>
        <p>Success in business is not about waiting for opportunities to come; its about creating them.
        </p>
      </div>
      <div className="col-lg-10 col-sm-12 expertise-item d-flex justify-content-between">

<div className="expertise-img col-md-6">
<img src="https://www.brightintech.com/wp-content/themes/spectra-one/assets/image/content-1.png" alt="img1" width={600}/>
</div>
<div className="expertise-text col-md-6">
<p>01</p>
<h1>Digital Marketing</h1>
<p>Our company pioneers effective digital marketing solutions that boost brand visibility, drive targeted traffic, and generate measurable results. With our strategic approach and cutting-edge techniques, we empower businesses to thrive in the ever-evolving digital landscape.

Learn More About What we actually do…</p>


<Link to="/AppDevelopment" className='btn btn-outline-info'>Learn More</Link>
</div>
      </div>

      <div className="col-lg-10 col-sm-12 expertise-item d-flex justify-content-between">
<div className="expertise-text col-md-6">
<p>02</p>
<h1>Application Development</h1>
<p>I am proud to introduce our team of skilled professionals who are passionate about creating exceptional mobile applications. We specialize in designing and developing cutting-edge apps that deliver seamless experiences across iOS and Android platforms. Let us bring your app ideas to life and drive your business forward in the digital age.</p>

<a href="#">Learn More</a>
</div>
<div className="expertise-img col-md-6">
<img src="https://www.brightintech.com/wp-content/themes/spectra-one/assets/image/content-2.png" alt="img1" width={600}/>
</div>
      </div>

      <div className="col-lg-10 col-sm-12 expertise-item d-flex justify-content-between">
<div className="expertise-img col-md-6">
<img src="https://www.brightintech.com/wp-content/themes/spectra-one/assets/image/content-3.png" alt="img1" width={600}/>
</div>
<div className="expertise-text col-md-6">
<p>03</p>
<h1>Web Development</h1>
<p>Our web development company specializes in creating innovative and dynamic websites that engage users and drive business growth. With our expertise, we deliver customized solutions that exceed client expectations and establish a strong online presence.</p>

<a href="#">Learn More</a>
</div>
      </div>

      <div className="col-lg-10 col-sm-12 expertise-item d-flex justify-content-between">
      <div className="expertise-text col-md-6">
<p>04</p>
<h1>Cloud & DevOps</h1>
<p>Our company specializes in cloud and DevOps solutions, enabling businesses to leverage the power of scalable infrastructure and streamlined development processes. With our expertise, we empower organizations to accelerate deployment, optimize efficiency, and unlock the full potential of cloud computing.</p>

<a href="#">Learn More</a>
</div>
<div className="expertise-img col-md-6">
<img src="https://www.brightintech.com/wp-content/themes/spectra-one/assets/image/content-1.png" alt="img1" width={600}/>
</div>
      </div>
    </div>
  </section>
  )
}

export default Services