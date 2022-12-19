import { MainRoute } from "./routes"
import { ResetCss } from "./styles/resetCss"
import { GlobalStyle } from "./styles/globalStyles"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <>
      <ResetCss/>
      <GlobalStyle/>
      <ToastContainer/>
      <MainRoute />
    </>
  )
}

export default App
