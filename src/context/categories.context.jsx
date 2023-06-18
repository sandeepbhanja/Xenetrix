import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments} from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
  categoriesMap:{},
});

export const CategoriesProvider = ({ children }) => {

  // useEffect(() =>{
  //   addCollectionAndDocuments('categories', SHOP_DATA);
  // },[]);

  useEffect(() => {
    const s = async ()=>{
      const categoryMap = await getCategoriesAndDocuments("categories");
      console.log(categoryMap);
      setCategoriesMap(categoryMap)
    }
    s();
  }, []);
  const [categoriesMap, setCategoriesMap] = useState({});
  const value = { categoriesMap, setCategoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
