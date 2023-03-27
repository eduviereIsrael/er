/* eslint-disable */

import Link from "next/link";


function BlogCard({blog}){
    const {  blogTitle, publishedDate, readTime, slug, displayImage, openingParagraph } = blog;

    // console.log(item, "blog")


    return(
        <>
        <div className="blog-card">
            <Link href={`blogs/${slug}`}>
                <img src={displayImage.url} alt={blogTitle}/>
                <div className="details">
                    <div className="tags">
                        <span className="minutes smaller-text">{readTime} mins read</span>
                        <span className="date smaller-text">{publishedDate}</span>
                    </div>
                    <h4>{blogTitle}</h4>
                </div>
            </Link>
        </div>
        
        </>
    )
}

export default BlogCard;