import React from 'react'

const GridData = ({dataValue, dataImg}) => {
  return (
    <div className='grid-data'>
        <img src={dataImg} alt="" />
        <p>{dataValue}</p>
    </div>
  )
}

export default GridData