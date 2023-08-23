import React from 'react'
import './PrintView.css'

export default function PrintView({message}){
  return (
    <div className='print'>
        <p>
            <span className='print-span'>
                print
            </span>
            <span className='print-bracket'>(</span>
            <span className='print-message'>
                {message}
            </span>
            <span className='print-bracket'>)</span>
        </p>
    </div>
  )
}
