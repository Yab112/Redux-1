import Counter from "./component/counter"

function App() { 

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex justify-center flex-col gap-10 border-1 border-slate-400 w-[400px] h-[400px] shadow-lg items-center bg-slate-100">
        <Counter/>
        <h1 className="text-2xl max-w-56 font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 animate-pulse">Demo for Redux using createSlice</h1>
      </div>
    </div>
  )
}

export default App
