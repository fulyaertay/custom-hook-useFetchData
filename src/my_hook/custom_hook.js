import { useState } from "react";

const initialValueFetch={
    data:null,
    status:null,
    error:null
}

export default function useFetchData(){
    const [fetchData,setFetchData]=useState(initialValueFetch);
    
}