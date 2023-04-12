// import { AUTO_FILTER,GAME_DB,GAME_API,FILTER_NAME,
//      CAMBIO, FILTER, FILTER_GENRE,FILTER_RATING,
//      FILTER_STATUS } from "./types";

// const initialState = {
//     allCharacters: [],
//     filterGameDB:[],
//     filterGameAPI:[],
//     filterGameGener:[],
//     GamesDB:[],
//     GamesAPI:[],
//     ban:1,
//     filter: 0,
//     errors: {}
// }
// export default function reducer(state = initialState, { type, payload }) {
    
//     switch (type) {

//         case AUTO_FILTER: {
//             return {
//                 ...state,
//                 allCharacters: payload,
//                 errors: {}
//             }
//         }
//         case GAME_DB: {
//             return {
//                 ...state,
//                 GamesDB: payload,
//                 errors: {}
//             }
//         }
//         case GAME_API: {
//             return {
//                 ...state,
//                 GamesAPI: payload,
//                 errors: {}
//             }
//         }
//         case FILTER_NAME: {
            
//             if (state.ban === 2) {
//                 return {
//                     ...state,
//                     GamesDB: payload,
//                     errors: {}
//                 }
//             }else{
//                 if (state.ban === 3) {
//                     return {
//                         ...state,
//                         GamesAPI: payload,
//                         errors: {}
//                     }
//                 }else{
//                     return {
//                         ...state,
//                         allCharacters: payload,
//                         errors: {}
//                     }
//                 }
//             }
//         }
//         case CAMBIO: {
//             return {
//                 ...state,
//                 filter:0,
//                 ban: payload,
//                 errors: {}
//             }
//         }
//         case FILTER_STATUS: {
//             return ({
//                 ...state,
//                 filter: payload
//             })
//         }
//         case FILTER: { //? POR NOMBRE ASCEN DESEN
//             //filterGameDB
//             let copyfilter = []
//             if(state.ban===1)copyfilter = [...state.allCharacters]
//             if(state.ban===2)copyfilter = [...state.GamesDB]
//             if(state.ban===3)copyfilter = [...state.GamesAPI]
//             if(state.filter===1)copyfilter = [...state.filterGameGener]
//             const orderfilter = copyfilter.sort((a,b)=>{
//                 if (payload === "ascendente" ) {
//                     if ( a.name < b.name) {  
//                         return -1
//                     }else{
//                         return 1
//                     }
                   
//                 }

//                 if (payload === "descendente" ) {
//                     if ( a.name > b.name) {

//                         return -1
//                     }else{
//                         return 1
//                     }
                  
//                 }
//                return null 
//             })
//             if (state.filter === 1) {
//                 return {
//                     ...state,
//                     filterGameGener: orderfilter,
//                     errors: {}
//                 } 
//             }
            
            
//             if (state.ban===1) {
//                 return {
//                     ...state,
//                     allCharacters: orderfilter,
//                     errors: {}
//                 }
//             }else{
//                 if (state.ban===2) {
//                     return {
//                         ...state,
//                         GamesDB: orderfilter,
//                         errors: {}
//                     }
//                 }else{
//                     if (state.ban===3) {
//                         return {
//                             ...state,
//                             GamesAPI: orderfilter,
//                             errors: {}
//                         }
//                     }
//                 }
                
//             }
//         } break
//         case FILTER_RATING: {

//             let copyfilter = []
//             if(state.ban===1)copyfilter = [...state.allCharacters]
//             if(state.ban===2)copyfilter = [...state.GamesDB]
//             if(state.ban===3)copyfilter = [...state.GamesAPI]
//             if(state.filter===1)copyfilter = [...state.filterGameGener]
//             const orderfilter = copyfilter.sort((a,b)=>{
//                 if (payload === "ascendente" ) {
//                     if ( a.rating < b.rating) {  
//                         return -1
//                     }else{
//                         return 1
//                     }
                   
//                 }
               
