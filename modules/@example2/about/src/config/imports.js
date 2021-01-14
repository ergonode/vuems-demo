export const Pages = {
  About: () => import('@About/pages/about').then((m) => m.default || m),
}
