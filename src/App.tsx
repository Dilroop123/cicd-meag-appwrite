import './App.css'
import Main from './megablog-appwrite/Main';



const App = () => {
  console.log(import.meta.env.VITE_APPWRITE_ENDPOINT);

  return (
    <div>
      <Main />
    </div>
  )
}

export default App;