// React se necessary functions ko import karte hain
import axios from "axios";
import { createContext, useEffect, useState } from "react";
// Food items ki list ko import karte hain assets folder se
// import { food_list } from '../assets/assets';

// Ek naya context create karte hain jiska initial value null hai
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  // State define karte hain jisme cart items store honge
  const [cartItems, setCartItems] = useState({});
  const url = "http://localhost:4002";
  const [token, setToken] = useState("");
  const [food_list,setFoodList]=useState([])
  // Function jo item ko cart mein add karega
  const addToCart = async(itemId) => {
    // Agar item pehle se cart mein nahi hai toh usse add karte hain aur quantity 1 set karte hain
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } 
    // Agar item pehle se cart mein hai toh uski quantity increase karte hain
    else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if (token) {
      await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
    }
  };

  // Function jo item ko cart se remove karega
  const removeFromCart = async(itemId) => {
    setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1}));
    if (token) {
      await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
    }
  };
  const getTotalCartAmount=()=>{
    let totalAmount = 0;
    for(const item in cartItems)
    {
      if (cartItems[item]>0){
        let itemInfo = food_list.find((product)=>product._id===item);
        totalAmount += itemInfo.price*cartItems[item];
      }
    }
    return totalAmount;
  }
  const fetchFoodList=async()=>{
    const response = await axios.get(url + "/api/food/list");
    setFoodList(response.data.data)
  }

  const loadCartData = async(token)=>{
    const response = await axios.post(url+"/api/cart/get",{},{headers:{token}});
    setCartItems(response.data.cartData)
  }

  useEffect(()=>{
    async function loadData() {
      await fetchFoodList();
      if (localStorage.getItem("token")){
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token"))
      }
    }
    loadData();
  },[])

  // Context value define karte hain jo components ko provide ki jayegi
  const contextValue = {
    food_list,     // Food items ki list
    cartItems,     // Cart mein items ki current state
    setCartItems,  // Cart items set karne ka function
    addToCart,     // Cart mein item add karne ka function
    removeFromCart, // Cart se item remove karne ka function
    getTotalCartAmount,
    url,
    token,
    setToken


  };

  // useEffect hook jo cart items ko console mein log karta hai jab bhi unmein change hota hai
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  // Provider component jo context value ko children components ko provide karega
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
