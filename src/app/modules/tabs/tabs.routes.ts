import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'main',
    component: TabsPage,
    children: [
      {
        path: 'profile',
        loadComponent: () =>
          import('../profile/profile.page').then((m) => m.ProfilePage),
      },
      {
        path: 'orders',
        loadComponent: () =>
          import('../order/pages/orders/orders.page').then((m) => m.OrdersPage),
      },
      {
        path: 'tastamats',
        loadComponent: () =>
          import('../tastamats/tastamats.page').then((m) => m.TastamatsPage),
      },
      {
        path: 'put-package',
        loadComponent: () =>
          import('../put-package/put.package.page').then((m) => m.PutPackagePage),
      },
      {
        path: 'get-package',
        loadComponent: () =>
          import('../get-package/get.package.page').then((m) => m.GetPackagePage),
      },
      {
        path: 'order-single/:id',
        loadComponent: () => import('../order/pages/order-single/order.single.page').then((m) => m.OrderSinglePage)
      },
      {
        path: 'order-increase',
        loadComponent: () => import('../order/pages/increase-package/increase-package.component').then((m) => m.IncreasePackageComponent)
      },
      {
        path: '',
        redirectTo: '/profile',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/main/profile',
    pathMatch: 'full',
  },
];
