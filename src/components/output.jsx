import { useState } from "react";

function Output({list}) {
    const [x,setX]=useState('')
    const [y,setY]=useState('')

    const tipCaculate=()=> {
        const x=list.map((e)=>e).length
        setX(x)
        const y=list.map((e)=>e.amount).reduce((a,c)=>a+c);  
        setY(y)  
    }
    return (
        <>
        {
        <div className="clist-section">
            <h3 className="clist-heading">Customer List</h3>
            <hr />
            {list.map((a)=>
            <li className="clist-output">{a.cname} offering a tip of {a.amount} rupee</li>
            )}
        </div>
        }
        <div className="calculate-tip">
        <button onClick={tipCaculate} className='calculateTipButton'>Calculate Tip & Customer</button>
        <table>
            <tr>
                <th>Total  Customer</th>
                <th>Tip</th>
            </tr>
            <tr>
                <td>{x}</td>
                <td>{y}</td>
            </tr>
        </table>
        </div>
        </>
    )
}

export default Output
