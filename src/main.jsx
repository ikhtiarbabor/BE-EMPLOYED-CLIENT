import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Components/Layout/Main';
import Home from './Components/Home/Home';

import AppliedJobs from './Components/Applied Jobs/AppliedJobs';
import Blog from './Components/Blog/Blog';
import JobDetails from './Components/Home/JobDetails';
import Statistics from './Components/Statistics/Statistics';
import ErrorPage from './Components/ErrorPage/ErrorPage';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: 'Statistics',
        element: <Statistics />,
        loader: () => fetch('/Statistics.json'),
      },
      {
        path: '/appliedJobs',
        element: <AppliedJobs />,
        loader: () => fetch('/featureJobs.json'),
      },
      {
        path: 'blog',
        element: <Blog />,
      },
      {
        path: 'jobDetails/:jobId',
        element: <JobDetails />,
        loader: async ({ params }) => {
          const loadData = await fetch('/featureJobs.json');
          const res = await loadData.json();
          const job = res.find((job) => job._id === params.jobId);
          return job;
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
