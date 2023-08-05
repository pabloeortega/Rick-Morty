import style from "./Card.module.css"
import { Link, useLocation } from 'react-router-dom'
import { connect } from "react-redux";
import { addFavorite, deleteFavorite } from "../../redux/actions";
import { useEffect, useState } from "react";

function Card({ id, name, species, gender, image, onClose, deleteFavorite, addFavorite, myFavorites }) {
   const [ isFav, setIsFav ] = useState(false)

   const { pathname } = useLocation()

   const [animate, setAnimate] = useState(false);

   const handleFavorite = () => {
      if(isFav) {
         setIsFav(false)
         deleteFavorite(id)
      }
      else {
         setIsFav(true)
         addFavorite({ id, name, species, gender, image })
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites])

   return (
      <div className={`${style.container} ${animate ? 'animate__animated animate__bounceOut' : ''}`}>
      

         {
            isFav ? (
               <button onClick={handleFavorite} className={style.btnFav}>❤️</button>
            ) 
            : 
            (
               <button onClick={handleFavorite} className={style.btnFav}>🤍</button>
            )
         }

         {
            !pathname.includes('/favorites') &&
            <button 
            onClick={() => { 
              setAnimate(true); 
              setTimeout(() => onClose(id), 1000); // delay onClose action
            }} 
            className={style.btn}>
              X
          </button>
         }
         

         <Link to={`/detail/${id}`}>
            <h2> Name: {name} </h2>
         
         

         <div className={style.containerTitle}>
            <h2> ID#: {id} </h2>
            <h2> Species: {species}</h2>
            <h2> Gender: {gender}</h2>
         </div>
         <img  src={image} alt={name} className={style.image} />
         </Link>
      </div>
   );
}

const mapStateToProps = (state)=> {
   return {
      myFavorites: state.myFavorites
   }

}

const mapDispatchToProps = (dispatch) => {
   return {
      addFavorite: (character) => dispatch(addFavorite(character)),
      deleteFavorite: (id)=> dispatch((deleteFavorite(id)))
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(Card)
