/* eslint-disable*/

import Head from 'next/head';
import React,{useState} from 'react'
import Image from 'next/image'
import axios from 'axios';
import MainLayout from '../components/MainLayout';
import SecondaryBtn from '../components/SecondaryBtn';

export default function Home() {
  const [name, setName] = useState() 
  const [file, setFile] = useState()
  const [images, setImages] = useState()


  const send = async (event) => {
    const data = new FormData()
    // data.append("name", name)
    data.append("file", file[0])
    
    await axios.post("/.netlify/functions/server/profile", data)
      .then(res => {
        // console.log(res);
        setImages(res.data.imgs)
        // console.log(images)

      })
      .catch(err => {
        console.log(err)
      })

  }
  return (
    <MainLayout>
      <div>
        <Head>
          <title>Ephrael Realty</title>
          <meta name="description" content="Rent/own a property in Lagos" />
          <link rel="icon" href="/logo.svg" />
        </Head>

        <div className='hero'>
          <div className='container'>
            <div className='hero-div'>
              <h1>WE MAKE HOME OWNERSHIP IN LAGOS A SEAMLESS AND FULFILLING JOURNEY</h1>
              <SecondaryBtn text = 'Contact Us' link='/' />
            </div>
          </div>
        </div>

        <div className='perks'>
          <div className='container'>
            <div className='message'>
              <span>
              What we do at Ephrael realty is that we have a pre-verified list of investment properties (mostly offplan) on our arsenal.</span>
              <span>You don&apos;t need to start going through the hassle of checking a developers track record to see if he&apos;s built well or not. </span>
              <span>We work with only the best developers to present you with the most mouth watering real estate deals in record time</span>
            </div>
            <div className='perks-div'>
              <h2>We put our clients first.</h2>
            <div className='perks-cont'>
              <div className="perks-card">
                <img src='/perks-icon.svg' />
                <h5>Perks title</h5>
                <p className='small-text'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.</p>
              </div>
              <div className="perks-card">
                <img src='/perks-icon.svg' />
                <h5>Perks title</h5>
                <p className='small-text'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.</p>
              </div>
              <div className="perks-card">
                <img src='/perks-icon.svg' />
                <h5>Perks title</h5>
                <p className='small-text'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.</p>
              </div>
              <div className="perks-card">
                <img src='/perks-icon.svg' />
                <h5>Perks title</h5>
                <p className='small-text'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.</p>
              </div>
            </div>
            </div>
            <div className="problems-div">
              <div className="img-div">
                <div className='img-bg'></div>
                <img src='problem-img2.png' className='img-1' />
                <img src='problem-img2.png' className='img-3' />
                <img src='problem-img1.png' className='img-2' />
              </div>
              <div className='problem-div'>
                <h2>A realtor you can trust</h2>
                <p>When you work with us, you never have to worry about problems like these:</p>
                <div className='problem-cont'>
                  <span className='p-item'>
                    <img src='/problem-icon.png' />
                    <p className='small-text'>Not having enough money to start? We find you the right payment plan.</p>
                  </span>
                  <span className='p-item'>
                    <img src='/problem-icon.png' />
                    <p className='small-text'>Having no direction or place to find ideal and affordable properties? we&apos;ll do that for you.</p>
                  </span>
                  <span className='p-item'>
                    <img src='/problem-icon.png' />
                    <p className='small-text'>Having trust issues with real estate agents? we&apos;ll handle them for you.</p>
                  </span>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        <div className="listings">
          <div className="container">
            <h2>Featured Listings</h2>
            <div className='listings-cont'>
              
            
              <div className="listing-card" style={{background: `url('/propimg1.jpg')`, backgroundSize:'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat'}}>
                <div className='card-details'>
                  <div className='details-div'>
                    <span><img src='/location-icon.png'/> <p className='smaller-text'>Lekki Phase 1, Lagos</p> </span>
                    <span><img src='/rooms-icon.png' /><p className='smaller-text'>4 rooms</p></span>
                  </div>
                </div>
              </div>
              <div className="listing-card" style={{background: `url('/propimg2.jpg')`, backgroundSize:'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat'}}>
                <div className='card-details'>
                  <div className='details-div'>
                    <span><img src='/location-icon.png'/> <p className='smaller-text'>Lekki Phase 1, Lagos</p> </span>
                    <span><img src='/rooms-icon.png' /><p className='smaller-text'>4 rooms</p></span>
                  </div>
                </div>
              </div>
              <div className="listing-card" style={{background: `url('/propimg3.jpg')`, backgroundSize:'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat'}}>
                <div className='card-details'>
                  <div className='details-div'>
                    <span><img src='/location-icon.png'/> <p className='smaller-text'>Lekki Phase 1, Lagos</p> </span>
                    <span><img src='/rooms-icon.png' /><p className='smaller-text'>4 rooms</p></span>
                  </div>
                </div>
              </div>
              <div className="listing-card" style={{background: `url('/propimg4.jpg')`, backgroundSize:'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat'}}>
                <div className='card-details'>
                  <div className='details-div'>
                    <span><img src='/location-icon.png'/> <p className='smaller-text'>Lekki Phase 1, Lagos</p> </span>
                    <span><img src='/rooms-icon.png' /><p className='smaller-text'>4 rooms</p></span>
                  </div>
                </div>
              </div>
              <div className="listing-card" style={{background: `url('/propimg5.jpg')`, backgroundSize:'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat'}}>
                <div className='card-details'>
                  <div className='details-div'>
                    <span><img src='/location-icon.png'/> <p className='smaller-text'>Lekki Phase 1, Lagos</p> </span>
                    <span><img src='/rooms-icon.png' /><p className='smaller-text'>4 rooms</p></span>
                  </div>
                </div>
              </div>
              <div className="listing-card" style={{background: `url('/propimg6.jpg')`, backgroundSize:'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat'}}>
                <div className='card-details'>
                  <div className='details-div'>
                    <span><img src='/location-icon.png'/> <p className='smaller-text'>Lekki Phase 1, Lagos</p> </span>
                    <span><img src='/rooms-icon.png' /><p className='smaller-text'>4 rooms</p></span>
                  </div>
                </div>
              </div>
           
         
          
              
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
    
  )
}
