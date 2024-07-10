import React,{ useState } from 'react'
import Header from './components/Header'
import Balance from './components/Balance'
import Income from './components/Income'
import Transactionlist  from './components/Transactionlist'
import AddTransaction from './components/Addtranscation'
import "./App.css"


import { GlobalProvider } from './context/Globalstate'


function App() {

  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance/>
        <Income/>
        <Transactionlist/>
        <AddTransaction/>
      </div>
      </GlobalProvider>
  )
}

export default App
