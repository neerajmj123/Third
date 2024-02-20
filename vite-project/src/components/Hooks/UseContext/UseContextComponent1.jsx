import React, { createContext, useContext, useState } from "react"
import ThemedComponent from "./ThemedComponent";
import ThemeSelector from "./ThemeSelector";
export const ThemeContext = createContext();

function UseContextComponent1() {
    const [theme, setTheme] = useState('white')
    const contextValue = { theme, setTheme }

    return (
        <ThemeContext.Provider value={contextValue}>
            <ThemedComponent />
            <ThemeSelector />
        </ThemeContext.Provider>
    )
}
export default UseContextComponent1;