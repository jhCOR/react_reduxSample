import { Navigate, useRoutes } from 'react-router-dom';
import { Link as RouterLink, useParams } from 'react-router-dom';
import Blog from './components/page';
import CounterContainer from './components/containers/counterContainer';
// ----------------------------------------------------------------------

export default function Router() {
	return useRoutes([
		{
			path: '/dashboard',
			element:<CounterContainer />,
			children: [
				{ element:   <Blog />},
				{ path: 'app', element: <p>+</p> },

			],
		},
		{
			path: '/',
			element: 
					<Blog >데시보드</Blog>
				,
			children: [
				{ element:  <p>-</p>},
				{ path: 'app', element: <p>+</p> },

			],
		},
		{ path: '*', element: <Navigate to="/404" replace /> },
	]);
}