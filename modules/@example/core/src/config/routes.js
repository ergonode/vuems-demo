import { Pages } from './imports'

export const ROUTE_NAME = {
  INDEX: 'index',
}

export default [
  {
    name: ROUTE_NAME.INDEX,
    path: '/',
    component: Pages.Index,
  },
]
