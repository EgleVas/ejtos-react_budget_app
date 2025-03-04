import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';

const Currency = () => {
    const {dispatch} = useContext(AppContext);

    const changeCurrency = (val)=>{
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        })
    }

    return (
        <div className='alert alert-success' >
            <label style={{backgroundColor:'#d1e7dd', color:'white'}}>Currency
                <select name='hover_color' id="currency" onChange={(event)=>changeCurrency(event.target.value)} style={{ marginLeft: '2rem' , backgroundColor:'#d1e7dd', color:'white', borderColor: '#d1e7dd'}}>
                    <option style={{color:'black'}} value="£">£ Pound</option>
                    <option style={{color:'black'}} value="$">$ Dollar</option>
                    <option style={{color:'black'}} value="€">€ Euro</option>
                    <option style={{color:'black'}} value="₹">₹ Ruppee</option>
                </select>
            </label>
        </div>
    );
};
    
export default Currency;