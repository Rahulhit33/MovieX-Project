import axios from "axios";

const BASE_URL ="https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTUzOGFlYTk0YWIzZGMwNDk3MDNjMjBkYzcwNjA5ZCIsInN1YiI6IjY1YjFlZGM2OTI0Y2U1MDE4NDJmNzBhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R_F8Sc6D6liGIL1sfRoUEhwo3MFH3kPxChx1lraS1eE" 

const headers ={
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async(url,params)=>{
     try{
        const{data}=await axios.get(BASE_URL + url,{
            headers,
            params
        })
        return data;

     }catch(err){
        console.log(err);
        return err;
     }
}
