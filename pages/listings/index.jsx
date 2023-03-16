/* eslint-disable */

import React from 'react';
import Head from 'next/head';
import { GraphQLClient, gql } from 'graphql-request';
import MainLayout from "../../components/MainLayout"
// import SecondaryBtn from '../../components/SecondaryBtn';
import PrimaryBtn from '../../components/PrimaryBtn';
import { motion } from 'framer-motion';

const graphCms = new GraphQLClient("https://api-eu-west-2.hygraph.com/v2/cle3apban0jyl01uh6btpejkt/master");

const QUERY = gql`
  {
    propertyListings{
      id,
      address,
      slug,
      availability, 
      title,
      detailedDescription,
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


const ListingsPage = ({propertyListings}) => {
  const [activeTag, setActiveTags] = React.useState("All");
  const [filteredProperties, setFilteredProperties] = React.useState([...propertyListings]);
  const [animateCard, setAnimateCard] = React.useState({ y: 0, opacity: 1 });

  const description = (x) => {
    return x.slice(0, 3)
  }


  const tags = [
    {displaytext: "ALL", tag: "All"},
    {displaytext: "NOW SELLING", tag: "Now Selling"},
    {displaytext: "COMING SOON", tag: "Coming Soon"},
    {displaytext: "SOLD", tag: "Sold"},
  ]

  const availabilityTags = (x) => {
    if (x == "now_selling"){
      return 'Now Selling'
    } else if (x == "coming_soon"){
      return "Coming Soon"
    } else {
      return "Sold"
    }
  }

  const updateFilteredProperties = (x) => {
    setActiveTags(x)
    setAnimateCard([{y: 100, opacity:0}]);

    setTimeout(() => {
      setAnimateCard([{y: 0, opacity: 1}]);
      if(x !== "All"){
        const newProperties = propertyListings.filter((property) => availabilityTags(property.availability) === x);
        setFilteredProperties([...newProperties]);
      } else {
        setFilteredProperties([...propertyListings]);
      }
    }, 500)
    


  }

  return (
    <>
    <Head>
      <title>Get the best offshore and onshore properties in Lagos</title>
      <meta name="description" content="Rent/own a property in Lagos" />
      <link rel="icon" href="/logo.svg" />

    </Head>
    <MainLayout>
        <div className='listings-page'>
            <div className="container">
              <div className="banner">
                <h1>Get In Early</h1>
                <h1>Get In Cheaper</h1>
              </div>
              <div className="listings-container">
                <div className="listing-tags">
                  {tags.map(({displaytext, tag}, i) => (
                    <p  className={`${activeTag === tag? "active-tag" : ""} listing-tag`} key={i} onClick={() => {
                      updateFilteredProperties(tag);
                    }}>{displaytext}</p>
                  ))}
                </div>
                <motion.div className="listings-div" animate = {animateCard}
      transition ={{ duration: 0.5, delayChildren: 0.5 }}>
                  {
                    filteredProperties.map(({id, title, coverImage, slug, detailedDescription}) => (
                      <div className="listing-card" key={id}>
                        <img src={coverImage.url} className="coverImage" alt={title} />
                        <h3>{title}</h3>
                        <div className="features">
                          <h5>Featuring: </h5>
                          {detailedDescription.slice(0,3).map((item, i) => (
                            <p key={i} className="smaller-text">{item}</p>
                            // console.log(item)
                          ))}
                        </div>
                        <PrimaryBtn link={`/listings/${slug}`} text="View Property" borderRadius ="10px" color="#fff" width="100%" fontSize = "15px" />

                      </div>
                    ))
                  }
                </motion.div>
              </div>
            {/* {propertyListings.map(({title, id}) => (
                <h1 key={id}>{title}</h1>
            ))} */}
            </div>
            
        </div>
    </MainLayout>
    </>
    
    
  )
}

export default ListingsPage;