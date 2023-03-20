import { useState, useEffect } from "react"
import Output from "./output"

function Input() {
    const [amount,setAmount]=useState()
    const [service,setService]=useState('')
    const [cname,setCname]=useState('')
    const [list,setList]=useState([])

    useEffect(()=> {
        if(service==='1') {
            setAmount(amount*0.2)
        }
        else if(service==='2') {
            setAmount(amount*0.1)
        }
        else if(service==='3') {
            setAmount(amount*0.05)
        }
    },[service]);

    const Addcustomer=(e)=>{
        e.preventDefault();
        const data={cname,amount}
        if(cname && amount) {
            setList((ls)=>[...ls,data])
            setAmount('')
            setService('')
            setCname('')
        }
    }
    return (
        <>
        <form>
            <div className="section1">
            <label className="section1A">Enter your bill amount</label>
            <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} className='section1B'></input>
            </div>
            <hr />
            <div className="section2">
            <div className="section1label">How was the service</div>
            <select value={service} onChange={(e)=>setService(e.target.value)} className='section1select'>
                <option value='' disabled>Choose</option>
                <option value='1'>excellent(20%)</option>
                <option value='2'>Moderate(10%)</option>
                <option value='3'>bad(5%)</option>
            </select>
            <input type="text" placeholder="Customer Name" value={cname} onChange={(e)=>setCname(e.target.value)} className='section1cname'></input>
            <button onClick={Addcustomer} className='section1Button'>Add Customer</button>
            </div>
        </form>
        <Output list={list} />
        </>
    )
}
export default Input
