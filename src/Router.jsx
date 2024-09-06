import { Route, Routes } from 'react-router';
import SignIn from './pages/SignIn';

const Router = () => {
    return (
        <Routes>
            <Route path="/signin" element={<SignIn />} />
        </Routes>
    );
};

export default Router;