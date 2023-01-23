import React from 'react'

import {  useSelector } from 'react-redux';


function Wallet() {

  // const dispatch = useDispatch()
  const counter = useSelector(state => state.counter)
  return (
    <div className='Wallet__container'>
      <p>Wallet</p>
      <div className='Wallet__container_myMoneyCounter borders '>{counter}</div>
    </div>
  )
}

export default Wallet