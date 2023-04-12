
// import {
//     AUTO_FILTER, GAME_DB, GAME_API,
//     FILTER_NAME, CAMBIO, FILTER,
//     FILTER_GENRE, FILTER_RATING, FILTER_STATUS
// } from "./types";
// import axios from "axios";


// export function getGames(opc) {
   

//     return async function (dispact) {
//         let Response =  await axios.get(`https://piweb-production.up.railway.app/videogames`)
       
//         if (opc === "DB" ||opc === 2) {
//             const GamesDB = await SearchApiDB(Response, opc)
//             return dispact({
//                 type: GAME_DB,
//                 payload: GamesDB
//             })
//         } else {
//             if (opc === "API"||opc === 3) {
//                 const GamesAPI = await SearchApiDB(Response, opc)
//                 return dispact({
//                     type: GAME_API,
//                     payload: GamesAPI
//                 })
//             } else {
//                 return dispact({
//                     type: AUTO_FILTER,
//                     payload: Response.data
//                 })
//             }
//         }


//     }
// }


// export function getGamesName(name,opc) {

//     try {
//         let GameName = []
//         return async function (dispact) {
//             const nameGame = await axios.get(`https://piweb-production.up.railway.app/videogames/videogames/?name=${name}`)
           
//             if (opc === 2) {
//                 GameName = await SearchApiDB(nameGame, opc)
//             } else {
//                 if (opc === 3) {
//                     GameName = await SearchApiDB(nameGame, opc)
//                  } else {
//                    if (opc === 1) {
//                     return dispact({
//                         type: FILTER_NAME,
//                         payload: nameGame.data
//                     })
//                    }
//                 }
//             }
//             return dispact({
//                 type: FILTER_NAME,
//                 payload: GameName
//             })

//         }
//     } catch (error) {
//         throw new Error(error);
//     }
// }


// export function Cambio(ban) {

//     return ({
//         type: CAMBIO,
//         payload: ban
//     })
// }
// export function filter(filtered) {
//     return ({
//         type: FILTER,
//         payload: filtered
//     })
// }

// export function FilterRating(filtered) {
//     try {
//         return ({
//             type: FILTER_RATING,
//             payload: filtered
//         })

//         //   }
//     } catch (error) {
//         throw new Error(error);
//     }
// }

// export function FilterGenres(filtered) {
//     console.log("filtrado gen", filtered)
//     try {
//         return ({
//             type: FILTER_GENRE,
//             payload: filtered
//         })
//     } catch (error) {
//         throw new Error(error);
//     }
// }

// export function filter_status(option) {
//     return ({
//         type: FILTER_STATUS,
//         payload: option
//     })
// }



// // export function 


// const SearchApiDB = (response, opc) => {



//     const copyfilter = response.data

//     const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[8|9|aA|bB][0-9a-f]{3}-[0-9a-f]{12}$/i;

//     const generos = copyfilter?.filter(gen => {

//         if (opc === "DB"|| opc === 2) {

//             if (uuidRegex.test(gen.id)) {
//                 return gen
//             }
//         } else
//             if (opc === "API"|| opc === 3) {
//                 if (!uuidRegex.test(gen.id)) {
//                     return gen
//                 }

//             }
//     })
//     return generos;
// }



import {
    AUTO_FILTER, GAME_DB, GAME_API,
    FILTER_NAME, CAMBIO, FILTER,
    FILTER_GENRE, FILTER_RATING, FILTER_STATUS, ERROR
} from "./types";
import axios from "axios";


export function getGames(opc,obj) {
   
    
    return async function (dispact) {
        let Response
        
        obj?Response = await obj:
        Response =  await axios.get(`/videogames`)
        console.log("ressss",Response,"opcion",opc)
        let response = Response.data?Response.data:Response
        if (opc === "DB" ||opc === 2) {
            
            const GamesDB = await SearchApiDB(response, opc)
            return dispact({
                type: GAME_DB,
                payload: GamesDB
            })
        } else {
            if (opc === "API"||opc === 3) {
                const GamesAPI = await SearchApiDB(response, opc)
                return dispact({
                    type: GAME_API,
                    payload: GamesAPI
                })
            } else {
                return dispact({
                    type: AUTO_FILTER,
                    payload: response
                })
            }
        }


    }
}


export function getGamesName(name,opc) {

    try {
        let GameName = []
        return async function (dispact) {
            const nameGame = await axios.get(`/videogames/videogames/?name=${name}`)
            
            if(nameGame.data.error){
                return dispact({
                    type: ERROR,
                    payload: nameGame.data.error
                })
            }
            const response = nameGame.data
            
            if (opc === 2) {
                GameName = await SearchApiDB(response, opc)
            } else {
                if (opc === 3) {
                    GameName = await SearchApiDB(response, opc)
                 } else {
                   if (opc === 1) {
                    return dispact({
                        type: FILTER_NAME,
                        payload: response
                    })
                   }
                }
            }
            return dispact({
                type: FILTER_NAME,
                payload: GameName
            })

        }
    } catch (error) {
        throw new Error(error);
    }
}


export function Cambio(ban) {

    return ({
        type: CAMBIO,
        payload: ban
    })
}
export function filter(filtered) {
    return ({
        type: FILTER,
        payload: filtered
    })
}

export function FilterRating(filtered) {
    try {
        return ({
            type: FILTER_RATING,
            payload: filtered
        })

        //   }
    } catch (error) {
        throw new Error(error);
    }
}

export function FilterGenres(filtered) {
    console.log("filtrado gen", filtered)
    try {
        return ({
            type: FILTER_GENRE,
            payload: filtered
        })
    } catch (error) {
        throw new Error(error);
    }
}

export function filter_status(option) {
    return ({
        type: FILTER_STATUS,
        payload: option
    })
}



// export function 


const SearchApiDB = (response, opc) => {



    const copyfilter = response

    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[8|9|aA|bB][0-9a-f]{3}-[0-9a-f]{12}$/i;

    const generos = copyfilter?.filter(gen => {

        if (opc === "DB"|| opc === 2) {

            if (uuidRegex.test(gen.id)) {
                return gen
            }
        } else
            if (opc === "API"|| opc === 3) {
                if (!uuidRegex.test(gen.id)) {
                    return gen
                }

            }
    })
    return generos;
}














