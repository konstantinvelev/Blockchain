import { createContext, useState } from 'react'

export const ConfigContext = createContext();
export const ConfigProvider = ({ children }) => {

    const [configState, setConfigState] = useState();

    const setConfig = (data) => {
        setConfigState(data);
    }

    return (
        <ConfigContext.Provider value={{ configState, setConfig }}>
            {children}
        </ConfigContext.Provider>
    )
};