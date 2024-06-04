
const initialState = {
  news:[],
  newsLoadingStatus: "Rahmatulloh",
filters: [],
filterLoadingSatus:'raxmat',
activeFilter: 'all',
filteredNews: []
};















const reducer = (state = initialState,action)=>{

switch(action.type){
  case 'NEWS_FETCHING':
    return {
      ...state,
      newsLoadingStatus:'loading',

    }
    case 'NEWS_FETCHED':
      return {
        ...state,
        news:action.payload,
        filteredNews: state.activeFilter ==='all'? action.payload : action.payload.filter(s=> s.category === state.activeFilter),
        newsLoadingStatus:'Rahmatulloh',
      }
      case 'NEWS_FETCHING_ERROR':
        return{
          ...state,
          newsLoadingStatus:'error'
        }
      case 'NEWS_CREATED':
        const newsCreatNew = [...state.news, action.payload ]
        return {
          ...state,
          news:newsCreatNew,
          filteredNews : state.activeFilter === 'all' ? newsCreatNew : newsCreatNew.filter(s=> s.category === state.activeFilter) 
        }
      case 'FILTERFETCHING':
        return {
          ...state,
          filterLoadingSatus: 'loading',

        }
      case 'FILTERFETCHED':
        return{
          ...state,
          filters: action.payload,
          filterLoadingSatus: 'raxmat',

        }
      case 'FILTERS_FETCHING_ERROR':
        return{
          ...state,
          filterLoadingSatus:'error'
        }
      case 'ACTIVE_FILTER_CHANGED':
        return {
          ...state,
          activeFilterr: action.payload,
          filteredNews: action.payload === 'all'? state.news:state.news.filter(s=> s.category === action.payload)
        }
        case 'NEWS_DELETED':
          const newslist = state.news.filter(s => s.id !== action.payload);
          return {
            ...state,
            news : newslist,
            filteredNews: state.activeFilter === 'all' ? newslist : newslist.filter(s=> s.category === state.activeFilter)
          }
  default:
    return state

}
}
export default reducer;

// const initialState = {value:2,names:'rohmatulloh'};

//  const reducer = (state=initialState,action)=>{

//   switch(action.type){
//     case 'increment':
//       return {
//         ...state,
//         value: state.value + 4,
//       }
//     case 'decrement':
//       return {
//         ...state,
//         value: state.value - 1,
//       };
//     case 'random':
//       return  {
//         ...state,
//         value: state.value * action.payload,
//       };

//     default:
//       return state;
//   }

  
// };

// export default reducer