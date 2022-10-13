import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider as RouterDomProvider } from 'react-router-dom'
import { App } from '@/app'
import * as routes from '@/routes'

const GeolocationPage = lazy(() => import('@pages/geolocation/geolocation.page'))

export const router = createBrowserRouter([
  {
    path: routes.HOME,
    element: <GeolocationPage />,
  },
])

export const RouterProvider = () => {
  return (
    <App>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterDomProvider router={router} />
      </Suspense>
    </App>
  )
}
