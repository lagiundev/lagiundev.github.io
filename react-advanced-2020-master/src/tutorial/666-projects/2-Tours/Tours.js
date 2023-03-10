import React from 'react';
import Tour from './Tour';
const Tours = ({tours, removeTour}) => {
    return <section>
        <div className='title'> 
        <h1>TOURS LAGIUN</h1>
        <div className='underline'></div>
        </div>
        <div className='flexing'>
            {tours.map((tour)=> {
                return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>
            })}
        </div>



    </section>
  
};

export default Tours;