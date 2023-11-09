import UserContextProvider from "./Context/UserContextProvider";
import Login from "./components/login";
import Profile from "./components/profile";

function App() {
  return (
    <UserContextProvider>
      <h1>hi moin</h1>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
