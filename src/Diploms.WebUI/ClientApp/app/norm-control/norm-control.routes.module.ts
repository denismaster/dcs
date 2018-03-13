import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NormControlComponent } from './components/norm-control.component';

const routes: Routes = [
    { path: 'norm-control', component: NormControlComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NormControlRoutingModule {}
