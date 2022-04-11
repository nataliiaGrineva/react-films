import { HashRouter, Route, Routes } from "react-router-dom";
import FilmScreen from "../screens/FilmScreen";
import FilmsScreen from "../screens/FilmsScreen";

const MainRouter = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<FilmsScreen />} />
                <Route path='/:id' element={<FilmScreen />} />
            </Routes>
        </HashRouter>
    )
};

export default MainRouter;
