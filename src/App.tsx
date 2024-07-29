import {createBrowserRouter, RouterProvider, } from 'react-router-dom';
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Routes/Home/Home";
import About from "./Components/Routes/About/About";
import Projects from "./Components/Routes/Projects/Projects";
import Contact from "./Components/Routes/Contact/Contact";
import Skills from "./Components/Routes/Skills/Skills";

function App() {

    const router = createBrowserRouter([{
        path: "/",
        element: <Layout />,
        children: [{
            path: "/",
            element: <>
                <Home text="Natalia"/>
                <Home text="Hernandez"/>
            </>
        },
        {
            path: "/about",
            element: <About />
        },
        {
            path: "/skills",
            element: <Skills />
        },
        {
            path: "/projects",
            element: <Projects />
        },
        {
            path: "/contact",
            element: <Contact />
        }
        ]
    }])

    return (
    <RouterProvider router={router}/>
    );
}

export default App;
