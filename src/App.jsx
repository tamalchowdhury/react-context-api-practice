import AddNew from "./components/AddNew"
import Content from "./components/Content"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import ItemContextProvider from "./contexts/ItemContextProvider"
import "./css/global.css"

function App() {
  return (
    <ItemContextProvider>
      <div className='app'>
        <Header />
        <div className='main'>
          <Content />
          <AddNew />
        </div>
        <Sidebar />
        <Footer />
      </div>
    </ItemContextProvider>
  )
}

export default App
