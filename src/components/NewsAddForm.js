import React,{useState} from "react";
import { useHttps } from "../hook/useHttps";
import { useDispatch,useSelector } from "react-redux";
import {v4} from 'uuid';
import "./Style/newslist.css";
import { newCreated } from "../redux/action";

function NewsAddForm(props) {
  const [name,setName]=useState('');
const [description,setDescription]= useState('');
const [category,setCategory]= useState('');
const {newsloadingStatus,filters}=useSelector(state=>state);
const dispatch =useDispatch();
const request = useHttps();




const onSubmitHand =(e)=>{
e.preventDefault();
const newNews = {id:v4(),name,description,category};
request("http://localhost:3001/news","POST",JSON.stringify(newNews) )
.then(res=> console.log('success'))
.then(dispatch(newCreated(newNews)))
.catch(err=> console.log(err))

setName('')
setCategory('')
setDescription('')
}

const renderfil = (filters,status)=>{
  if(status === 'loading'){
    return <option>loading option</option>
  }else if (status === 'error'){
    <option>error option</option>
  }

  if (filters && filters.length > 0 ){
    // eslint-disable-next-line
    return filters.map(({name,label})=>{
      // eslint-disable-next-line
      if (name === 'all') return ;

      return <option
      key={name} value={name}
      
      >{label}</option>
    })
  }
}
  return (
    <form className="border p-2 shadow-lg rounded widen" onSubmit={onSubmitHand}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label fs-4">
          Name for new News
        </label>
        <input
          type="text"
          required
          name="name"
          placeholder="what is name of your news?"
          className="form-control"
          id="name"
          value={name}
          onChange={(e)=> setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="text" className="form-label fs-4">
          description
        </label>
        <textarea
          type="text"
          required
          name="text"
          placeholder="what is discription of your news?"
          className="form-control"
          id="text"
          style={{ height: "120px" }}
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          choose category of news
        </label>
        <select
         required className="form-select" 
         id="category" 
         name="category"
         value={category}
         onChange={(e)=>setCategory(e.target.value)}
         >
          
          <option >About news...</option>
          {renderfil(filters,newsloadingStatus)}
        </select>
      </div>
      <button type = 'submit'
      className='btn btn-info shadow-lg w-100'
      >create news</button>
    </form>
  );
}

export default NewsAddForm;
