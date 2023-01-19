import { useState } from "react";

const initialValueFetch={
    data:null,
    status:null,
    error:null
}

export default function useFetchData(){
    const [fetchData,setFetchData]=useState(initialValueFetch);
    //when loading
    function onLoading(){
        setFetchData(
           { ...initialValueFetch, 
            status:"loading"
           }
        )
    }
    //if error, when fetching data
    function onError(error){
        setFetchData(
           { ...initialValueFetch, 
            status:"error",
            error:error
           }
        )
    }
    //fetching datas
    function onSuccess(data){
        setFetchData(
           { ...initialValueFetch, 
            status:"success",
            data:data
           }
        )
    }
}