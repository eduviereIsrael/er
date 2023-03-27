/* eslint-disable */

import {GraphQLClient, gql} from 'graphql-request';
import MainLayout from "../../components/MainLayout";
import { useStateContext } from '../../Context/StateContext';
import React, { Component, useState } from 'react';
import Link from "next/link"
import ShareLink from '../../components/ShareLink';

function PropertyListingPage({propertyListing}){
  const {address, 
        title, 
        availability, 
        coverImage, 
        otherImages, 
        detailedDescription, 
        longDescription
      } = propertyListing;

    // const {coverImg, setCoverImg} = useStateContext();
    // console.log(propertyListing);
    const availabilityTags = (x) => {
      if (x == "now_selling"){
        return 'Now Selling'
      } else if (x == "coming_soon"){
        return "Coming Soon"
      } else {
        return "Sold"
      }
    }
    const [coverImg, setCoverImg] = useState(coverImage.url);

    // setCoverImg(coverImage.url);
    return (
      <MainLayout>
        <div className="slug-page">
          <div className="container">
            <div className="main-section">
              <h1>{title}</h1>
              <p className="smaller-text availability-tags">{availabilityTags(availability)}</p>
              <div className="mainImage" >
                <img src={coverImg} alt={title} className="coverImage"/>
              </div>
              <div className="all-images">
                {otherImages.map((img, i) => (
                  <div 
                    key={i} 
                    style={{background: `url(${img.url})`, backgroundSize: 'cover'}} className="thumbnail-img"
                    onMouseOver={() => setCoverImg(img.url)}
                    onClick={() => setCoverImg(img.url)}
                  >
                  {/* <img src={img.url} className="thumbnail-img" /> */}
                  </div>
                ))}
              </div>
              <div className="details">
                <h2>Some insights on this property</h2>
                <p className='small-text'>{longDescription}</p>

                <h3>Key Features includes: </h3>
                <ul>
                  {detailedDescription.map((feature, i) => (
                    <p key={i} className="small-text">{feature}</p>
                  ))}
                </ul>
              </div>
            </div>
            <div className="right-section">
              <ShareLink />
            </div>
            
          </div>
        </div>
      </MainLayout>
    )
}



const graphCms = new GraphQLClient("https://api-eu-west-2.hygraph.com/v2/cle3apban0jyl01uh6btpejkt/master");



const QUERY = gql`
  query propertyListings($slug:String!){
    propertyListing(where: {slug: $slug}){
      id,
      address,
      slug,
      title,
      availability,
      coverImage {
        url
      },
      otherImages {
        url
      },
      shortInfo,
      detailedDescription,
      longDescription
    }
  }
`;

const SLUGLIST = gql `
{
  propertyListings{
    slug
  }
}
`;

export async function getStaticProps({params}){
  const slug = params.slug
  const data = await graphCms.request(QUERY, {slug});
  const propertyListing = data.propertyListing
  return {
    props: {
      propertyListing,
    },
    revalidate: 10,
  }
}

export async function getStaticPaths(){
    const {propertyListings} = await graphCms.request(SLUGLIST);

    return {
      paths: propertyListings.map((propertyListing) => ({params: {slug: propertyListing.slug}})),
      fallback: false
    }
}

export default PropertyListingPage;