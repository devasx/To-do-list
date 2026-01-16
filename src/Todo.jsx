import {useState} from 'react';

function Todo(){
    const [tasks, setTasks] = useState([]);
    let lastId = 0;

    function addItem(e){
        if (tasks.length != 0){
            setTasks([...tasks,document.getElementById("inputArea").value]);
        }
        else{
            setTasks([document.getElementById("inputArea").value]);
        }
        document.getElementById("inputArea").value = "";
    }

    function deleteItem(e){
        const id = (e.target.parentNode.parentNode.id);

        console.log(id);

        setTasks(tasks.filter((ele, index) => index != id));
    }

    function moveUp(e){
        console.log(tasks);
        const id = Number(e.target.parentNode.parentNode.id);
        const id2 = (Number(id) - 1);
        if (id2 < tasks.length){
            setTasks(prevTasks => {
                const t = [...tasks];
                const temp = t[id];
                t[id] = t[id2];
                t[id2] = temp;
                return t;
            })
        }
    }

    function moveDown(e){
        console.log(tasks);
        const id = Number(e.target.parentNode.parentNode.id);
        const id2 = (Number(id) + 1);
        if (id2 < tasks.length){
            setTasks(prevTasks => {
                const t = [...tasks];
                const temp = t[id];
                t[id] = t[id2];
                t[id2] = temp;
                return t;
            })
        }
    }
    
    return(
        <>
        
        <div className="flex flex-col justify-center text-center items-center mt-10">
            <h1 className="text-4xl font-bold text-white mb-4 w-125 h-15">To Do List</h1>
            
            <div className="flex flex-col justify-center items-center" id="tasksDiv">
                <div className='flex justify-center text-center items-center w-125'> 
                    <input className="border-0 rounded-xl bg-white text-2xl h-10 p-1" id="inputArea" placeholder='Enter your task'></input>
                    <button className="mx-2 bg-green-400 py-1 px-2 font-bold rounded-2xl hover:bg-green-500" onClick={addItem}>Add Task</button>
                </div>

                {tasks.map((task, index) => 
            
                    <div className="flex justify-around text-center items-center bg-white w-125 h-10 rounded-4xl border-1 border-[#bfbfbf] my-1" id={index} key={index}>
                        <p className="mx-2 text-2xl">{task}</p>
                        <div className='flex justify-center text-center items-center'>
                            <button className="mx-2 bg-red-400 py-1 px-2 font-bold rounded-2xl hover:bg-red-500" onClick={deleteItem}>Delete</button>
                            <button className="mx-2 bg-blue-400 py-1 px-2 font-bold rounded-2xl hover:bg-blue-500" onClick={moveUp}>👆</button>
                            <button className="mx-2 bg-blue-400 py-1 px-2 font-bold rounded-2xl hover:bg-blue-500" onClick={moveDown}>👇</button>
                        </div>
                    </div>
                )}

                

            </div>
        </div>

        </>
    )
}

export default Todo;