import { Routes, Route } from 'react-router-dom';
import {
  Calendar,
  Employees,
  Orders,
  Kanban,
  Editor,
  ColorPicker,
  Pyramid,
  Stacked,
  Financial,
  Pie,
  Bar,
  Area,
  Line,
  Ecommerce,
  Customers,
  ColorMapping,
} from 'pages';

const routes = [
  { path: '/', element: <Ecommerce /> },
  { path: '/ecommerce', element: <Ecommerce /> },
  { path: '/order', element: <Orders /> },
  { path: '/employees', element: <Employees /> },
  { path: '/customers', element: <Customers /> },
  { path: '/kanban', element: <Kanban /> },
  { path: '/editor', element: <Editor /> },
  { path: '/Calendar', element: <Calendar /> },
  { path: '/color-picker', element: <ColorPicker /> },
  { path: '/line', element: <Line /> },
  { path: '/area', element: <Area /> },
  { path: '/bar', element: <Bar /> },
  { path: '/pie', element: <Pie /> },
  { path: '/financial', element: <Financial /> },
  { path: '/color-mapping', element: <ColorMapping /> },
  { path: '/pyramid', element: <Pyramid /> },
  { path: '/stacked', element: <Stacked /> },
];

export const AppRoutes = () => (
  <Routes>
    {routes.map(({ path, element }, index) => (
      <Route key={index} path={path} element={element} />
    ))}
  </Routes>
);
