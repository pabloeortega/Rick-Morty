import SearchBar from "../SearchBar/SearchBar"
import { Link } from 'react-router-dom'
import style from './Nav.module.css'

   const Nav = (props) => {
       const { onSearch } = props
       return (
           <div className={`${style.container} bg-gray-800 py-4 px-6 sm:px-12 lg:px-24`}>
               <SearchBar onSearch={onSearch}/>
               <Link to="/home" className={`${style.link} text-white hover:text-gray-300 mr-4`}>Home</Link> 
               <Link to="/about" className={`${style.link} text-white hover:text-gray-300 mr-4`}>About</Link> 
               <Link to='/favorites' className={`${style.link} text-white hover:text-gray-300`}>Favorites</Link>
           </div>
       )
   }

export default Nav