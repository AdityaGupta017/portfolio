import ResponsiveAppBar from './components/navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import CustomizedTimeline from './components/timeline'
import { Box } from '@mui/material'
import './App.css'


function App() {
  return (
    <Box sx={{ width: '100%' }}>
      <ResponsiveAppBar />
      <Hero />
      <Skills />
      <Projects />
      <CustomizedTimeline />
    </Box>
  )
}

export default App
