import {
  GET_COUNTRY,
} from "../actionTypes";

// Search - Country
export function searchcountry(value) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      // console.log(value);
      var name = value;
      // console.log("Query", name);
      fetch("https://restcountries.eu/rest/v2/name/" + name)
      .then(res => res.json())
      .then(
        (result) => {
        //  console.log(result);
         resolve(result);
         dispatch({
            type: GET_COUNTRY,
            payload: result,
         });
        },
        (error) => {
          console.log(error);
          reject(error);
          dispatch({
            type: GET_COUNTRY,
            payload: "404",
         });
        }
      )
    });
  };
}



// Get - all Country
export function getallcountry() {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      fetch("https://restcountries.eu/rest/v2/all")
      .then(res => res.json())
      .then(
        (result) => {
        //  console.log(result);
         resolve(result);
         dispatch({
            type: GET_COUNTRY,
            payload: result,
         });
        },
        (error) => {
          console.log(error);
          reject(error);
          dispatch({
            type: GET_COUNTRY,
            payload: "404",
         });
        }
      )
    });
  };
}