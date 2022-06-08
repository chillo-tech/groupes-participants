
import React,{ useEffect, useState } from 'react';
import './App.css';
import Groups from './Groups';
import UsersGroups from './UsersGroups';
import Tags from './Tags';

function App() {
  const [guests, setGuests] = useState([]);
  const [guestsByJob, setGuestsByJobs] = useState({});
  const [jobs, setJobs] = useState([]);
  var groupBy = function(users, key) {
    return users.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };
  
  const getUsers = async() => {
    try {
      const response = await fetch(
        'data/people.json',
        {
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
      );
      
      const data = await response.json();
      const mappedData = data.map(entry => {
        const job = `${entry.job.toLowerCase().replaceAll(' ', '-')}`;
        const id = `${new Date().getTime()}-${entry.nom.toLowerCase().replaceAll(' ', '-')}-${job}`;
        return {...entry, id, job}
      })
      
      setGuests(mappedData);
      const groupedGuest = groupBy(mappedData, 'job');
      setGuestsByJobs(groupedGuest);
      setJobs(Object.keys(groupedGuest));
    } catch (error) {
      
      console.log({error}); 
    }
  }
  useEffect(() => {
     getUsers()

  }, [])
  return (
    <section className='bg-blue-900 min-h-screen p-2 text-white flex flex-col'>
      <div className='border-b border-b-slate-300 py-3 flex items-end w-100 justify-end'>
        <button className='border border-slate-300 p-3 rounded-md'>Nouvelle repartition ({guests.length})</button>
      </div>
      <Tags guestsByJob={guestsByJob}/>
      {/*<Groups guestsByJob={guestsByJob}/>*/}
      <UsersGroups guestsByJob={guestsByJob}/>
    </section>
  );
}

export default App;
