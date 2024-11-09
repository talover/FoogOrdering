import { createHashRouter } from 'react-router-dom';

// Layouts
import DefaultLayout from "@settings/components/DefaultLayout"

// Pages
import Home from "@settings/pages/Home"
import About from "@settings/pages/About"
import NotFound from "@settings/pages/NotFound"


const router = createHashRouter([
    {
        path: '/',  // This will be added after the #
        element: <DefaultLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'about',
                element: <About />,
            },
            {
              path: '*',
              element: <NotFound />,
            }
        ]
    }
]);

export default router