import { createContext } from 'react'

const UserContext = createContext({
    LoggedInUSer : "Default",
})

export default UserContext;