import { createRouter as createTanStackRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

let _router: ReturnType<typeof createRouter> | undefined

export function createRouter() {
  const router = createTanStackRouter({
    routeTree,
    scrollRestoration: true,
  })
  _router = router
  return router
}

export function getRouter() {
  if (!_router) {
    _router = createRouter()
  }
  return _router
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createRouter>
  }
}
