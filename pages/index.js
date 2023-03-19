/* eslint-disable*/

import Head from 'next/head';
import React,{useState, useEffect, useRef} from 'react';
import Image from 'next/image';
import axios from 'axios';
import MainLayout from '../components/MainLayout';
import SecondaryBtn from '../components/SecondaryBtn';
import {GraphQLClient, gql} from 'graphql-request';
import { useInView } from 'react-intersection-observer';
import { motion, useScroll } from 'framer-motion';
import BlogCard from '../components/BlogCard';
import Propertycard from '../components/PropertyCard';
import { useStateContext } from '../Context/StateContext';
import { perks } from '../data/perks';



const graphCms = new GraphQLClient("https://api-eu-west-2.hygraph.com/v2/cle3apban0jyl01uh6btpejkt/master");

const QUERY = gql`
  {
    propertyListings{
      id,
      address,
      slug,
      coverImage {
        url
      },
      shortInfo
    }
  }
`;

export async function getStaticProps(){
    const {propertyListings} = await graphCms.request(QUERY);

    return {
      props: {
        propertyListings,
      },
      revalidate: 10,
    }
}

export default function Home({propertyListings}) {
  const [name, setName] = useState() ;
  const [perkImgTop, setPerkImgTop] = useState(140);
  const [divTopOffset, setDivTopOffset] = useState(0);
  const [data, setData] = useState();
  const {ref, inView} = useInView();

  const {scrollYProgress} = useScroll();
  const { activeNavbar} = useStateContext();


  const handleScroll = (event) => {
    //scroll up
    let scrollDifference = scrollYProgress.current - scrollYProgress.prev + 0.03;

    if ( inView && event.deltaY < 0) {
       setPerkImgTop(prev => prev + scrollDifference)

    }
    //scroll down
    else if (inView && event.deltaY > 0) {
       setPerkImgTop(prev => prev - scrollDifference)

    }
 }

  useEffect(() => {
    // setData(...propertyListings);
    window.addEventListener('wheel', handleScroll);
    // console.log(data)
  })

  const blogs = [
    {
      title: "3 things you must check before settling into your new apartment.",
      date: "24th Nov 2022",
      image: "/blogimg1.png",
      readTime: "4"
    },
    {
      title: "Factors to consider when picking a location for your new home.",
      date: "4th Nov 2022",
      image: "/blogimg2.png",
      readTime: "5"
    },
    {
      title: "Never do this 5 things when investing in Real Estate.",
      date: "16th Dec 2022",
      image: "/blogimg3.png",
      readTime: "2"
    },
  ]
// 1.06496  1.06573
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
            <motion.div className='hero-div'
              initial={{opacity: 0}} 
              whileInView={{opacity: 1}}
              transition={{delay: 0.3}}
            >
              <motion.h1 
                initial={{opacity: 0, x: 60}} 
                whileInView={{opacity: 1, x: 0}}
                transition={{delay: 0.5}}
              >WE MAKE HOME OWNERSHIP IN LAGOS A SEAMLESS AND FULFILLING JOURNEY</motion.h1>
              <motion.div
                initial={{opacity: 0, x: 60}} 
                whileInView={{opacity: 1, x: 0}}
                transition={{delay: 0.7}}
              >
                <SecondaryBtn text = 'Contact Us' link='/' />
              </motion.div>
              {/* <h1>{listings.address}</h1> */}
            </motion.div>
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
              {
                perks.map((perk, i) => (
                  <motion.div 
                    key={i} 
                    className="perks-card"
                    // initial={{y: -60, scale: 0.8}}
                    // whileInView={{y: 0, scale: 1}}
                    // transition={{duration: 0.7, delay: 0, type: 'ease'}}
                  >
                    <motion.img 
                      src='/perks-icon.svg' 
                      initial={{ scale: 0.3}}
                      whileInView={{ scale: 1}}
                      transition={{duration: 0.5, delay: 0, type: 'ease'}}
                    />
                    <h5>{perk.title}</h5>
                    <p className='smaller-text'>{perk.text}</p>
                  </motion.div>
                ))
              }
             
            </div>
            {/* <div ref={perkImgDivRef}></div> */}
            </div>
            <div className="problems-div" >
              <div className="img-div" >
                <motion.div 
                  className='img-bg'
                  whileInView={{opacity: 1, y: 0}} 
                  initial={{opacity: 0, y: 80}} 
                  transition={{duration: 0.5, delay: 0.3}} 
                ></motion.div>
                <motion.img 
                  src='problem-img2.png' 
                  whileInView={{opacity: 1, y: 0}} 
                  initial={{opacity: 1, y: 80}} 
                  transition={{duration: 0.5, delay: 0.2}} 
                  className='img-1' ref={ref} />
                <motion.img  
                  src='problem-img2.png'
                  // whileInView={{opacity: 0, y: 0}} 
                  // initial={{opacity: 0, y: 80}} 
                  // transition={{duration: 0.5, delay: 0}} 
                  className='img-3' />
                <motion.img 
                  src='problem-img1.png' 
                  whileInView={{opacity: 1, y: 120}} 
                  initial={{opacity: 0, y: 150}} 
                  transition={{duration: 0.5, delay: 0.5}} 
                  className='img-2' /*style={{top: `${perkImgTop}px`}}*/ />
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
              {propertyListings.map((item) => (
                <Propertycard item={item} key={item.id} />
              ))}
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

        <div className="blogs">
          <div className="container">
            <h2>Stay Informed with our latest blogs</h2>
            <div className='blog-cont'>
              {blogs.map((item, i) => (
                <BlogCard key={i} image={item.image} title={item.title} readTime={item.readTime} date={item.date}  />
              ))}
            </div>
          </div>
        </div>
      </div>
    
    </MainLayout>
    
  )
}
