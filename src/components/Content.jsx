import React from "react"
import { useItemsContext } from "../lib/hooks"

export default function Content() {
  const { items } = useItemsContext()

  return (
    <div className='shell'>
      {items.map((item) => (
        <div key={item}>
          <h2>Fruit: {item}</h2>
        </div>
      ))}
    </div>
  )
}
