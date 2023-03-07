import React, {useState} from 'react';
import people from './data';
import './index.css'
// import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(1);
  const {name, image, job, text} = people[index]


const randomize = () => {
  let newVar = Math.random() * 4 | 0;
  console.log(index)
  if (newVar===index){
    return randomize()
  } 
  else{
    return(
      setIndex(newVar)
    )
      
  }
    
  
}


 const minus = () => {
    if(index <=0 ){
      setIndex(3)
      
    }
    else{
      setIndex(index - 1)
      
    }
  };
  const plus = () => {
    if(index < 3){
      setIndex(index + 1)
      
    }
    else{
      setIndex(0)
      
     
    }
  }

    return <div className='review'>
      <div className='img-container'>
        <img src={image} alt='name' className='person-img'></img>
        <div className='name'><h2 >{name}</h2></div>
        
      </div>
      
        
        <div className='button-container'>
            <button className='prev-btn' onClick={()=>minus()}>
                <img src='https://cdn-icons-png.flaticon.com/512/9412/9412482.png' className='icon'/>
            </button>
            <button className='next-btn' onClick={()=> plus()}>
            <img src='https://cdn-icons-png.flaticon.com/512/9412/9412482.png' className='icon-rotate'/>
            </button>
        </div>
        <h3 className='job'>{job}</h3>
        <p className='quote'>{text}</p>
       
        <button className='random-btn' onClick={()=>randomize()}>
            surprise me!
        </button>

    </div>
};

export default Review;
