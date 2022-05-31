import React from 'react'

import { useStateContext } from '../contexts/ContextProvider';

const Footer = () => {

  const {currentColor} = useStateContext();

  return (
    <div className="flex justify-center m-10 mt-24">
        <p className="text-gray-500 dark:text-white">© 2022 <a style={{color:currentColor}} href="https://mihneacojocaru.github.io/" target="_blank" rel="noreferrer">Mihnea Cojocaru</a></p>
    </div>
  )
}

export default Footer