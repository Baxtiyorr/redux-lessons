import { useState } from "react"
import { Button, Form, FormGroup } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { addToDo, removeToDo } from "./redux/slice/todo"
import './AddToDo.css'

const AddToDo = () => { 
  const [todo, setTodo] = useState('')

  

  const dispatch = useDispatch()


  const handleSubmit = (e) =>{
    e.preventDefault()


    const newTodo = {
      id: Math.floor(Math.random() * 99999999) + 100000, 
      name: todo,
      isDone: false,
      createdAt: (new Date().toLocaleString())
    }


    dispatch(addToDo(newTodo))
    setTodo('')
  }



  return (
    <Form className="form" onSubmit={handleSubmit}>
    <div className="inp-wrapper">
      <Form.Group className="form_group">
        <Form.Control
          required
          type="text"
          placeholder="Enter task"
          defaultValue=""
          onChange={(e) => setTodo(e.target.value)}
        />
      
      </Form.Group>
      <FormGroup>
    <Button type="submit">Submit</Button>
      </FormGroup>
    </div>
  </Form>
  )
}

export default AddToDo
