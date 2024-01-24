// Write your code here
import './index.css'

const TodoItem = props => {
  const {eachTodoDetails, deleteItem} = props
  const {id, title} = eachTodoDetails

  const onDelete = () => {
    deleteItem(id)
  }

  return (
    <li className="list-item">
      <p className="paragraph">{title}</p>
      <button className="delete-button" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
