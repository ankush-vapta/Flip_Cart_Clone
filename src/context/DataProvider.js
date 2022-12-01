import { useContext, createContext, useState } from "react";

export const DataContext = createContext(null);



function DataProvider({ children }) {


    const [account, setAccount] = useState({ name: "", username: "" })

    return (
        <DataContext.Provider value={{
            account,
            setAccount
        }}>
            {children}
           
        </DataContext.Provider>
    )
}
export default DataProvider;




/*
context api basic
import { useContext, createContext, useState } from "react";

export const DataContext = createContext(null)

function DataProvider() {
    return (
        <DataContext.Provider value={{

        }}>
        </DataContext.Provider>
    )
}
export default DataProvider
}*/