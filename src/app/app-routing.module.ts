import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LinkConverterComponent } from './Components/link-converter/link-converter.component';
import { LinkRouterComponent } from './Components/link-router/link-router.component';

const routes: Routes = [
    {
        path: '',
        component: LinkConverterComponent
    },
    {
        path: ':code',
        component: LinkRouterComponent
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
