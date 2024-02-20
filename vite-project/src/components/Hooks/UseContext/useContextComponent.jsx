import React,{ createContext } from "react";

import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";


export const MyContext = createContext('default')


function UseContextApp(){
    return(
        <MyContext.Provider value="Hello from context">
            <ComponentA/>
            <ComponentB/>
        </MyContext.Provider>
    )
}
export default UseContextApp;