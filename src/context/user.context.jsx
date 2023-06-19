import { createContext,useState, useEffect, useReducer } from "react";
import { onAuthChangedListener,createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

//Actual value want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: ()=> null,
});

// const userReducer = (state,action)=>{
//     const {type,payload} = action;
//     switch(type){
//         case 'SET_CURRENT_USER':
//             return{
//                 currentUser: payload
//             }
//         default:
//             throw new Error(`Unhandled type ${type} in userReducer`);
//     }
// }

export const UserProvider = ({children}) =>{
    const [currentUser,setCurrentUser] = useState(null);
    const value = {currentUser,setCurrentUser};
    useEffect(() => {
        const unsubscribe = onAuthChangedListener(async (user)=>{
            if(user){
                await createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });
        return unsubscribe;
    }, []);
    
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}