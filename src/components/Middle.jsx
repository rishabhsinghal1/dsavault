import React, { useContext } from 'react'
import MiddleNavigators from './MiddleNavigators'
import Selector from './Selector'
import Topics from './Topics'
import Companies from './Companies'
import Sheets from './Sheets'
import { SelectContext } from '../context/SelectContext'
const Middle = () => {
  const {selectOption} = useContext(SelectContext);
  const renderOptions = () => {
    if(selectOption === 'topics') return <Topics/>
    if(selectOption === 'companies') return <Companies/>
    if(selectOption === 'sheets') return <Sheets/>
  }
  return (
    <div className='middle'>
        <MiddleNavigators/>
        <Selector/>
        {renderOptions()}
    </div>
  )
}

export default Middle