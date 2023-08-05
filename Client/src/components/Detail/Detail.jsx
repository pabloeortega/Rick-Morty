import { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import style from './Detail.module.css'
import 'animate.css/animate.min.css';
import { useNavigate } from 'react-router-dom';


const Detail =() => {
    const { id } = useParams()

    
    const divRef = useRef(null);

    const [ character, setCharacter ] = useState({})

    //CLOSE BUTTON
    const navigate = useNavigate();
    const handleClose = () => {
      divRef.current.classList.add('animate__bounceOut');
      setTimeout(() => navigate(-1), 1000); //Navigate AFTER 1Sec. The delay gives the animation time to complete before the navigation occurs. 

    }

    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/character/${id}`)
        // .then es un metodo de promesa
          .then((response) => response.json()) // Nos brinda info de la api y la parseamos
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } 
            else {
              alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            alert("No hay personajes con ese ID");
          });

        return setCharacter({});
      }, [id]);


    return (


        <div ref={divRef} className="animate__animated animate__bounceIn">
            {
                character ? ( 
                    <div className={style.container}>
                                <button onClick={handleClose} className={style.closeButton}>Close</button>

                      <div >
                        <h2>Name: {character.name}</h2>
                        <h2>Status: {character.status}</h2>
                        <h2>Specie: {character.species}</h2>
                        <h2>Gender: {character.gender}</h2>
                        <h2>Origin: {character.origin?.name}</h2>
                      </div>
                      <div>
                         <img 
                          src={character.image} 
                          alt={character.name} 
                          className={style.image}
                          />
                      </div>
                    </div>
                ) : (
                    ''
                )
            }
        </div>
    )
}

export default Detail