import { useState } from 'react'
import CustomizedTimeline from './components/timeline'
import ResponsiveAppBar from './components/navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        Hello portfolio
      </div> 
      <div>

        
       
       <ResponsiveAppBar>

       </ResponsiveAppBar>
       <CustomizedTimeline>
        
       </CustomizedTimeline>
      </div>
    </>
  )
}

export default App
