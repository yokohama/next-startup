import { 
  ReactElement, 
  Dispatch, 
  SetStateAction, 
  createContext, 
  useContext, 
  useState 
} from "react";

type LoadingContextType = {
  isLoading: boolean
  setIsLoading?: Dispatch<SetStateAction<boolean>>
}

const LoadingContext = createContext<LoadingContextType>({ isLoading: false })

export const useLoading = () => {
  return useContext(LoadingContext)
}

type Props = {
  children: ReactElement
}
export const LoadingProvider: React.FC<Props> = ({children}: Props) => {
  const [isLoading, setIsLoading] = useState(false)

  return(
    <LoadingContext.Provider value={{isLoading, setIsLoading}}>
      {children}
    </LoadingContext.Provider>
  )
}