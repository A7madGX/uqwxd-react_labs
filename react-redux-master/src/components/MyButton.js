import React from 'react'
import { useDispatch} from 'react-redux';
import  { decrement,increment } from '../action'

const MyButton = ()=>{
    let dispatch = useDispatch();
    return (
        <>
            <button onClick={()=>dispatch(increment(1))}>Increase counter</button>
            <button onClick={()=>dispatch(decrement(1))}>Decrease counter</button>
        </>
    );
}

export default MyButton;
