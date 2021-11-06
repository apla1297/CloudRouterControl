import React, { lazy } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { RouteWrapper, SecureRouteWrapper } from './Layouts/RouteWrapper'

//Layouts
import Dashboard from './Layouts/Dashbaord/Dashbaord'

//Pages
import NotFound from './Pages/Error Pages/NotFound'
const LazyBuilder = lazy(() => import('./Pages/Builder/Builder'))

//The Fallback for loading
const Fallback = () => {
  return <div>Loading....</div>
}
const RenderedFallback = Fallback()

const Router: React.FC = () => {
  return (
    <BrowserRouter basename="/">
      <Switch>
        {/* Home */}
        <RouteWrapper exact path="/" LazyComponent={LazyBuilder} Layout={Dashboard} Fallback={RenderedFallback} />
        {/* Builder */}
        <SecureRouteWrapper
          exact
          path="/builder"
          LazyComponent={LazyBuilder}
          Layout={Dashboard}
          Fallback={RenderedFallback}
        />
        {/*Route Not Found*/}
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
