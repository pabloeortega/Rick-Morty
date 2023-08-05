import { connect } from "react-redux"
import Card from "../Cards/Cards"
import style from './Favorites.module.css'
import { useDispatch,  } from "react-redux"
import { order, filter } from "../../redux/actions"




const Favorites = ({ myFavorites }) => {
   

    const dispatch = useDispatch()


    const handleOrder = (evento)=> {
        dispatch(order(evento.target.value))
    }

    const handleFilter = (evento)=> {
        dispatch(filter(evento.target.value))
    }

    return (
        <>
        <h2  className={style.title}>My Favorites</h2>

        <div  className={style.container} >
            <select onChange={handleOrder}>
                <option value="Ascending">Ascending</option>
                <option value="Descending">Descending</option>
            </select>

            <select onChange={handleFilter}>
                {
                    ['Male', 'Female', 'Genderless', 'unknown'].map((gender, index)=> {
                        return (
                           <option 
                            key= {index}
                            value={gender} 
                           >
                                {gender}
                            </option> 
                        )
                    })
                }
                {/* <option value="All">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option> */}
            </select>
            
        </div>

        {
            myFavorites.length === 0 ? (
                <p className={style.subtitle}>Empty favorites list! </p>
            ) :
            (
                <Card characters = { myFavorites }/>
            )
        }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }

}

export default connect(mapStateToProps, null)(Favorites)
