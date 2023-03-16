/* eslint-disable */

import React from 'react'

const SecondaryBtn = (props) => {

  const btnStyle = {
    background: 'none',
    border: `1px solid ${props.color? props.color : '#000' }`,
    outline: 'none',
    whiteSpace: 'nowrap',
    borderRadius: `${props.borderRadius? props.borderRadius : '25px' }`,
    padding: `${ !props.width? '15px 56px' : '15px'}`,
    fontSize: `${ props.fontSize? props.fontSize : '13px'}`,
    fontWeight: '400',
    color: `${props.color? props.color : '#000' }`,
    width: `${props.width? props.width : 'unset'}`,
    // display: 'flex',
    // flexDirection: 'row',
    // alignItems: 'center',
    textAlign: "center",
    // marginTop: "auto"
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