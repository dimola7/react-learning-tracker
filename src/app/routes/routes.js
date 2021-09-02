import Login from "../components/pages/Login/Login";
import Dashboard from "../components/pages/Dashboard/Dashboard";
 
export const publicRoutes = [
 {
    path: '/',
    exact: true,
    component: Login
 },
];
 
export const privateRoutes = [
 {
    path: '/dashboard',
    exact: true,
    component: Dashboard
 }
 ];