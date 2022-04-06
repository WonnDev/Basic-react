import React from "react";
import AddTodo from "./AddTodo";
import './ListTodo.scss';
import { toast } from 'react-toastify';


class ListTodo extends React.Component{

    state={
        listTodos:[
            {id:'todo1',title:'Doing Homework'},
            { id: 'todo2', title: 'Reading Book' },
            { id: 'todo3', title: 'Watching Videos' },
        ],
        editTodo:{}
    }

    addNewTodo=(todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
        toast.success('Add Done!')
    }
    handleDelTodo = (todo) => {
        let currentTodos = this.state.listTodos;
        currentTodos = currentTodos.filter(item =>item.id !== todo.id)
        this.setState({
            listTodos: currentTodos
        })
        toast.warning('Delete Done!')
    }
    handleEditTodo = (todo) => {
        let{editTodo,listTodos} = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        //save
        if(isEmptyObj===false && editTodo.id === todo.id){
            let listTodosCopy = [...listTodos];
            let objIndex = listTodosCopy.findIndex((item => item.id === todo.id));

            listTodosCopy[objIndex].title = editTodo.title
            this.setState({
                listTodos : listTodosCopy,
                editTodo: {}
            })
            toast.success('Updated Todo!')
            return;
        }
        
            //edit
            this.setState({
                editTodo: todo
            })
        
    }
    handleOnChangeEditTodo = (event) =>{
        
        let editTodoCopy = {...this.state.editTodo};
        editTodoCopy.title = event.target.value
        this.setState({
            editTodo : editTodoCopy
        })
    }

    render() {
        let {listTodos,editTodo} = this.state;
        // let listTodos = this.state.listTodos;
        let isEmptyObj = Object.keys(editTodo).length ===0
        console.log('>>> check empty object: ',isEmptyObj)
        return(
            <>
                <p>
                    TODO Apps with React.js (W)
                </p>

             <div className="list-todo-container">
            <AddTodo
            addNewTodo={this.addNewTodo}
                />
            <div className="list-todo-content">
                {listTodos && listTodos.length > 0 &&
                listTodos.map((item,index)=>{
                    return(
                        <div className="todo-child" key={item.id}>
                            
                           {isEmptyObj===true ?
                                <span>{index + 1}-{item.title}</span>
                                :
                                <>
                                    {editTodo.id === item.id ?
                                    <span>
                                        {index + 1} - <input 
                                        value={editTodo.title} 
                                        onChange={(event)=> this.handleOnChangeEditTodo(event)}
                                        />
                                    </span>
                                    :
                                    <span>
                                        {index + 1}-{item.title}
                                    </span>
                                    } 
                                </>
                                
                            }
                            <button className="edit"
                                onClick={()=> this.handleEditTodo(item)}
                            >
                                {isEmptyObj=== false && editTodo.id === item.id?
                                'Save':'Edit'
                            }
                        
                            </button>
                            <button className="del"
                                onClick={()=> this.handleDelTodo(item)}

                            >Del</button>
                        </div>
                    )
                })
                }
                
                    
            </div>
             </div>
            </>
        )
    }

}

export default (ListTodo);