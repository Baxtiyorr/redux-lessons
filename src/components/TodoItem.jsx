import { Badge } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateStatus } from "./redux/slice/todo";
import { FaCheck, FaTimes } from "react-icons/fa";
import './TodoItem.css'
const TodoItem = (todo) => {
    const {task, isDone, createdAt, updatedAt, onClickRemove, id} = todo
    
    const dispatch = useDispatch()

    const handleClick = ({id})=>{
        dispatch(updateStatus({id}))
    }
  return (
    <tr>
      <td className="task-td">
        <p className={`todo-item ${isDone && 'done'}`}>{task}</p>
      <Badge bg="secondary">{createdAt}</Badge>
        </td>

        <td style={{textAlign:'center'}}>
            <Badge className={isDone ? 'success' : 'danger'} bg={isDone ? 'success' : 'danger'}>{isDone ? 'done' : 'Pending'}</Badge>
            {isDone && <p>{updatedAt}</p>}
        </td>

        {!isDone && 
        <td style={{textAlign:'center'}}>
            <div className="action" onClick= {() => handleClick({id})}>
                <FaCheck color={'green'}/>
            </div>
        </td>}
        <td style={{textAlign:'center'}} colSpan={isDone ? 2 : 1}>
            <div onClick={() => onClickRemove({id})}>
                <FaTimes color={'red'}/>
            </div>
        </td>
    </tr>
  )
}

export default TodoItem
