import { useContext, createContext } from "react";

const userContext = createContext({
    userName: "Default User",
})

export default userContext