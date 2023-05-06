import React, { useEffect, useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Body() {
 
  return (
    <>
    <div className='aheadofbanner'>
    <div className='banner py-5'>
    <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  <div className="carousel-inner pb-5">
    <div className="carousel-item active">
      <img src="https://www.plannepal.com/uploads/2016/12/standard/d922009ec7e1d3d3755ac007ee963e56.jpg?ver=1482387074" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block  girlinaswing">
        Let's Start Travelling
        <h1>Explore And Travel</h1>
       <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum<br></br> tincidunt ullamcorper magna
             ex auctor et.</p>
             <button type="button " class="btn1 btn-success ">Contact Us</button>

      </div>
    </div>
    <div className="carousel-item">
      <img src="https://www.plannepal.com/uploads/2016/12/standard/39ef6e51859b4ddc54f8a8bd5621882f.jpg?ver=1481983050" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block girlinaswing">
      <p>Let's Start Travelling</p>
        <h1>Explore And Travel</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum <br></br>tincidunt ullamcorper magna
             ex auctor et.</p>
             <button type="button car" class="btn1 btn-success">Contact Us</button>


      </div>
    </div>
    <div className="carousel-item">
      <img src="https://www.plannepal.com/uploads/2017/04/standard/f029baa01b5d1cb2ac06ea3743db4d58.jpg?ver=1493221716" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block girlinaswing">
      <p>Let's Start Travelling</p>
        <h1>Explore And Travel</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum<br></br> tincidunt ullamcorper magna
             ex auctor et.</p>
             <button type="button car" class="btn1 btn-success">Contact Us</button>

      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </div>

    <div className='topd '>
<div className='container text-center'>
  
  <h1>Top <span className='des'>Destination</span></h1>
  <p>Explore our top destinations voted by more than 100,000+ customers around the world.</p>
  <div className='row py-5'>
  <div className='col-lg-8 '>
    <img className='louvre w-100' src='https://www.holidify.com/images/compressed/dest_wiki_12407.jpg'/>
    <div className='lights'>
     <a href=''> <h3>The city of Lights</h3>
      Paris Tourism
      </a>
      
    </div>
  </div>
  <div className='col-lg-4  '>
    <img className='w-100 norway' src='https://www.holidify.com/images/bgImages/NEW-ZEALAND.jpg'/>
    <div className='lights'>
     <a href=''> <h4>The Land Where Adventures Wait</h4>
     New Zealand Tourism
      </a>
      
    </div>
  </div>

  <div className='col-lg-4 py-5 '>
    <img className='w-100 norway1' src='https://www.holidify.com/images/compressed/dest_pixa_3550.jpg'/>
    <div className='lights'>
     <a href=''> <h3>A colossal cosmos</h3>
     Bora Bora Tourism
      </a>
      
    </div>
  </div>
  <div className='col-lg-4 py-5 '>
    <img className='w-100 norway1' src='https://www.holidify.com/images/bgImages/GREAT-BARRIER-REEF.jpg'/>
    <div className='lights'>
     <a href=''> <h3>Nature's Biggest Marvel</h3>
     Great Barrier Reef Tourism
      </a>
      
    </div>
  </div>
  <div className='col-lg-4 py-5 '>
    <img className='w-100 norway1' src='https://www.holidify.com/images/bgImages/MALDIVES.jpg'/>
    <div className='lights'>
     <a href=''> <h3>A Tropical Haven For Honeymooners</h3>
     Maldives Tourism
      </a>
      
    </div>
  </div>


 
  <div className='col-lg-4  '>
    <img className='w-100 norway2' src='https://www.holidify.com/images/bgImages/PAMUKALLE.jpg'/>
    <div className='lights'>
     <a href=''> <h3>Cotton Castle</h3>
     Pamukkale Tourism
      </a>
      
    </div>
  </div>

  <div className='col-lg-8 '>
    <img className='louvre w-100 norway3' src='https://www.holidify.com/images/compressed/dest_pixa_1926.jpg'/>
    <div className='lights'>
     <a href=''> <h3>The Paris of Spain</h3>
     Barcelona Tourism
      </a>
      
    </div>
  </div>
 
  </div>
</div>
    </div>

    <div className='jungle py-3'>
      <img src='https://th.bing.com/th/id/R.44fd3c17e0623d0a5711b4980bd048df?rik=kL0Cxegd%2fogOjQ&pid=ImgRaw&r=0'/>
      </div>

<div className='areyouready text-center'>
      <h1>ARE YOU READY TO TRAVEL?</h1>
<h1>REMEMBER US !!</h1>
<h4 className='pb-5'>Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo,<br></br>
rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur, aptent.</h4>
<div className='packages'>

<button type="button car" class="btn btn-success view ">VIEW PACKAGES</button>

<button type="button car" class="btn btn-success view ">VIEW PACKAGES</button>

</div>

</div>


<div className='recommended '>
  <div className='container'>

    <div className='row'>
    <div className='col-lg-6'>
      <h1>Recommended<span className='des'> Hotels</span> </h1>
      <p>Interdum et malesuada fames ac ante ipsum</p>
    </div>
   <div className='col-lg-6'>
   <div className="dropdown forhotels">
  <button className="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Top Hotels
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
   </div>

    </div>
  </div>


</div>

<OwlCarousel className='owl-theme' loop margin={10} nav items={3} >
  <div className='container'>
    <div className='row'>
      <div className='col-lg-4'>
        <div className='londonbridge'>
      
        <img  src='https://creativelayers.net/themes/gotrip-html/img/hotels/5.png'/>
        </div>
   <div className='themontcalm londonbridge  py-1'>
    <div className='text'>
    <h5>The Montcalm At Brewery London City</h5>
    <p>Manhattan, New York</p>
    <h6>Starting from US$78</h6>
  
    <button type="button " class="btn btn-success bookhotel ">BOOK HOTEL</button>
    </div>
   </div>
      </div>
    </div>
  </div>




</OwlCarousel>


<div className='activecustomer py-5'>
  <div className='container'>
    <div className='row'>
      <div className='aboutcustomers'>
      <div className='activecustomers1'>
        <h4>250K</h4>
        <p>Active Customers</p>
      </div>
      <div className='vr'></div>
      <div className='activecustomers'>
        <h4>250K</h4>
        <p>Active Customers</p>
      </div>
      <div className='vr'></div>
      <div className='activecustomers'>
        <h4>250K</h4>
        <p>Active Customers</p>
      </div>
      <div className='vr'></div>
      <div className='activecustomers4'>
        <h4>250K</h4>
        <p>Active Customers</p>
      </div>
      </div>

     
      
     
    </div>
  </div>
</div>

<div className='ourpartners text-center'>
  <h2>Our<span className='des'>Partners</span></h2>
  <div className='line pe-5'></div>
  <OwlCarousel className='owl-theme' loop margin={10} nav items={3}>
<div className='retro py-4'>
  <img className='retrologo' src='https://andtour-vue.netlify.app/img/2.1906a863.png'/>
</div>
  </OwlCarousel>
</div>



<div className='earth py-5'>
  <div className='container'>
    <div className='row'>
      <div className='col-lg-6'>
        <div className='earthismoving '>
        <img className='w-100' src='https://bespoke-centaur-668ee6.netlify.app/images/img1.png'/>
        </div>
      </div>
      <div className='col-lg-6'>
        <div className='traveljourney text-center '>
       <h2>Your Travel Journey Starts Here</h2>
       <p>Sign up and we'll send the best deals to you</p>
      <div>
        <div className='youremail'>
       
      <input type='email' className='youremailaddress' value='Your Email Address'></input>
      

     
     <button type="button car" class="btn btn-success submit ">SUBMIT</button>


        </div>
    
  
</div>

        </div>
      </div>
    </div>
  </div>
</div>


<div className='download py-5'>
  <div className='container'>
    <div className='row'>
    
      <div className='col-lg-6'>
        <h3>Download the App</h3>
        <p>Book in advance or last-minute with GoTrip. Receive instant
confirmation. Access your booking info offline.</p>
<div className='row'>
<div className='col-lg-3 downloadwalahohai '>
  <div className='row'>
  <div className='col-lg-2 applelogo'>
  <i class="fa-brands fa-apple"></i>
  </div>
  <div className='col-lg-10 text-center downloandonapp'>
  <h6>Download on<br></br> the </h6>
  <h5>Apple Store</h5>
  </div>
  </div>
  

</div>
<div className='col-lg-3 downloadwalahohai '>
  <div className='row'>
  <div className='col-lg-2 applelogo'>
  <i class="fa-brands fa-apple"></i>
  </div>
  <div className='col-lg-10 text-center downloandonapp'>
  <h6>Download on<br></br> the </h6>
  <h5>Apple Store</h5>
  </div>
  </div>
  

</div>

      </div>
    </div>
    <div className='col-lg-6'>
      <img className='w-100' src='https://creativelayers.net/themes/gotrip-html/img/app/1.png'/>
    </div>
    </div>
  </div>
</div>
</div>

    </>
  )
}

export default Body