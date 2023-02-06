/* eslint-disable */

import React from 'react'

const SecondaryBtn = (props) => {

  const btnStyle = {
    background: 'none',
    border: '1px solid #000',
    outline: 'none',
    whiteSpace: 'nowrap',
    borderRadius: '25px',
    padding: '15px 56px',
    fontSize: '13px',
    fontWeight: '400',
    color: '#000',
    // display: 'flex',
    // flexDirection: 'row',
    // alignItems: 'center'
  };

//   const btnTextStyle = {
//     fontSize: '13px',
//     fontWeight: '400'
//   };
  return (
    <a href={props.link} style={btnStyle} >{props.text} {!props.img? '' : <img style={{width: '13px', marginLeft: '15px'}} src={props.img} />}</a>
  )
}

export default SecondaryBtn