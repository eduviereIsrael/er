import {GraphQLClient, gql} from 'graphql-request';
import MainLayout from "../../components/MainLayout";

import React, { Component } from 'react'

function PropertyListingPage({propertyListing}){
    console.log(propertyListing);
    const {address, title} = propertyListing;
    return (
      <MainLayout>
        <div>Hello from {title}</div>
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
      coverImage {
        url
      },
      shortInfo
    }
  }
`;

// const QUERY = gql`
// {
//     propertyListing(where: {slug: $slug}){
//       id,
//       address,
//       slug,
//       coverImage {
//         url
//       },
//       shortInfo
//     }
//   }
// `;

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