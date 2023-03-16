/* eslint-disable */

import React from 'react'

const PrimaryBtn = (props) => {

  const btnStyle = {
    background: '#000',
    border: 'none',
    outline: 'none',
    whiteSpace: 'nowrap',
    borderRadius: '25px',
    // padding: '15px 56px',
    fontSize: '13px',
    fontWeight: '400',
    color: '#fff',
    padding: `${ !props.width? '15px 56px' : '15px'}`,
    width: `${props.width? props.width : 'unset'}`,
    textAlign: "center",
    borderRadius: `${props.borderRadius? props.borderRadius : '25px' }`,


  };

//   const btnTextStyle = {
//     fontSize: '13px',
//     fontWeight: '400'
//   };
  return (
        <a href={props.link} style={btnStyle} >{props.text} {!props.img? '' : <img style={{width: '13px', marginLeft: '15px', alignSelf: 'center'}} src={props.img} />}</a>
  )
}

export default PrimaryBtn