import Router from './Router'
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <body>
        <Router />
      </body>
      <footer>

      </footer>
    </div>
  )
}

export default App
