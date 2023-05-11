
import { useLoaderData } from 'react-router-dom'
import './App.css'

function App() {
  const coffees = useLoaderData();

  return (
    <>
      <h1 className='text-6xl'>Hot Cofee: {coffees.length}</h1>
    </>
  )
}

export default App
