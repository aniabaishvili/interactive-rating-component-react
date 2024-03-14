
import Rate from './components/rate/Rate'
import Result from './components/Result/Result'
import './App.css'
import { useState } from 'react'

function App() {
  const [submit,setSubmit] =useState(false);
  const [rate, setRate] = useState(null);

  return (
   <div>
    {submit ? <Result rate={rate}/> : <Rate setSubmit={setSubmit} rate={rate} setRate={setRate}/>}
   </div>
 
  )
}


export default App
