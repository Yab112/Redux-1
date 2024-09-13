import { useDispatch, useSelector } from "react-redux";
import {
    decrement,
    increment,
    incrementByAmount
  } from "../state/counter/counterSlicer";
import { RootState,AppDispaatch } from "../state/store";
import { useState } from "react";

const Counter = ()=>{
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch<AppDispaatch>();
    const [isActive, setIsActive] = useState<string|null>(null);

    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <h2 className="text-6xl text-black font-bold ">{count}</h2>
            <div className="flex gap-4">
                <button 
                    onClick={() => {
                        dispatch(increment())
                        setIsActive("incre")
                    }} 
                    className={`border-slate-400 p-4 rounded-2xl transition-all duration-300 ${
                        isActive === "incre" ? 'bg-blue-500 text-white transform scale-105' : 'bg-white text-black border-1'
                    }`}
                >
                    Increment
                </button>
                <button 
                    onClick={() => {
                        dispatch(decrement())
                        setIsActive("decre")
                    }}
                    className={`border-slate-400 p-4 rounded-2xl transition-all duration-300 ${
                        isActive === "decre" ? 'bg-blue-500 text-white transform scale-105' : 'bg-white text-black border-1'
                    }`}
                >
                    Decrement
                </button>
                <button 
                    onClick={() =>{ dispatch(incrementByAmount(5)) 
                                    setIsActive("inrebyamount")}}
                                    className={`border-slate-400 p-4 rounded-2xl transition-all duration-300 ${
                                        isActive === "inrebyamount" ? 'bg-blue-500 text-white transform scale-105' : 'bg-white text-black border-1'
                                    }`}
                >
                    Increment by 5
                </button>
            </div>
        </div>
    )
}

export default Counter