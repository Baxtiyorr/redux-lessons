
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Button, Container, Modal, Table } from "react-bootstrap"
import { removeToDo } from "./redux/slice/todo"
import TodoItem from "./TodoItem"
import AddToDo from "./AddToDo"


const Crud = () => {
  const [show, setShow] = useState(false)
  const [deleteTodo, setDeleteTodo] = useState({})  
  const dispatch = useDispatch()

  const todoList = useSelector(state => state.todo.list)
  

  const handleClickRemove = (todo) =>{
    setShow(true)
    setDeleteTodo(todo)
  }
  
  const hanleRemove = () =>{
    dispatch(removeToDo(deleteTodo))
    setShow(false)
  }



const loopTodo = todoList.map((todo => (
  <TodoItem task={todo.name} key={todo.id} isDone={todo.isDone} createdAt={todo.createdAt} updatedAt={todo.updateAt}
  onClickRemove={handleClickRemove} id={todo.id}/>
)))


  return (
    <>
      <Container style={ {width:'630px'}}>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Remove todo?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure about that????</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={hanleRemove}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

        <AddToDo/>
        <Table>
          <thead>
            <tr>
              <th style={{textAlign:'center'}}>Name</th>
              <th style={{textAlign:'center'}}>Status</th>
              <th style={{textAlign:'center'}} colSpan={2}>Action</th>
            </tr>
          </thead>

          <tbody>
        {loopTodo}

          </tbody>

        </Table>

      </Container>
    </>
  )
}

export default Crud