//                 if (payload === "descendente" ) {
//                     if ( a.rating > b.rating) {

//                         return -1
//                     }else{
//                         return 1
//                     }
                  
//                 }
//                 return null
//             })
//             if (state.filter === 1) {
//                 return {
//                     ...state,
//                     filterGameGener: orderfilter,
//                     errors: {}
//                 }         
//             }
            
//             if (state.ban===1) {
//                 return {
//                     ...state,
//                     allCharacters: orderfilter,
//                     errors: {}
//                 }
//             }else{
//                 if (state.ban===2) {
//                     return {
//                         ...state,
//                         GamesDB: orderfilter,
//                         errors: {}
//                     }
//                 }else{
//                     if (state.ban===3) {
//                         return {
//                             ...state,
//                             GamesAPI: orderfilter,
//                             errors: {}
//                         }
//                     }
//                 }
                
//             }
          
//         }
            
//         break

//         case FILTER_GENRE: {
           
// ;let copyfilter = []
// if(state.ban===1)copyfilter = [...state.allCharacters]
// if(state.ban===2)copyfilter = [...state.GamesDB]
// if(state.ban===3)copyfilter = [...state.GamesAPI]

//              const orderfilter = copyfilter.filter(gen =>{
//                 for (const iterator of gen.genres) {
//                         if (iterator === payload) {
//                             return gen
                            
//                         }
//                        }
//                        return null
//             })
//             return {
//                 ...state,
//                 filterGameGener:orderfilter,
//                 filter : state.filter,
//                 errors: {}
//             }
        
           
//         }
        
//         case "ERRO": {
//             return {
//                 ...state,
//                 errors: payload,
//             }
//         }
//         default: {
//             return { ...state }
//         }
//     }
    
// };

































// // import { AUTO_FILTER,FILTER_NAME, CAMBIO, FILTER, FILTER_GENRE,FILTER_RATING } from "./types";

// // const initialState = {
// //     allCharacters: [],
// //     filterGame:[],
// //     ban:false,
// //     filter: "",
// //     errors: {}
// // }
// // // {type,payload}
// // export default function reducer(state = initialState, { type, payload }) {
    
// //     switch (type) {

// //         case AUTO_FILTER: {
// //             return {
// //                 ...state,
// //                 allCharacters: payload,
// //                 errors: {}
// //             }
// //         }
// //         case FILTER_NAME: {
// //             return {
// //                 ...state,
// //                 filterGame: payload,
// //                 errors: {}
// //             }
// //         }
// //         case CAMBIO: {
// //             return {
// //                 ...state,
// //                 ban: payload,
// //                 errors: {}
// //             }
// //         }
// //         case "ERROR": {
// //             return ({
// //                 ...state,
// //                 errors: payload
// //             })
// //         }
// //         case FILTER: {
// //             const copyfilter = [...state.filterGame]
// //             const orderfilter = copyfilter.sort((a,b)=>{
// //                 if (payload === "ascendente" ) {
// //                     if ( a.name < b.name) {  
// //                         return -1
// //                     }else{
// //                         return 1
// //                     }
                   
// //                 }

// //                 if (payload === "descendente" ) {
// //                     if ( a.name > b.name) {

// //                         return -1
// //                     }else{
// //                         return 1
// //                     }
                  
// //                 }
                
// //             })
            
// //             return {
// //                 ...state,
// //                 filterGame: orderfilter,
// //                 errors: {}
// //             }
// //         }
// //         case FILTER_RATING: {
// //             const copyfilter = [...state.allCharacters]
// //             const orderfilter = copyfilter.sort((a,b)=>{
// //                 if (payload === "ascendente" ) {
// //                     if ( a.rating < b.rating) {  
// //                         return -1
// //                     }else{
// //                         return 1
// //                     }
                   
// //                 }

// //                 if (payload === "descendente" ) {
// //                     if ( a.rating > b.rating) {

// //                         return -1
// //                     }else{
// //                         return 1
// //                     }
                  
