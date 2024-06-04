import React, { useEffect ,useCallback} from 'react';
import Errro from './Errro';
import { newsFetching,newsFetched,newsFetchErr ,newsDeleted} from '../redux/action';
import {useHttps} from '../hook/useHttps';
import {useSelector,useDispatch} from 'react-redux';
import Spinner from './Spinner';
import NewsListItem from './NewsListItem';
import '../components/Style/newslist.css'



function News() {

    const {filteredNews,filterLoadingSatus}= useSelector(state =>state);
    const dispatch = useDispatch();
    const request= useHttps();
    console.log('useHttps hook returned:', request); // Add this line

    




    useEffect(()=>{
dispatch(newsFetching())
request("http://localhost:3001/news")
      .then(data => dispatch(newsFetched(data)))
      .catch(()=> dispatch(newsFetchErr()))
// eslint-disable-new-line 
    },
    []);
    // eslint-disable-new-line



const onDelete = useCallback((id)=>{

    request(`http://localhost:3001/news/${id}`,"DELETE")
    .then(data => console.log(data + 'deleted'))
    .then(dispatch(newsDeleted(id)))
    .catch(err => console.log(err))
// eslint-disable-next-line
},[])

    if(filterLoadingSatus === 'loading'){
        return <Spinner/>
    }else if (filterLoadingSatus === 'error'){
        return <Errro/>
    }


    const renderNews = (arr) =>{
        if(arr.length === 0){
            return <h4 className='btn btn-primary'>yangiliklar</h4>

        }
        return arr.map(({id, ...props}  
        )=>{
            return <NewsListItem 
            key = {id}
            onDelete = {()=> onDelete(id)}
             {...props} 
             /> }).reverse()
    };
    const element = renderNews(filteredNews)
    return (
        <ul >

            {element}
        </ul>
    )
    
}

export default News;