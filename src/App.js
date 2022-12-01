import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Layout} from "./components/Layout";
import {Home} from "./pages/Home";
import {Notfound} from "./pages/Notfound";
import {Editing} from "./pages/Editing";

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='/' index element={<Home/>}/>
                    <Route path='/editing' index element={<Editing/>}/>
                    <Route path='*' element={<Notfound/>}/>
                </Route>

            </Routes>

        </>
    );
}

export default App;
