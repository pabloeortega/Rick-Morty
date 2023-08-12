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
  const [characters, setCharacters] = useState([])

  const [ access, setAccess ] = useState(false)



  const location = useLocation()
  const isAboutPage = location.pathname === '/about';
  const navigate = useNavigate()

//hide LOGO
  useEffect(() => {
    const isAboutPage = location.pathname === '/about';
    document.body.className = isAboutPage ? 'backgroundImage' : '';
}, [location]);

useEffect(() => {
  const anchorImage = document.querySelector('#anchor');
  if (anchorImage) {
      anchorImage.style.display = isAboutPage ? 'none' : '';
  }
}, [location, isAboutPage]);

useEffect(()=> {
  const eyesDiv = document.querySelector('#eyes');
  if(eyesDiv) {
    eyesDiv.style.display = isAboutPage ? 'none' : '';
  }
}, [location, isAboutPage])

  // const login = (userData) => {
  //   if(userData.username === username && userData.password === password  ) {
  //     setAccess(true)
  //     navigate('/home')
  //   }
  // }

  async function login(userData) {
    try {
      const { username, password } = userData;
   
      const URL = 'http://localhost:3001/rickandmorty/login/';
      const query = `?email=${username}&password=${password}`

      const { data } = await axios(URL + query )
      const { access } = data;
         
         setAccess(data);
         access && navigate('/home');

    } 

    catch (error) {
      if (error.response && error.response.status === 401) {
        alert('Invalid email or password');
      } else {
        console.error(error);
      }
    }
 }

  useEffect(()=> {
    !access && navigate('/')
  }, [access, navigate])

//Search Fn
  async function onSearch(id) {

    try {

      const endpoint = "http://localhost:3001/rickandmorty/character/" +id
      const { data } = await axios(endpoint)

     
        if (characters.some(char => char.id === Number(id))) {
          alert(`#${id} is already on the list! :)`)
        } else if (data.id) {
          setCharacters(prevCharacters => [...prevCharacters, data]);
        }
      

    }
    catch (error){
      console.log('soy el catch', error.message)
      alert('Try with another ID')
    }

  
    
  }

 function onClose(id) {
  setCharacters(
    characters.filter((character) => {
      return character.id !== Number(id)
    })
  )
 }

  return (
   // <div className={`anchor ${isAboutPage ? 'hide' : ''}`}>
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
   // </div>
  )
}

export default App
