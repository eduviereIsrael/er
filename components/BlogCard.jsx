/* eslint-disable */

import Link from "next/link";


function BlogCard({image, title, date, readTime}){



    return(
        <div className="blog-card">
            <img src={image} alt={title}/>
            <div className="details">
                <div className="tags">
                    <span className="minutes smaller-text">{readTime} mins read</span>
                    <span className="date smaller-text">{date}</span>
                </div>
                <h4>{title}</h4>
            </div>
        </div>
    )
}

export default BlogCard;