import { BrowserRouter, Routes, Route } from "react-router-dom" 
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"
import PropertyListing from "./pages/PropertyListing"
import UserProfile from "./pages/UserProfile"
import AgentProfiles from "./pages/AgentProfiles"
import PropertyDetails from "./pages/PropertyDetails"
import Header from "./components/Header"
import Footer from "./components/Footer"
import About from "./pages/About"
import PrivateRoute from "./components/PrivateRoutes"

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/propertylisting" element={<PropertyListing/>}/>
        <Route path="/propertydetails" element={<PropertyDetails/>}/>
        <Route element={<PrivateRoute/>}>
          <Route path='/userprofile' element={<UserProfile/>}/>
          <Route path='/agentprofile' element={<AgentProfiles/>}/>
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
