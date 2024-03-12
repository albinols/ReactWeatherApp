import StateContextProvider from './context/StateContextProvider'
import AppContainer from './containers/AppContainer'
// import './App.css'

function App() {
  

  return (
    <>
     <StateContextProvider>
      <AppContainer />
     </StateContextProvider>
    </>
  )
}

export default App
