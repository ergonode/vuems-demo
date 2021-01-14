import { Pages } from './imports'

export const ROUTE_NAME = {
  ABOUT: 'about',
}

export default [
  {
    name: ROUTE_NAME.ABOUT,
    path: '/about',
    component: Pages.About,
  },
]
