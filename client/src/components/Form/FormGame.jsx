import React, { useEffect, useState } from 'react'
import styles from "./FormGame.module.css"
import NavBar from '../NavBar/NavBar'
import validate from "./validate"
import axios from "axios"


function FormGame() {
  const [resback, setResback] = useState("")
  const [img, setImg] = useState("")
  const [btnactivo, setBtnactivo] = useState(true)
  const [errors,setErrors] = useState({
    name: "",
    platform: [],
    released: "",
    background_image: img,
    rating: "",
    description: "",
    genres: [],

  })

  const [formdata, setFormdata] = useState({
    name: "",
    platform: [],
    released: "",
    background_image: img,
    rating: "",
    description: "",
    genres: [],

  })

  function platdataHandler(e) {
    const { value } = e.target;
    if (!formdata.platform.includes(value)) {
      setFormdata(form => ({
        ...form,
        platform: formdata.platform.concat(value)
      }))
    } else {
      setFormdata(form => ({
        ...form,
        platform: formdata.platform.filter(x => value !== x)
      }))
    }

  }


  function gendataHandler(e) {
    const { value } = e.target;

    if (!formdata.genres.includes(value)) {
      setFormdata(gen => ({
        ...gen,
        genres: formdata.genres.concat(value)
      }))
    } else {
      setFormdata(gen => ({
        ...gen,
        genres: formdata.genres.filter(x => value !== x)
      }))
    }

  }

  function formdataHandler(e) {
    const { name, value } = e.target;

    setFormdata({
      ...formdata,
      [name]: value,
    })
    setErrors(
      validate({
      ...formdata,
      [name]: value,
    }))
   }

  function submitHandler(e) {
    e.preventDefault()
    if(formdata.released){
      axios(`https://piweb-production.up.railway.app/videogames`, {
        method: `POST`,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formdata)
      })
        .then(response => response.json())
        .then(data => {
          if (data) {
            setResback(data);
            setBtnactivo(false)
            setTimeout(()=>{
              window.location.reload();
            },3000)
            
          }
  
        })
        .catch(error => {
          console.error('Error al enviar datos al backend:', error);
        });
    }else{
      alert("DEBE SELECCIONAR UNA FECHA")
    }
    


  }
  const imgHandler = (e) => {
    const file = e.target.files[0].name
    const img = `../assets/${file}`
    setImg((im) => [...im, img])
    setFormdata({ ...formdata, background_image: img })
  }


