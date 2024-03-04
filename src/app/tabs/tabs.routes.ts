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
          import('../modules/profile/profile.page').then((m) => m.ProfilePage),
      },
      {
        path: 'orders',
        loadComponent: () =>
          import('../modules/order/orders/orders.page').then((m) => m.OrdersPage),
      },
      {
        path: 'tastamats',
        loadComponent: () =>
          import('../modules/tastamats/tastamats.page').then((m) => m.TastamatsPage),
      },
      {
        path: 'put-package',
        loadComponent: () =>
          import('../modules/put-package/put.package.page').then((m) => m.PutPackagePage),
      },
      {
        path: 'get-package',
        loadComponent: () =>
          import('../modules/get-package/get.package.page').then((m) => m.GetPackagePage),
      },
      {
        path: 'order-single/:id',
        loadComponent: () => import('../modules/order/order-single/order.single.page').then((m) => m.OrderSinglePage)
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
