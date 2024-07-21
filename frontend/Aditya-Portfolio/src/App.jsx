import { useState } from 'react'
import CustomizedTimeline from './components/timeline'
import ResponsiveAppBar from './components/navbar'
import './App.css'
import { Timeline } from '@mui/lab'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
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
