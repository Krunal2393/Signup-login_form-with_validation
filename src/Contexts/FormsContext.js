import React, { createContext, useContext, useState } from 'react'


 const Datacontext= createContext();


export default function FormsContext({children}) {
    const[users,setUsers]= useState([])
    // here we declare blank object with variable name alldata and set that value//
   
    // const storeUser = (obj) => {
    //   console.log(users)
    //   const data = JSON.stringify({...users})
    //   const oldDAta = users
    //   console.log("----------->", data)
    //  localStorage.setItem('users',data )
    // // setUsers(prev => [...prev, obj])
    // }
      
  

  return (
    <div>
      <Datacontext.Provider
        value={{
          users,
          setUsers,
          
        }}
      >
        {children}
      </Datacontext.Provider>
    </div>
  );
}

export const useStateContext = () => useContext(Datacontext);