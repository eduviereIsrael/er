/* eslint-disable */

import {GraphQLClient, gql} from 'graphql-request';
import MainLayout from "../../components/MainLayout";

import React, { Component } from 'react';
import Link from "next/link"

function PropertyListingPage({propertyListing}){
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
    const {address, title, availability, coverImage, otherImages} = propertyListing;
    return (
      <MainLayout>
        <div className="slug-page">
          <div className="container">
            <div className="main-section">
            <h1>{title}</h1>
            <p className="smaller-text availability-tags">{availabilityTags(availability)}</p>
            <img src={coverImage.url} alt={title} className="coverImage"/>
            </div>
            <div className="right-section">Hello</div>
            
          </div>
        </div>
      </MainLayout>
    )
}

// PropertyListingPage.getInitialProps = async ({query, req, asPath}) => {
//   throw new error("Error before page load")
// }


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
      shortInfo
    }
  }
`;

const SLUGLIST = gql `
{
  propertyListings{
    slug
  }
}
`

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