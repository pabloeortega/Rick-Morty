import './App.css'
import Cards from './components/Cards/Cards.jsx'
//import SearchBar from './components//SearchBar/SearchBar.jsx'
import Nav from './components/Nav/Nav'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'
import Favorites from './components/Favorites/Favorites'


function App () {
  const [ characters, setCharacters ] = useState([])

  const [ access, setAccess ] = useState(false)

  const username = 'user123@gmail.com'
  const password = 'user123'

  const location = useLocation()
  const navigate = useNavigate()

  const login = (userData) => {
    if(userData.username === username && userData.password === password  ) {
      setAccess(true)
      navigate('/home')
    }
  }

  useEffect(()=> {
    !access && navigate('/')
  }, [access, navigate])


  function onSearch(id) {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
          const characterFind = characters.find((char) => char.id === Number(id))
          console.log('metodo find',characterFind);

          if(characterFind) {
            console.log('entre al if, ya esta en la lista', characterFind);
            alert('Already in the list!')
          }
          
          else if(data.id !== undefined) {
            setCharacters((character) => [...character, data]);
          }
        })

        .catch((error)=> {
          console.log('soy el catch', error);
          alert('Intenta con otro ID')
        })
   }

 function onClose(id) {
  setCharacters(
    characters.filter((character) => {
      return character.id !== Number(id)
    })
  )
 }

  return (
    <div className='App'>

      {
        
        location.pathname !== '/' &&  <Nav onSearch= {onSearch} />

      }
       

        <Routes>

          <Route
            path='/'
            element= { <Form login= {login} /> }
          
          />

          <Route
            path="/home"
            element={<Cards characters={characters} onClose={onClose}/>}
          
          />

          <Route 
            path= '/about'
            element={ <About/> }
          
          />

          <Route 
            path="/detail/:id"
            element={ <Detail/>}
          
          />

          <Route 
            path='/favorites'
            element= { <Favorites/>}
          />

        </Routes>
        
        
    </div>
  )
}

export default App
