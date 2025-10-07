import { Link } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <div className=' flex flex-col justify-center items-center h-[100vh] lg:text-5xl'>
        <div className='text-7xl text-pink-600 font-bold'>
          <h1 className='text-shadow'>Will you be my life</h1> 
          <h1 className='text-shadow'>partner ?</h1> 
        </div>
        <div className='flex gap-8 mt-18'>
          <Link to={'/love'}>
            <button className='bg- bg-yellow-400 px-18 py-2 font-bold rounded-xl text-xl'>Yes</button> 
          </Link>
          <Link to={'/love'}>
            <button className='bg- bg-yellow-400 px-3.5 py-2 font-bold rounded-xl text-xl'>Of course, Yes!!!</button>
          </Link>
        </div>     
      </div>
    </>
  )
}

export default App
