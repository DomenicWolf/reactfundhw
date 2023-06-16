import {useEffect, useState} from 'react';
import axios from 'axios';

const useAxios = (url) => {
    const [response,setResponse] = useState([]);
   
    const addItem = async (extention=null) => {
        console.log(typeof(extention))
        let res;
        if(typeof(extention) === 'object'){
            console.log('yes')
            extention=null
            res = await axios.get(url);
        }else {
           res = await axios.get(url+extention);
        }
        // if (extention){
        //     console.log('yes')
        //     const res = await axios.get(url+extention);
        // }
        // const res = await axios.get(url);
        console.log(url+extention)
        
        
        
        setResponse(r => [...r,res.data])
        console.log(response)
    }

    useEffect(() => {
        
        const fetchData = async () =>{
            try {
                const res = await axios.get(url);
                setResponse(r => [...r,res])
            }
            catch(e){
                
            }
        
        fetchData()
        }
    },[])

    
    return [response,addItem]
}

export default useAxios;                                                                                                   