import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import * as routes from '@/routes'

const GeolocationPage = lazy(() => import('@pages/geolocation/geolocation.page'))

export const RouterProvider = () => {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <Routes>
        <Route path={routes.HOME} element={<GeolocationPage />} />
      </Routes>
    </Suspense>
  )
}
