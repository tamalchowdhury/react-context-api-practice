import React from "react"
import { useItemsContext } from "../lib/hooks"

export default function AddNew() {
  const { addNewItem } = useItemsContext()

  const handleAddItem = (event) => {
    event.preventDefault()
    const newItem = event.target.newItem.value
    addNewItem(newItem)
    event.target.reset()
  }

  return (
    <div className='shell'>
      <h3>Add New</h3>
      <form onSubmit={handleAddItem}>
        <label htmlFor='newItem'>New Item:</label>
        <input type='text' id='newItem' name='newItem' />
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}
