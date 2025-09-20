import { createContext, useEffect, useState } from "react";
import { getAllCategories } from "../service/CategoryService";

export const AppContext = createContext(null);

export const AppContextProvider = (props) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function loadData() {
            const res = await getAllCategories();
            setCategories(res.data);
        }
        loadData();
    }, []);

    const contextValue = {
        categories,
        setCategories,
    }

    return (
        <AppContext.Provider value={contextValue}>
            {props.children}
        </AppContext.Provider>
    );
};