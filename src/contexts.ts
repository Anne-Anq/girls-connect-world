import { createContext, Dispatch, SetStateAction } from "react"

export const DrawerContext = createContext<{
  content: JSX.Element | null
  setContent: Dispatch<SetStateAction<JSX.Element | null>>
}>({
  content: null,
  setContent: () => {},
})
