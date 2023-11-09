import React from 'react'
import { useGlobalContext } from './context'

const Buttons = () => {
  const { isLoading, page, nbPages, handlePage } = useGlobalContext()
  return (
    <div className='btn-container'>
      <p>
        <button disabled={isLoading && true} onClick={() => handlePage('dec')}>
          prev
        </button>
        {page + 1} of {nbPages}
        <button disabled={isLoading && true} onClick={() => handlePage('inc')}>
          next
        </button>
      </p>
    </div>
  )
}

export default Buttons