// //                 }
                
// //             })
            
// //             return {
// //                 ...state,
// //                 allCharacters: orderfilter,
// //                 errors: {}
// //             }
// //         }

// //         case FILTER_GENRE: {
// //             // const copyfilter = [...state.allCharacters]
// //             // const orderfilter = copyfilter.sort((a,b)=>{
            
// //             //    for (const iterator of a.genres) {
// //             //     if (iterator === payload) {
// //             //         return -1
                    
// //             //     }
// //             //    }
                
// //             // })
// //             // return {
// //             //     ...state,
// //             //     allCharacters: orderfilter,
// //             //     errors: {}
// //             // }

// //             const copyfilter = [...state.allCharacters]
// //             const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[8|9|aA|bB][0-9a-f]{3}-[0-9a-f]{12}$/i;
// //             copyfilter?.map(gen=>  {return (!uuidRegex.test(gen.id))&&gen})
// //             console.log(copyfilter)
// //             const orderfilter = copyfilter.sort((a,b)=>{
            
// //                for (const iterator of a.genres) {
// //                 if (iterator === payload) {
// //                     return -1
                    
// //                 }
// //                }
                
// //             })
// //             return {
// //                 ...state,
// //                 allCharacters: orderfilter,
// //                 errors: {}
// //             }
// //         }
// //         case "ERRO": {
// //             return {
// //                 ...state,
// //                 errors: payload,
// //             }
// //         }
// //         default: {
// //             return { ...state }
// //         }
// //     }
    
// // };

import { AUTO_FILTER,GAME_DB,GAME_API,FILTER_NAME,
    CAMBIO, FILTER, FILTER_GENRE,FILTER_RATING,
    FILTER_STATUS, ERROR } from "./types";

