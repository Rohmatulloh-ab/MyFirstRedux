
export const newsFetching = ()=>({
    type:'NEWS_FETCHING',
    
});
export const newsFetched = (news)=>({
    type:'NEWS_FETCHED',
    payload: news,
});
export const newsFetchErr = ()=>({
    type:'NEWS_FETCHING_ERROR',

});
export const newCreated= (news)=>{
    return{
        type:"NEWS_CREATED",
        payload:news
    }
}

export const filtersFetch_ing = ()=>{
    return {
        type: 'FILTERFETCHING',
        
    }
}

export const filterFetched = (filters)=>{
    return{
        type: 'FILTERFETCHED',
        payload: filters,
    }
}
export const filterFetcherror = ()=>{
    return{
        type: 'FILTERS_FETCHING_ERROR',
        
    }
}
export const activefiltrr = (arr)=>{
    return{
        type: 'ACTIVE_FILTER_CHANGED',
        payload:arr,
        
    }
}

export const newsDeleted =(id)=>{
    return {
        type: 'NEWS_DELETED',
        payload: id

    }
}



















// export const incr = ()=>({type:'increment'});
// export const decr = ()=>({type: 'decrement'});
// export const random =()=>({type: 'random',payload:Math.floor(Math.random()*10)});