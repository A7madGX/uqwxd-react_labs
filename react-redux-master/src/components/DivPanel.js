import React from 'react'
import { useSelector } from 'react-redux';

const DivPanel = () =>{
    let incValue = useSelector(state => state.Increments)
    let decValue = useSelector(state => state.Decrements)
    return (
        <>
        <div>
            The present value of counter is {incValue}
        </div>
        <div>
            The present value of counter is {decValue}
        </div>
        </>
    );
}

export default DivPanel;
