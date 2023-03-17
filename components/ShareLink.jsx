/* eslint-disable */

import { transform } from "framer-motion"

const ShareLink = () => {

  const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    background: "#fff",
    padding: "30px",
    width: "100%",
    gap: "20px"
  }  

  const shareLinksStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%"
  }

  const linkStyle = {
    width: "22%", 
    border: "1px solid rgb(195, 195, 195)", 
    borderRadius: "50%", 
    height: "50px",
    width: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}
  return (
    <div className='share-link' style={style}>
        <span>Share this post</span>
        <hr style={{background: "#000", border: "2px solid #000", width: "100%"}}/>
        <div className="share-links" style={shareLinksStyle}>
            <a href="" target="_blank" style={linkStyle} >
                <img src="/facebookicon.svg" />
            </a>
            <a href="" target="_blank" style={linkStyle}>
                <img src="/twittericon.svg" />
            </a>
            <a href="" target="_blank" style={linkStyle}>
                <img src="/whatsappicon.svg" />
            </a>
            <a href="" target="_blank" style={linkStyle}>
                <img src="/copylinkicon.svg" />
            </a>
        </div>
    </div>
  )
}

export default ShareLink