const initialState = {
   allCharacters: [],
   copyallCharacters: [],
   filterGameDB:[],
   filterGameAPI:[],
   filterGameGener:[],
   GamesDB:[],
   GamesAPI:[],
   ban:1,
   filter: 0,
   errors: {},
   change: true
}
export default function reducer(state = initialState, { type, payload }) {
   
   switch (type) {

       case AUTO_FILTER: {
           return {
               ...state,
               allCharacters: payload,
               copyallCharacters:payload,
               errors: {},
               change:!state.change
           }
       }
       case GAME_DB: {
           return {
               ...state,
               GamesDB: payload,
               errors: {},
               change:!state.change
           }
       }
       case GAME_API: {
           return {
               ...state,
               GamesAPI: payload,
               errors: {},
               change:!state.change
           }
       }
       case FILTER_NAME: {
           
           if (state.ban === 2) {
               return {
                   ...state,
                   GamesDB: payload,
                   errors: {},
                   change:!state.change
               }
           }else{
               if (state.ban === 3) {
                   return {
                       ...state,
                       GamesAPI: payload,
                       errors: {},
                       change:!state.change
                   }
               }else{
                   return {
                       ...state,
                       allCharacters: payload,
                       errors: {},
                       change:!state.change
                   }
               }
           }
       }
       case CAMBIO: {
           return {
               ...state,
               filter:0,
               ban: payload,
               errors: {},
               change:!state.change
           }
       }
       case FILTER_STATUS: {
           return ({
               ...state,
               filter: payload,
               change:!state.change
           })
       }
       case FILTER: { //? POR NOMBRE ASCEN DESEN
           //filterGameDB
           let copyfilter = []
           if(state.ban===1)copyfilter = [...state.allCharacters]
           if(state.ban===2)copyfilter = [...state.GamesDB]
           if(state.ban===3)copyfilter = [...state.GamesAPI]
           if(state.filter===1)copyfilter = [...state.filterGameGener]
           const orderfilter = copyfilter.sort((a,b)=>{
               if (payload === "ascendente" ) {
                   if ( a.name < b.name) {  
                       return -1
                   }else{
                       return 1
                   }
                  
               }

               if (payload === "descendente" ) {
                   if ( a.name > b.name) {

                       return -1
                   }else{
                       return 1
                   }
                 
               }
              return null 
           })
           if (state.filter === 1) {
               return {
                   ...state,
                   filterGameGener: orderfilter,
                   errors: {},
                   change:!state.change
               } 
           }
           
           
           if (state.ban===1) {
               return {
                   ...state,
                   allCharacters: orderfilter,
                   errors: {},
                   change:!state.change
               }
           }else{
               if (state.ban===2) {
                   return {
                       ...state,
                       GamesDB: orderfilter,
                       errors: {},
                       change:!state.change
                   }
               }else{
                   if (state.ban===3) {
                       return {
                           ...state,
                           GamesAPI: orderfilter,
                           errors: {},
                           change:!state.change
                       }
                   }
               }
               
           }
       } break
       case FILTER_RATING: {

           let copyfilter = []
           if(state.ban===1)copyfilter = [...state.allCharacters]
           if(state.ban===2)copyfilter = [...state.GamesDB]
           if(state.ban===3)copyfilter = [...state.GamesAPI]
           if(state.filter===1)copyfilter = [...state.filterGameGener]
           const orderfilter = copyfilter.sort((a,b)=>{
               if (payload === "ascendente" ) {
                   if ( a.rating < b.rating) {  
                       return -1
                   }else{
                       return 1
                   }
                  
               }
              
               if (payload === "descendente" ) {
                   if ( a.rating > b.rating) {

                       return -1
                   }else{
                       return 1
                   }
                 
               }
               return null
           })
           if (state.filter === 1) {
               return {
                   ...state,
                   filterGameGener: orderfilter,
                   errors: {},
                   change:!state.change
               }         
           }
           
           if (state.ban===1) {
               return {
                   ...state,
                   allCharacters: orderfilter,
                   errors: {},
                   change:!state.change
               }
           }else{
               if (state.ban===2) {
                   return {
                       ...state,
                       GamesDB: orderfilter,
                       errors: {},
                       change:!state.change
                   }
               }else{
                   if (state.ban===3) {
                       return {
                           ...state,
                           GamesAPI: orderfilter,
                           errors: {},
                           change:!state.change
                       }
                   }
               }
               
           }
         
       }
           
       break

       case FILTER_GENRE: {
          
;let copyfilter = []
if(state.ban===1)copyfilter = [...state.allCharacters]
if(state.ban===2)copyfilter = [...state.GamesDB]
if(state.ban===3)copyfilter = [...state.GamesAPI]
if ("ordenar generos" ===payload) {
   return {
       ...state,
       filterGameGener:copyfilter,
       filter : 0,
       errors: {},
       change:!state.change
   }
}
            const orderfilter = copyfilter.filter(gen =>{
               for (const iterator of gen.genres) {
                       if (iterator === payload) {
                           return gen
                           
                       }
                      }
                      return null
           })

         
           
           if (state.ban===1 && state.filter === 1) {
               return {
                   ...state,
                   filterGameGener: orderfilter,
                   allCharacters: orderfilter,
                   errors: {},
                   change:!state.change
               }
           }else{
               if (state.ban===2 && state.filter === 1) {
                   return {
                       ...state,
                       filterGameGener: orderfilter,
                       GamesDB: orderfilter,
                       errors: {},
                       change:!state.change
                   }
               }else{
                   if (state.ban===3 && state.filter === 1) {
                       return {
                           ...state,
                           filterGameGener: orderfilter,
                           GamesAPI: orderfilter,
                           errors: {},
                           change:!state.change
                       }
                   }
               }
               
           }


           // return {
           //     ...state,
           //     filterGameGener:orderfilter,
           //     filter : state.filter,
           //     errors: {},
           //     change:!state.change
           // }
       
          
       }
       break
       case ERROR: {
           return {
               ...state,
               errors: payload,
               change:!state.change
           }
       }
       default: {
           return { ...state }
       }
   }
   
};



