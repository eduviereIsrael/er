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
      </div>
    </MainLayout>
    
  )
}
