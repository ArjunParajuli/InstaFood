import { useEffect, useState } from 'react'
import { swiggy_api_url } from "../data";

const useListOfRestaurant = () =>{
    const [listOfRestro, setListOfRestro] = useState([]);
    const [filteredRestro, setFilteredRestro] = useState([]);
    const [searchTxt, setSearchTxt] = useState("");
    const [loading, setLoading] = useState(false);    

    // API call
    const fetchData = async() =>{
      setLoading(true);
      const result = await fetch(swiggy_api_url);
      const fetchedData = await result.json();
      const fetchedRestros = fetchedData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setListOfRestro(fetchedRestros);
      setFilteredRestro(fetchedRestros);
      setLoading(false);
    }
 
    useEffect(()=>{
        fetchData();
      }, [])

      return {listOfRestro, filteredRestro, setFilteredRestro, searchTxt, setSearchTxt, loading}

}

export default useListOfRestaurant;