import {useState, useEffect  } from "react";
import Card from "./Card"
import TextField from '@mui/material/TextField';
import { data } from "autoprefixer";
import axios from "axios";



import React from 'react'

function Gym() {
    const [data, setData] = useState([]);
    const [content, setContent] = useState([]);
    const [dataIncrease, setDataIncrease] = useState(12);

    async function fetchAPI(){
        const options = {
            method: "GET",
            url: "https://exercisedb.p.rapidapi.com/exercises",
            params: { limit: dataIncrease },
            headers: {
                'x-rapidapi-key': 'e806a6f38cmsh3be995132d4f327p1cf72fjsn2908cf23eec5',
                'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
            }
          };
    
          try {
            const response = await axios.request(options);
            setData(response.data);
            setContent(response.data);
          } catch (error) {
            console.error(error);
          }
        };
    

    useEffect(()=>{
        fetchAPI()
       },[dataIncrease])

    const handleChange = (query)=>{
      if(query == ''){
        setData(content);
      }else{
        let copyFilterData = [...data];
        let newFilterData = copyFilterData.filter((data,index)=>{
            return data.name.includes(query)
        })

        setData(newFilterData)
      }
    }
  return (
    <>
     <div className="m-3 mt-14">
      <h1 className="text-3xl font-semibold sm:text-center">Exercise List</h1>

      <div className="mt-4 mb-6 text-center ">

         <TextField id="outlined-basic" style={{width:"50%"}} label="Search" variant="outlined" onChange={(e)=>{handleChange(e.target.value)}}/>
      </div>

      {data.length > 0 ? (
        <div className="w-full flex items-center gap-4 flex-wrap mt-4 justify-center md:gap-6">
          {data.map((e, i) => {
          
            return (
              <Card
                key={e.id}
                image={e.gifUrl}
                name={e.name}
                bodyPart={e.bodyPart}
                target={e.target}
              />
            );
          })}{" "}
        </div>
      ) : (
        <h2 className="text-center">Data Not Found</h2>
      )}

      <div className="mt-8 pb-10 flex justify-center items-center ">
        <button
          className="px-6 py-2 bg-blue-800 rounded-lg text-white"
          onClick={() => setDataIncrease(dataIncrease + 10)}
        >
          Show More
        </button>
      </div>
    </div>
    </>
  )
}

export default Gym