//!recarga la pagina
  // const clearHandler = () => {
  //   window.location.reload();
  // }


  // function getChecked() {
  //   var checkboxes = document.querySelectorAll('input[name="group1"]:checked');
  //   var values = [];
  //   for (var i = 0; i < checkboxes.length; i++) {
  //     values.push(checkboxes[i].value);
  //   }
  //   document.getElementById("gener").value = values
  //   alert("Selected values: " + values);
  // }
  return (
    <div>
      <NavBar />
      <div className={styles.container}>


        <h1>CREAR JUEGO NUEVO</h1>

        {/*  */}
        <form onSubmit={submitHandler}>
          <br />
          <div className={styles.input}>
            <label name="name">nombre: </label>
            <input onChange={formdataHandler} type="text" name="name" placeholder='Nombre Del Juego...' />
            <p className={styles.errors}>{errors.name}</p>
          </div>
          <br />
          <div className={styles.input}>
            <label name="background_image">imagen: </label>
            {/* type="file" */}
            <input onChange={imgHandler} type="file"  />
          </div>
          <br />
          <div className={styles.input}>
            <label name="description">descripcion: </label>
            <textarea onChange={formdataHandler} name="description" id=""
             cols="30" rows="6" placeholder='Descripcion Del Juego... '></textarea>
            {/* <input onChange={formdataHandler} type="textarea" name="description" /> */}
          </div>
          <br />
          <div>
            <label >plataformas: </label>
            <ul>
              <li><input onChange={platdataHandler} type="checkbox" value="PC" name="platform" />PC</li>
              <li><input onChange={platdataHandler} type="checkbox" value="PlayStation 5" name="platform" />PlayStation 5</li>
              <li><input onChange={platdataHandler} type="checkbox" value="Xbox One" name="platform" />Xbox One</li>
              <li><input onChange={platdataHandler} type="checkbox" value="PlayStation 4" />PlayStation 4</li>
              <li><input onChange={platdataHandler} type="checkbox" value="Xbox Series S/X" />Xbox Series</li>
              <li><input onChange={platdataHandler} type="checkbox" value="Xbox 360" />Xbox 360"</li>
              <li><input onChange={platdataHandler} type="checkbox" value="PlayStation 3" />PlayStation 3</li>
              <li><input onChange={platdataHandler} type="checkbox" value="Nintendo Switch" />Nintendo Switch</li>
              <li><input onChange={platdataHandler} type="checkbox" value="Xbox Store" />Xbox Store"</li>
              <li><input onChange={platdataHandler} type="checkbox" value="macOS" />macOS</li>
              <li><input onChange={platdataHandler} type="checkbox" value="Linux" />Linux</li>
              <li><input onChange={platdataHandler} type="checkbox" value="Nintendo Switch" />Nintendo Switch</li>
              <li><input onChange={platdataHandler} type="checkbox" value="Android" />Android"</li>
              <li><input onChange={platdataHandler} type="checkbox" value="iOS" />iOS</li>
              <li><input onChange={platdataHandler} type="checkbox" value="PS Vita" />PS Vita"</li>
              <li><input onChange={platdataHandler} type="checkbox" value="Web" />Web</li>
              <li><input onChange={platdataHandler} type="checkbox" value="Nintendo Store" />Nintendo Store</li>
              <li><input onChange={platdataHandler} type="checkbox" value="Xbox 360 Store" />Xbox 360 Store</li>
              <li><input onChange={platdataHandler} type="checkbox" value="Nintendo 3DS" />Nintendo 3DS</li>
            </ul>

          </div>

          {/* <input type="text" name="Platform" /> */}
          <br />
          <div className={styles.input}>
            <label name="released">fecha Creaccion: </label>
            <input onChange={formdataHandler} type="date" name="released" />
          </div>
          <br />
          <div className={styles.input}>
            <label name="rating">puntaje: </label>
            <input onChange={formdataHandler} type="text" name="rating" placeholder='Puntaje Del Juego...'/>
            <p className={styles.errors}>{errors.rating}</p>
          </div>
          <br />
          <label name="genres">generos: </label>
          <ul>
            <li ><input onChange={gendataHandler} type="checkbox" value="1" /> Racing</li>
            <li ><input onChange={gendataHandler} type="checkbox" value="2" />Shooter</li>
            <li  ><input onChange={gendataHandler} type="checkbox" value="3" />Adventure</li>
            <li  ><input onChange={gendataHandler} type="checkbox" value="4" />Action</li>
            <li  ><input onChange={gendataHandler} type="checkbox" value="5" />RPG</li>
            <li  ><input onChange={gendataHandler} type="checkbox" value="6" />Fighting</li>
            <li  ><input onChange={gendataHandler} type="checkbox" value="7" />Puzzle</li>
            <li ><input onChange={gendataHandler} type="checkbox" value="10" />Strategy</li>
            <li ><input onChange={gendataHandler} type="checkbox" value="11" />Arcade</li>
            <li ><input onChange={gendataHandler} type="checkbox" value="14" />Simulation</li>
            <li ><input onChange={gendataHandler} type="checkbox" value="15" />Sports</li>
            <li ><input onChange={gendataHandler} type="checkbox" value="17" />Card</li>
            <li ><input onChange={gendataHandler} type="checkbox" value="19" />Family</li>
            <li ><input onChange={gendataHandler} type="checkbox" value="28" />Board Games</li>
            <li ><input onChange={gendataHandler} type="checkbox" value="34" />Educational</li>
            <li ><input onChange={gendataHandler} type="checkbox" value="40" />Casual</li>
            <li ><input onChange={gendataHandler} type="checkbox" value="51" />Indie</li>
            <li ><input onChange={gendataHandler} type="checkbox" value="83" />Platformer</li>
            <li ><input onChange={gendataHandler} type="checkbox" value="59" />Massively Multiplayer</li>
          </ul>
         
          <br />
          <h1 className={styles.txt}>{resback}</h1>
          <button>CREAR JUEGO</button>
        </form>
        {/* <button disabled={btnactivo} onClick={clearHandler} id="newgame">Nuevo juego</button> */}
        
      </div>
    </div>
  )
}

export default FormGame