import { useEffect, useState } from "react";
import { MENU_URL } from '../data';
import { useParams } from 'react-router-dom';

const useRestaurantMenu = ()=>{
    const [resData, setResData] = useState(null)
    const { resId } = useParams(); 

        useEffect(()=>{
            fetchMenuData();
        }, [])
    
        async function fetchMenuData(){
            const result = await fetch(MENU_URL+resId)
            const response = await result.json();
            setResData(response.data);
            console.log(response.data)
        }
    
        return resData;
        
} 


export default useRestaurantMenu;