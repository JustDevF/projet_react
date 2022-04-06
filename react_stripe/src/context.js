import React, { useState, useContext } from 'react';
import sublinks from './data';

//création de context
const AppContext = React.createContext();

//Composant de context

export const AppProvider = ({children}) => {
    //Etat des composants
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [location, setLocation] = useState({});
    const [page, setPage] = useState({page: '', links:[]});

    //FGE
    const openSidebar = () => {
        setIsSidebarOpen(true);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }
     
    const openSubmenu = (text, cordinates)  => {
        //récup la page qui correspond à la page démandée 
        const pagee = sublinks.find((link) => link.page === text);
       
        //Mag de state 
        setPage(pagee);
        setLocation(cordinates);
        setIsSubmenuOpen(true);
    }

    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    }


    return ( 
        <AppContext.Provider value={{
            isSidebarOpen,
            openSidebar,
            closeSidebar,
            isSubmenuOpen,
            openSubmenu,
            closeSubmenu,
            location,
            page
        }}>
            {children}
        </AppContext.Provider>
     );
}

//custom hook

export const useGlobalContext = () => {
    return useContext(AppContext);
}