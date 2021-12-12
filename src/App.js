import React, { useState } from 'react';
import Inputetaskform from './Inputetaskform';
const App = () => {
    const [task, setTask] = useState("");
    const [tasklist, setTaskList] = useState([]);
    const onChangeHandler = (e) => {
        setTask(e.target.value);

    }
    const onClickHandler = () => {
        // setTaskList(task)
        // console.log(task);
        setTaskList([...tasklist, task])
        // console.log(tasklist);
        setTask("");


    }
    const removeData = (taskvalue) => {
        let updetedtask = [];
        //  console.log(updetedtask);
        updetedtask = tasklist.filter((value, index) => {
            return value != taskvalue;
        });

        // console.log(updetedtask);
        setTaskList(updetedtask);
        // console.log(taskvalue);
    }
    return (
        <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="" placeholder="enter name" id="" />
            my namre is sumit hingaspure
        </div>

    );
}
export default App;