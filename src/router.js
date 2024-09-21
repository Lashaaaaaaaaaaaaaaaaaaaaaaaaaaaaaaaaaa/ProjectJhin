import MainPage from './Pages/MainPage'
import AboutPage from './Pages/AboutPage'
import LinkLayout from './layouts/LinkLayout'
import ParamPage from './Pages/ParamPage'
import ErrorPage from './Pages/ErrorPage'

const router = [
    {
        element: <LinkLayout />,
        path: '/',
        children: [
            {
                element: <MainPage />,
                path: '/'
            },
            {
                element: <AboutPage />,
                path: '/about'
            },
        ]
    },
    {
        element: <ParamPage />,
        path: 'fact/:id'
    },
    {
        element: <ErrorPage />,
        path: '*'
    }
]

export default router