import { createContext, useContext } from "react";

export const OfficeContext = createContext(
    {
        Office:[
            {
                id: Number,
                name: '',
                loggedIn: false, 
                time: ''
                
            }
        ],
        addEmployee:(id , name)=>{},
        removeEmployee:(id)=>{}
    }
)

export const OfficeContextProvider = OfficeContext.Provider

export  function useOffice(){
    
    return useContext(OfficeContext)
}