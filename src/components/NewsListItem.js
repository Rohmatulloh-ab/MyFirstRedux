import React from 'react';
import './Style/newslist.css';

function NewsListItem({name,description,category,onDelete}) {
    let elemClassname;
    console.log(description);
    switch(category){
        case "hotnews":
            elemClassname = 'bg-danger bg-gradient'
            break
            case "sportnews":
                elemClassname = 'bg-primary bg-gradient'
                break
                case "worldnews":
                    elemClassname = 'bg-secondary bg-gradient '
                    break
                    
            default:
                elemClassname ='bg-info bg-gradient'
    }
    return (
        <li className={`card flex-row shadow-lg text-white ${elemClassname} borradius my-2`}>
          
           <div className='card-body'>
            <h3 className='card-title'>{name}</h3>
            <p className='card-text text-light '>{description}</p>
           </div>
           <img 
          src={process.env.PUBLIC_URL +'/assets/bg.jpg'}
           alt='News im'
           className='img-fluid w-25 d-inline'
           />  
         <span className='position-absolute top-0 end-90 translate-middle badge border rounded-pill bg-light'>
            <button 
             onClick={onDelete}
             type = 'button' 
             className='btn-close '
            area-label= 'Close'
             ></button>
         </span>

           
          
        </li>
    );
}

export default NewsListItem;