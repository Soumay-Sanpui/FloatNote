import React, { createContext, useState } from "react";

const usr_Note_data = {
    d1: "This is a sample note! drag it to make it float and add new float note using + icon on top right.",
};

const NotesData = createContext();

const NotesDataProvider = ({ children }) => {
    const [current_Data, setCurrent_Data] = useState(usr_Note_data);

    return (
        <NotesData.Provider value={{ current_Data, setCurrent_Data }}>
            {children}
        </NotesData.Provider>
    );
};

export { NotesData, NotesDataProvider };
