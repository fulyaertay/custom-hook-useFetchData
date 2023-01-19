
import './index.css';
import useFetchData from './my_hook/custom_hook';
import Axios from "axios"
function App() {
  const [todoFetch, _todoFetch]=useFetchData()
  async function onGetTodo(){
    try {
      _todoFetch.onLoading()
      const data=await Axios.get("https://jsonplaceholder.typicode.com/todos/1").then(response=>response.data)
      
    } catch (error) {
      
    }
  }
  return (
    <div className="App">
      <h1 className='text-center text-2xl mt-5'>Custom Hooks-Fetch Data</h1>
      <div className='text-center text-xl'>Status</div>
    </div>
  );
}

export default App;
