import React,{useEffect} from 'react';
import { useHttps } from '../hook/useHttps';
import './Style/newslist.css';
import { useDispatch,useSelector } from 'react-redux';
import Spinner from './Spinner';
import { filterFetched,filterFetcherror,filtersFetch_ing ,activefiltrr} from '../redux/action';
import Errro from './Errro';
import classNames from 'classnames';


function NewsFilter(props) {

  const {filters,filterLoadingStatus,activeFilter}= useSelector(state=>state);

  const dispatch = useDispatch();
  const request = useHttps();
  


  useEffect(()=>{
dispatch(filtersFetch_ing());
request("http://localhost:3001/filter")
      .then(data => dispatch(filterFetched(data)))
      .catch(err => filterFetcherror(err))

      //eslint-disable-next-line
  },[])

if (filterLoadingStatus === 'loading'){
  return <Spinner/>
}else if (filterLoadingStatus ==='error'){
  return <Errro/>
}

const renderFilter = (arr)=>{
  if(arr.length === 0){
    return <h5 className="text-center mt-5">Filters doesn't be found</h5>
  }

  return arr.map(({name,className,label})=>{
    const btnClasses = classNames('btn',className,{
      'active': name === activeFilter
    }
    )
    return <button 
    key={name}
     id={name } 
     className={btnClasses}
     onClick={()=> dispatch(activefiltrr(name))}
    > {label}</button>
  })
}
const element = renderFilter(filters);

    return (
        <div className="card shadow-lg  marg">
          <div className="card-body opac ">
            <p className='card-text'>fileer</p>
            <div className='btn-group ml-4'>
             {element}
            </div>

          </div>
          
        </div>
    );
}

export default NewsFilter;