import React, {useCallback, useState} from 'react'

const newRest = () => {
    const [users,setUsers] = useState([
        {id:1,value:"mobile1",name:"rakesh"},
        {id:2,value:"mobile2",name:"mobile"},
        {id:3,value:"mobile3",name:"name"},
        {id:4,value:"mobile4",name:"rakesh"},
        {id:5,value:"mobile5",name:"name"},
    ])

    const [filterUsers,setFilterUsers] = useState(users)

    const onHandleUsers = useCallback((filterType) => {
        if (filterType === "all"){
            setFilterUsers(users)
        }
        else {
           const result =  users.filter(each =>each.name === filterType)
           setFilterUsers(result)
        }
    },[users])


    return (
        <div>
            <label>Select the options</label>
            <select onChange={(e) => onHandleUsers(e.target.value)}>
                <option value="all">Select</option>
                <option value="mobile">Mobile</option>
                <option value="name">Name</option>
                <option value="rakesh">Rakesh</option>
            </select>

            <ul>
            {filterUsers.map(each =>
                <li key={each.id} value={each.value}>{each.name}</li>
            )}
            </ul>
        </div>

    )
}

export default newRest