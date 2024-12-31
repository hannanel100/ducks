import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card, CardTitle } from './components/ui/card'

function App() {
  const [count, setCount] = useState(0)

  return (
   <main>
    <Card>
      <CardTitle>Test</CardTitle>
      </Card>   </main>
  )
}

export default App
