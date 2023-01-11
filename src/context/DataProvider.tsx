import React, { createContext, useState } from 'react'


type IProductContext = [any, React.Dispatch<React.SetStateAction<any>>];
export const DataContext = createContext<any>(null);

/*
type DataContextType = any;
export const DataContext1 = React.createContext<DataContextType | null>(null);
*/

function DataProvider({ children }: any) {
    const [account, setAccount] = useState<any>("")
    setTimeout(() => {
        console.log("account from context =  ", account)
    }, 1000)
    return (
        <DataContext.Provider value={{
            account, setAccount
        }}>
            {children}

        </DataContext.Provider>
    )
}

export default DataProvider;