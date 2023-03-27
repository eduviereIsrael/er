/* eslint-disable */

import React from 'react';
import {GraphQLClient, gql} from 'graphql-request';
import MainLayout from '../../components/MainLayout';
import Head from 'next/head';
import { RichText } from '@graphcms/rich-text-react-renderer';
import ShareLink from '../../components/ShareLink';


const BlogPage = ({blog}) => {
  const { blogTitle, pageTitle, metaDescription, openingParagraph, readTime, mainPost, displayImage, publishedDate  } = blog;
  return (
    <>
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="icon" href="/logo.svg" />
    </Head>
    <MainLayout>
      <div className='blog-post'>
        <div className="container">
          <div className="main-section">
            <h1>{blogTitle}</h1>
            <div className="tags">
              <span className="minutes smaller-text">{readTime} mins read</span>
              <span className="date smaller-text">{publishedDate}</span>
            </div>
            <img src={displayImage.url} alt={blogTitle} />
            <p className="small-text">{openingParagraph}</p>
            <div className="post">
              <RichText content={mainPost.json} />
            </div>
          </div>
          <div className="right-section">
            <ShareLink/>
          </div>

        </div>
      </div>
    </MainLayout>
    </>
  )
}



export default BlogPage

const graphCms = new GraphQLClient("https://api-eu-west-2.hygraph.com/v2/cle3apban0jyl01uh6btpejkt/master");
const SLUGLIST = gql `
  {
    blogs{
      slug
    }
  }
`;

const QUERY = gql`
  query blogs($slug:String!){
    blog(where: {slug: $slug}){
      blogTitle,
      publishedDate,
      pageTitle,
      metaDescription,
      openingParagraph,
      readTime,
      mainPost {
        json
      },
      displayImage {
        url
      },
    }
  }
`;

export async function getStaticProps({params}){
  const slug = params.slug
  const data = await graphCms.request(QUERY, {slug});
  const blog = data.blog
  return {
    props: {
      blog,
    },
    revalidate: 10,
  }
}

export async function getStaticPaths(){
    const {blogs} = await graphCms.request(SLUGLIST);

    return {
      paths: blogs.map((propertyListing) => ({params: {slug: propertyListing.slug}})),
      fallback: false
    }
}
