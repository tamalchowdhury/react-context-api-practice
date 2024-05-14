import { useContext } from "react"
import { ItemContext } from "../contexts/ItemContextProvider"

export function useItemsContext() {
  const context = useContext(ItemContext)

  if (!context) {
    throw new Error(
      "useItemsContext must be used within an ItemContextProvider"
    )
  }

  return context
}
