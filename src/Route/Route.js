import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import Privacy from "../Pages/privacy/Privacy.module";
import Terms from "../Pages/terms/Terms.module";
import Home from "../Pages/Home/Home.module";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
            <Route index path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/privacy-policy' element={<Privacy />} />
            <Route path='/terms-conditions' element={<Terms />} />
        </Route>
    )
);

export default router;
