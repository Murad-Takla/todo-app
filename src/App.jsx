import { useState } from "react"

import generateRandomID from "./utilities/generateRandomID"


function App() {

  
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])
  
  console.log(todos)
  return (
    <div className="max-w-3xl mx-auto mt-20 bg-cyan-200 rounded-md p-10">

      <div className="max-w-3xl ">
        <form 
        onSubmit={function(e){
          e.preventDefault()

        }}
        >


        <div className="space-y-4">
          <h1 className="font-bold text-2xl text-gray-900">
            Todo App
          </h1>

          <input
          required
            value={input}
            onChange={function (e) {
              setInput(e.target.value)
             
            }}
            placeholder="Enter your todo"
            className="border-gray-200 border rounded w-1/2 px-3 h-8"></input>
          <div className="flex gap-10 ">

            <button onClick={function () {
              setTodos([...todos,
              {
                id :  generateRandomID() ,
                title: input,
                status: "INCOMPLETE"
              }
              ])
              setInput ("")


            }} className="p-2 bg-blue-500 hover:bg-blue-900 rounded font-bold text-white">Submit</button>
           
          </div>
        </div>
        </form>

        {
          todos.map((todo) => (
            
            <div key={todo.id} className="flex  justify-between my-2">

               <div className="flex gap-2 ">
               <input
                  type="checkbox"
                  onChange={function (e) {      
                      setTodos (todos.map (el => {
                        if(todo.id === el.id){
                          return {
                            ...el,
                            status : e.target.checked ? 'COMPLETE' :  "INCOMPLETE" 
                          }
                        }
                        return el ;
                      }))
                  }}>                 
                </input>
                <p
                className={todo.status === 'COMPLETE' ? "line-through" : " "}
                >
                  {todo.title}
                 
                </p>
               </div>
               <div>
                <button 
                onClick={function () {
                  
                 setTodos(todos.filter(el => el.id !== todo.id) ) 

                }}
                className="bg-red-600 text-white rounded px-2">Delete</button>
               </div>
            </div>
          ))
        }
      </div>
                 {todos.length > 0 && (
                   <div >

                <button onClick={function () {
              setTodos([])
            }} className="p-2 bg-blue-500 hover:bg-blue-900 rounded font-bold text-white w-full ">Delete All</button>

                </div>
                 )}
                
    </div>
  )


}

export default App
