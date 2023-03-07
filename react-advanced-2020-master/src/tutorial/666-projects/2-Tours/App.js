import React, {useState, useEffect} from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';
function App() { // setting up the loading usestate and the tours that will be fetched and then passed to the COMPONENT
const [loading, setLoading] = useState(true);
const [tours, setTours] = useState([]);
//the remover button that will be passed
const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
};


// setting up the function that will fetch the array from the url.
const fetchTours = async () => {
    setLoading(true);
    try {
        const response = await fetch(url);
        const tours = await response.json();
        setLoading(false);
        setTours(tours);
    } catch (error) {
        setLoading(false)
        alert('error')

    }

};
// calling the fetch function through useffect only at the first render.
useEffect(() => {
    fetchTours()
}, [])
//
if (loading) {
    return <main>
        <Loading></Loading>
    </main>
};
// to check after deleting to refresh
if (tours.length === 0) {
    return (
    <main>
        <div className='title'>
        <h2>No more tours</h2>
        <button className='btn' onClick={()=>fetchTours()}>Refresh</button>
        </div>
    </main>
    
   )
}
// if loading is false then return this and pass the TOURS that we fetched as an 'tours' variable that we will use
return <main>
    <Tours tours={tours} removeTour={removeTour}/>
</main>}export default App
