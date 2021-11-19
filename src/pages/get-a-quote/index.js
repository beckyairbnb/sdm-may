import React, { useEffect, useContext } from 'react'
import { navigate } from 'gatsby'

import { GlobalDispatchContext, GlobalStateContext } from "../../context/GlobalContext";



const GetAQuote = () => {
    const dispatch = useContext(GlobalDispatchContext)
    const state = useContext(GlobalStateContext)
    //navigate('/get-a-quote/1/');
    return(
        <h2>Loading</h2>
    )
}
export default GetAQuote;
