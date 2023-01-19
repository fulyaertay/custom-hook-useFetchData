
import './index.css';
import useFetchData from './my_hook/custom_hook';
import Axios from "axios"
import React,{useEffect} from 'react';
function App() {
  const [todoFetch, _todoFetch]=useFetchData()
  async function onGetTodo(){
    try {
      _todoFetch.onLoading()
      const data=await Axios.get("https://jsonplaceholder.typicode.com/todos/1").then(response=>response.data)
      _todoFetch.onSuccess(data)
      
    } catch (error) {
      _todoFetch.onError("Fetching is fail!")
      
    }
  }
  useEffect(()=>{
    onGetTodo()
    

  },[])

  return (
    <div className="App">
      <h1 className='text-center text-2xl mt-5'>Custom Hooks-Fetch Data</h1>
      <div className='text-center text-xl'>Status: {todoFetch.status}</div>
      {todoFetch.status==="success" && <div className='text-center text-xl'>Todo: {todoFetch.data.title}</div>}
      {todoFetch.status==="loading" && <div className='text-center text-xl'>Todo: Loading</div>}
      {todoFetch.status==="error" && <div className='text-center text-xl'>Todo: {todoFetch.error}</div>}
    </div>
  );
}

export default App;
