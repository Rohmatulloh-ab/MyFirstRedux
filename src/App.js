import React from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import NewsAddForm from './components/NewsAddForm';
import NewsFilter from './components/NewsFilter';



function App() {
    return (
        <div className='app'>
        <Navbar/> 
        <div className='content'>
            

            <News  />
            
        <div className='content__page'>
             <NewsAddForm/>
             <NewsFilter/>
        </div>
            </div> 

        </div>
    );
}

export default App;