import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DigitalEyePageComponent } from './pages/digital-eye-page/digital-eye-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NavigationPageComponent } from './pages/navigation-page/navigation-page.component';
import { ShoppingListPageComponent } from './pages/shopping-list-page/shopping-list-page.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainPageComponent
  },
  {
    path: 'shopping-list',
    component: ShoppingListPageComponent
  },
  {
    path: 'digital-eye',
    component: DigitalEyePageComponent
  },
  {
    path: 'navigation',
    component: NavigationPageComponent
  },
  {
    path: '**',
    redirectTo: 'main'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
