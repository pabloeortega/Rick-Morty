import SearchBar from "../SearchBar/SearchBar";
import { Link } from 'react-router-dom';
import style from './Nav.module.css';
import EyeSeeYou from "../Eyes/EyeSeeYou";

const Nav = (props) => {
    const { onSearch } = props
    return (
        <div>
            <div>
                <EyeSeeYou />
                <SearchBar className={style.search} onSearch= {onSearch}/>
            </div>
            <div className={style.container}>
                
                <Link to="/home"  className={style.link}> Home </Link> 
                <Link to="/about" className={style.link}> About </Link> 
                <Link to='/favorites' className={style.link}>Favorites</Link>
            </div>
        </div>
    )
}

export default Nav