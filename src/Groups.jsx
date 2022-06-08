import React from 'react'

function Groups({guestsByJob}) {
  
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
  const updateHandledUsers =  React.useCallback((user) => {
    setHandledUsers([...handledUsers, user]);
  },[handledUsers])

  const isUserHandled = React.useCallback((user) => {
    const foundIndex = handledUsers.findIndex(entry => entry['nom'] === user['nom'] && entry['prenom'] === user['prenom']);
    return foundIndex > -1;
  },[handledUsers])
  const updateGroups = React.useCallback(
    (job) => {
      const users = guestsByJob[job];
      //console.log({job,users});
      
      users
        .forEach( (user, userIndex) => {
        const indexGroup = userIndex % Object.keys(groups).length
        const groupLabel = Object.keys(groups)[indexGroup];
        console.log({handledUsers, indexGroup});

        if(groupLabel && groups) {
          groups[groupLabel].push(user);
          setGroups({...groups, [groupLabel]: groups[groupLabel]});

          setHandledUsers(prevState => {

            return [
              ...prevState,
              user
            ];
          });
        }
      })
      
    },
    [groups, guestsByJob, handledUsers]
  )

  const updateGroupsBis =
    job => {
      const users = guestsByJob[job];
      const chunkSize = 10; //Math.min(users.length, 10);
      console.log({chunkSize, job, users});
      for (let i = 0; i < users.length; i += chunkSize) {
          const chunk = users.slice(i, i + chunkSize);
          chunk.forEach((u, index) => {
            const groupToUpdateLabel = Object.keys(groups)[index];
            const groupToUpdateValues = groups[groupToUpdateLabel];
            console.log('====================================');
            console.log({u, groupToUpdateLabel,groupToUpdateValues });
            console.log('====================================');
            updateHandledUsers(u);
            setGroups({...groups, [groupToUpdateLabel]: [...groupToUpdateValues, u]})
          })
      }
    }

  
  React.useEffect(() => {
        Object.keys(guestsByJob).forEach(job => { 
          //updateGroups(job);
          updateGroupsBis(job);
        })
  }, [guestsByJob])
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

export default Groups;
