import React from "react"
import { useItemsContext } from "../lib/hooks"

export default function Sidebar() {
  const { items } = useItemsContext()
  return (
    <div className='sidebar shell'>
      <h3>The Sidebar</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
