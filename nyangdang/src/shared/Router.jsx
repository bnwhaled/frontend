import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginForm from "../component/features/LoginForm/LoginForm";
import SignupForm from "../component/features/SignupForm/SignupForm"

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router;