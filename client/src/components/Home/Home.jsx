
import styles from './Home.module.css'
import { NavLink } from 'react-router-dom'
function Home(props) {
    const { id, name, image, genre, rating } = props

    return (

        <div className={styles.gamesCards}>

            <div className={styles.name}>
                <p>{name}</p>
            </div>
            <ul>
                {genre?.map((gen, index) => <li key={index}>{gen}</li>)}
            </ul>
            <div className={styles.gamesimg}>
                <NavLink to={`/Detail/${id}`}>
                    <img src={image} alt="" />
                </NavLink>
            </div>
            <div className={styles.rating}>
                <p>&#9733; {rating}</p>
            </div>


        </div>

    )
}

export default Home