import React, { Suspense } from 'react'
import { Route, RouteProps } from 'react-router-dom'
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsalAuthentication } from '@azure/msal-react'
import { InteractionType } from '@azure/msal-browser'

type Props = {
  LazyComponent: React.LazyExoticComponent<React.FC<{}>>
  Layout: React.ComponentType
  Fallback: JSX.Element
}

export const RouteWrapper: React.FC<Props & RouteProps> = ({ LazyComponent, Layout, Fallback, ...rest }) => {
  return (
    <Route
      render={props => (
        <Suspense fallback={Fallback}>
          <Layout {...props}>
            <LazyComponent />
          </Layout>
        </Suspense>
      )}
      {...rest}
    />
  )
}

export const SecureRouteWrapper: React.FC<Props & RouteProps> = ({ LazyComponent, Layout, Fallback, ...rest }) => {
  const request = {
    loginHint: '',
    scopes: ['User.Read'],
  }

  const { login, result, error } = useMsalAuthentication(InteractionType.Redirect)

  return (
    <>
      <AuthenticatedTemplate>
        <Route
          render={props => (
            <Suspense fallback={Fallback}>
              <Layout {...props}>
                <LazyComponent />
              </Layout>
            </Suspense>
          )}
          {...rest}
        />
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>Redirecting.....</UnauthenticatedTemplate>
    </>
  )
}
