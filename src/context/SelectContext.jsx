import { createContext, useState } from "react";

export const SelectContext = createContext();

export const SelectContextProvider = ({children}) => {
    const [selectOption, setSelectOption] = useState('topics');

    const contextValue = {
        selectOption,
        setSelectOption
    }
    return (
        <SelectContext.Provider value={contextValue}>
          {children}
        </SelectContext.Provider>
      );
}