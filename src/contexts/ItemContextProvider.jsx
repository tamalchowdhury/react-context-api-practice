import React, { createContext, useState } from "react"

export const ItemContext = createContext()

export default function ItemContextProvider({ children }) {
  const [items, setItems] = useState(["apple", "banana", "cherry"])

  const addNewItem = (item) => setItems([...items, item])

  return (
    <ItemContext.Provider value={{ items, addNewItem }}>
      {children}
    </ItemContext.Provider>
  )
}
