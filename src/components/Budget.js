import React, { useContext} from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);    

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const setBudget = (event) => {
        if(event.target.value > 20000) {
            alert("The budget value cannot exceed  "+currency+"20000");
            setBudget(20000);
            return;
        }
        if(event.target.value < totalExpenses) {
            alert("The budget value cannot be lower than spent  "+currency+totalExpenses);
            setBudget(totalExpenses);
            return;
        }
        dispatch ({
            type: 'SET_BUDGET',
            payload: event.target.value
        });
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={budget} onChange={setBudget}></input>
</div>
    );
};
export default Budget;
