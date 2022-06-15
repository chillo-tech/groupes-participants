import React from 'react'

function UsersGroups({guestsByJob}) {
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

  const addUserToGrpup = React.useCallback((user, group) => {
    setGroups (
      (currentGroups) => {
        const handledUsers = [].concat.apply([], Object.values(currentGroups));
        const userToAddIndex = handledUsers.findIndex( handledUser => handledUser.nom === user.nom &&  handledUser.prenom === user.prenom);
        let groupToUpdate = group;
        const valuesToUpdate = currentGroups[groupToUpdate];
        if(valuesToUpdate.length >= 16) {
          const groupsToBeUpdated = Object.entries(currentGroups).filter(([, value]) => {
            return value.length < 15;
          }).map(([key]) => {
            return key;
          })
          groupToUpdate = groupsToBeUpdated[0];
        }
        return groupToUpdate && userToAddIndex === -1  ? {
          ...currentGroups,
          [groupToUpdate]: [...currentGroups[groupToUpdate], user]
        }: currentGroups
      }
    )
  }, [])
  const handleGuests = React.useCallback(
    (users) => {
      const groupsLabels = Object.keys(groups);
      const usersTohandle = users.slice(0);
      for (let i = 0; i <  usersTohandle.length ; i += 1) {
        const user = usersTohandle[i];
        const indexGroup = i % Object.keys(groupsLabels).length
        const group = groupsLabels[indexGroup]
        addUserToGrpup(user, group);
      }
        Object.keys(groups).forEach(group => {
          users.slice(0,3)
          .forEach(user => {
           // addUserToGrpup(user, group);
          });
      })
    },[groups])
  
  React.useEffect(() => {
    Object.keys(guestsByJob).forEach((job) => { 
        handleGuests(guestsByJob[job]);
    })
  }, [guestsByJob, handleGuests])
  return (
    <div className='grid grid-cols-4 mx-2 py-3'>
      {Object.keys(groups)
        .sort(function(a, b){
            if(a < b) { return -1; }
            if(a > b) { return 1; }
            return 0;
        }).map((beer) => (
          <div className='bg-slate-300 mx-2 my-1 font-light text-sm text-slate-800 rounded-md' key={beer}>
            <h3 className='bg-blue-600 text-center px-2 py-1 rounded-t-md text-white font-extralight flex items-end justify-between'>
              <span>{beer}</span>
              <span className='bg-slate-300 rounded-full mx-1 px-2 font-light text-xs text-slate-800'>
                <span>{groups[beer].length}</span>
               </span>
            </h3>
            {
              groups[beer].map(user => (
                <p className='px-3 py-1 text-xs' key={user.id}>
                  <span className='mr-1 uppercase'>[{user.job}]</span>
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
