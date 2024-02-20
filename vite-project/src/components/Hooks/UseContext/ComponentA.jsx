import { useContext } from "react"
import { MyContext } from "./useContextComponent";
function ComponentA(){
    const contextValue = useContext(MyContext)
    return <div>Component A : {contextValue}</div>
}
export default ComponentA;