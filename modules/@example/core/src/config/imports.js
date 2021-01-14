export const Pages = {
  Index: () => import('@Core/pages/index').then((m) => m.default || m),
}
