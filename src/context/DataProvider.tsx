import React, { createContext, useState } from 'react'


export const DataContext: any = createContext(" ");

type IProductContext = [any | undefined, React.Dispatch<React.SetStateAction<any | undefined>>];


function DataProvider({ children }: any) {
    const [account, setAccount] = useState<IProductContext | any>("")
    return (
        <DataContext.Provider value={{
            account: account, setAccount: setAccount
        }}>
            {children}

        </DataContext.Provider>
    )
}

export default DataProvider;