import { createHashRouter } from 'react-router-dom';

// Layouts
import DefaultLayout from "@settings/components/DefaultLayout"

// Pages
import Settings from "@settings/pages/Settings"
import Import from "@settings/pages/Import"
import NotFound from "@settings/pages/NotFound"


const router = createHashRouter([
    {
        path: '/',  // This will be added after the #
        element: <DefaultLayout />,
        children: [
            {
                index: true,
                element: <Settings />,
            },
            {
                path: 'import',
                element: <Import />,
            },
            {
              path: '*',
              element: <NotFound />,
            }
        ]
    }
]);

export default router