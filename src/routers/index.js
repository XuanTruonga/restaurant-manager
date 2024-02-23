const { default: DefaultLayout } = require('layout/defaultLayout');
const { default: Cashier } = require('pages/cashier');
const { createBrowserRouter } = require('react-router-dom');

const router = createBrowserRouter([
  {
    path: 'kiot',
    element: (
      <DefaultLayout>
        <Cashier />
      </DefaultLayout>
    ),
    children: [
      {}
    ]
  }
]);

export default router;
