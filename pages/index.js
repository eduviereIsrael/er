/* eslint-disable*/

import Head from 'next/head';
import React,{useState, useEffect, useRef} from 'react';
import Image from 'next/image';
import axios from 'axios';
import MainLayout from '../components/MainLayout';
import SecondaryBtn from '../components/SecondaryBtn';
import {GraphQLClient, gql} from 'graphql-request';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';


const graphCms = new GraphQLClient("https://api-eu-west-2.hygraph.com/v2/cle3apban0jyl01uh6btpejkt/master");

const QUERY = gql`
  {
    propertyListings{
      id,
      address,
      coverImage {
        url
      }
    }
  }
`;

  // export async function getStaticProps(){
  //   const {propertyListings} = await graphCms.request(QUERY);

  //   return {
  //     props: {
  //       propertyListings,
  //     },
  //     revalidate: 10,
  //   }
  // }

export default function Home({propertyListings}) {
  const [name, setName] = useState() ;
  const [perkImgTop, setPerkImgTop] = useState(140);
  const [divTopOffset, setDivTopOffset] = useState(0);
  // const [listingData, setListingData] = useS

  const {ref, inView} = useInView();

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

  const perkImgRef = useRef();
  const perkImgDivRef = useRef();

  useEffect(() => {
   console.log('Use effect hook =', inView)
  }, [inView]);
  

  const handleScroll = (event) => {
    //scroll up
    if (event.deltaY < 0) {
       // do something
       setPerkImgTop(prev => prev + 2);
      //  console.log("scrolled down");
    }
    //scroll down
    else if (event.deltaY > 0) {
       setPerkImgTop(prev => prev - 2);
      //  console.log("scrolled up");
    }
 }

  useEffect(() => {
    // setDivTopOffset(offset)
    // console.log(divTopOffset)
    let offset = perkImgDivRef.current.offsetTop - perkImgDivRef.current.clientHeight;

    window.addEventListener('scroll', () => {
      // let offset = perkImgDivRef.current.offsetTop;
      // console.log(offset)
      // if (window.scrollY > offset){
        window.addEventListener('wheel',handleScroll);
      // } else {
        // window.removeEventListener('wheel', handleScroll);
      // }
    })
}, []);
  
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
              {/* <h1>{listings.address}</h1> */}
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
            <div className='perks-div' >
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
            <div ref={perkImgDivRef}></div>
            </div>
            <div className="problems-div" ref={ref}>
              <div className="img-div" >
                <div className='img-bg'></div>
                <img src='problem-img2.png' className='img-1' />
                <img src='problem-img2.png' className='img-3' />
                <img src='problem-img1.png' className='img-2' ref={perkImgRef} style={{top: `${perkImgTop}px`}} />
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
                    <span><img src='/location-icon.svg'/> <p className='smaller-text'>Lekki Phase 1, Lagos</p> </span>
                    <span><img src='/rooms-icon.svg' /><p className='smaller-text'>4 rooms</p></span>
                  </div>
                </div>
              </div>
              <div className="listing-card" style={{background: `url('/propimg2.jpg')`, backgroundSize:'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat'}}>
                <div className='card-details'>
                  <div className='details-div'>
                    <span><img src='/location-icon.svg'/> <p className='smaller-text'>Lekki Phase 1, Lagos</p> </span>
                    <span><img src='/rooms-icon.svg' /><p className='smaller-text'>4 rooms</p></span>
                  </div>
                </div>
              </div>
              <div className="listing-card" style={{background: `url('/propimg3.jpg')`, backgroundSize:'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat'}}>
                <div className='card-details'>
                  <div className='details-div'>
                    <span><img src='/location-icon.svg'/> <p className='smaller-text'>Lekki Phase 1, Lagos</p> </span>
                    <span><img src='/rooms-icon.svg' /><p className='smaller-text'>4 rooms</p></span>
                  </div>
                </div>
              </div>
              <div className="listing-card" style={{background: `url('/propimg4.jpg')`, backgroundSize:'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat'}}>
                <div className='card-details'>
                  <div className='details-div'>
                    <span><img src='/location-icon.svg'/> <p className='smaller-text'>Lekki Phase 1, Lagos</p> </span>
                    <span><img src='/rooms-icon.svg' /><p className='smaller-text'>4 rooms</p></span>
                  </div>
                </div>
              </div>
              <div className="listing-card" style={{background: `url('/propimg5.jpg')`, backgroundSize:'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat'}}>
                <div className='card-details'>
                  <div className='details-div'>
                    <span><img src='/location-icon.svg'/> <p className='smaller-text'>Lekki Phase 1, Lagos</p> </span>
                    <span><img src='/rooms-icon.svg' /><p className='smaller-text'>4 rooms</p></span>
                  </div>
                </div>
              </div>
              <div className="listing-card" style={{background: `url('/propimg6.jpg')`, backgroundSize:'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat'}}>
                <div className='card-details'>
                  <div className='details-div'>
                    <span><img src='/location-icon.svg'/> <p className='smaller-text'>Lekki Phase 1, Lagos</p> </span>
                    <span><img src='/rooms-icon.svg' /><p className='smaller-text'>4 rooms</p></span>
                  </div>
                </div>
              </div>
           
         
          
              
            </div>
          </div>
        </div>

        <div className='banner-cont'>
          <div className="container">
            <div className='banner'>
              <div className='intro'>
                <h3>In the last 2 years we have helped over 50 people find their dream homes in Lagos</h3>
                <p className='smaller-text'>Feel free to reach out if you want us to do the same for you</p>
                <SecondaryBtn link='' text="let's chat" color="#fff" borderRadius='10px' />
              </div>
              <div className='testimonials'>
                <div className='t-card'>
                  <p className='smaller-text'>I must say, I had an amazing experience. Your service was on point, you gave me exactly what I wanted In a very short time. I'm impressed with both the house and the store. This is what I've been having a hard time getting and you made it happen in no time. Thanks a lot.</p>
                  <span className='smaller-text'>Name</span>
                </div>
                <div className='t-card'>
                  <p className='smaller-text'>I really love my apartment, 24hours light and water as earlier promised, thought it was a lie ut they've never taken this light. And I love how everything happened in less than a week.</p>
                  <span className='smaller-text'>Name</span>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className='partners-div'>
              <h2>We work with powerful brands In the Industry</h2>
              <div className='partners-cont'>
                <div className='p-card'>
                  <img src='/monumental.png'/>
                </div>
                <div className='p-card'>
                  <img src='/rilwan.png'/>
                </div>
                <div className='p-card'>
                  <img src='/sterling.png'/>
                </div>
                <div className='p-card'>
                  <img src='/sunplanet.png'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
    
  )
}
