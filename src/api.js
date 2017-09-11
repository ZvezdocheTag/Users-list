import { v4 } from 'node-uuid'

const fakeData = {
    users: [
        {
            id: v4(),
            name: "data"
        },
        {
            id: v4(),
            name: "jora"
        },
        {
            id: v4(),
            name: "jija"
        },
    ]
}

const delay = (ms) => 
    new Promise(resolve => setTimeout(resolve, ms))


export const fetchUsers = (filter) => {
    delay(500).then(() => {
        return fakeData.users;
    })
}