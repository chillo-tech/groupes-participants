import React from 'react'

function UsersGroups({guestsByJob}) {
  
  const [handledUsers, setHandledUsers] = React.useState([]);
  const [groups, setGroups] = React.useState(
    {
      "kronenburg": [],
      "1664": [],
      "Leffe": [],
      "Grimbergen": [],
      "Guinness": [],
      "Affligem": [],
      "Chouffle": [],
      "Delirium": [],
      "Kwak": [],
      "Karmeliet": []
    }
  )
  const updateGroups = React.useCallback(
    (users) => {
      users
      .filter(userToHandle => {
        const userToHandleIndex = handledUsers.findIndex( handledUser => handledUser.nom === userToHandle.nom &&  handledUser.prenom === userToHandle.prenom);
        return userToHandleIndex === -1
      })
      .forEach(user => {
        setHandledUsers((cState) =>[...cState, user]);
      })
      console.log('====================================');
      console.log({users, handledUsers});
      console.log('====================================');
    },[handledUsers])
  
  React.useEffect(() => {
    Object.entries(guestsByJob).forEach(([job, users]) => { 
      updateGroups(users);
    })
  }, [guestsByJob, updateGroups])
  return (
    <div className='grid grid-cols-5 mx-2 py-3'>
      {Object.keys(groups)
        .sort(function(a, b){
            if(a < b) { return -1; }
            if(a > b) { return 1; }
            return 0;
        }).map((beer) => (
          <div className='bg-slate-300 mx-2 my-1 font-light text-sm text-slate-800 rounded-md' key={beer}>
            <h3 className='bg-blue-600 text-center px-2 py-2 rounded-t-md text-white text-xl font-extralight'>{beer}</h3>
            {
              groups[beer].map(user => (
                <p className='px-3 pb-1' key={user.id}>
                  <span className='mr-1'>[{user.job}]</span>
                  <span className='mr-1'>{user.prenom}</span> 
                  <span className='mr-1'>{user.nom}</span>  
                </p>
              ))
            }
          </div>
        ))
      }
    </div>
  )
}

export default UsersGroups;
