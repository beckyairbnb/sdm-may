import React, { useContext} from "react"
import { navigate } from 'gatsby'
import avatarPic from "../assets/images/avatar.png"

import { GlobalDispatchContext, GlobalStateContext } from "../context/GlobalContext";
const FormHead = () => {
    const dispatch = useContext(GlobalDispatchContext)
    const state = useContext(GlobalStateContext)

    const handleSubmitRestart = () => {
        dispatch({
            type: 'RESET'
        });   
    }
    const handleSubmitBack = ()=>{
        dispatch({
            type: 'PREV_STEP',
            payload: 1,
        });
        return navigate(`/get-a-quote/${state.step}/`)
    }
    return(
        <div className="row justify-content-center text-center my-3 py-1 px-2"> 
            <div className="form-head col-md-12 col-sm-12 col-xl-11 col-lg-12 col-md-12 d-flex justify-content-between m-0 p-0">
                <div className="bg-white text-dark round-block d-flex justify-content-start align-items-center m-0 p-0">
                {state.step !== 1 && <button onClick={handleSubmitBack} className="bg-white border-0 text-end">Back</button>}
                </div>
                <div className="border border-dark rounded-circle bg-white text-dark round-block d-flex justify-content-center align-items-center">
                {/* <StaticImage src="../assets/images/oliver-pic.png" alt="Oliver Pic" className="w-100 rounded-circle"/> */}
                <img src={avatarPic} alt="Oliver Pic" className="w-100 rounded-circle"/>
                </div>
                <div className="bg-white text-dark round-block d-flex justify-content-end align-items-center m-0 p-0">
                {state.step !== 1 && <button onClick={handleSubmitRestart} className="bg-white border-0 text-end">Restart</button>}
                </div>
            </div> 
          </div>
    )
}

export default FormHead;