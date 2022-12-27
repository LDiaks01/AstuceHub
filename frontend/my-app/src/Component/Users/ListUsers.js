import React, { useState } from 'react'
import ItemUsers from './ItemUsers';


const ListUsers = () => {
    const usersData = [
        {id: 1,
        nom: 'Diallo', 
        prenom: 'Amadou', 
        pseudo: 'Tad', 
        email:'tad@gmail.com', 
        photo:'https://images.unsplash.com/photo-1509043759401-136742328bb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
        },
        {id: 2,
        nom: 'Camara', 
        prenom: 'Boy', 
        pseudo: 'Bob', 
        email:'camara@gmail.com', 
        photo:'https://images.unsplash.com/photo-1509043759401-136742328bb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
        },
        {id: 3,
        nom: 'Sow', 
        prenom: 'Mouctar', 
        pseudo: 'Mouc', 
        email:'mouctar@gmail.com', 
        photo:'https://images.unsplash.com/photo-1509043759401-136742328bb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
        },
    
    ]
    const [ users, setUsers ] = useState(usersData)
    return(
        <ItemUsers users={users}/>
    )
        
}

export default ListUsers;