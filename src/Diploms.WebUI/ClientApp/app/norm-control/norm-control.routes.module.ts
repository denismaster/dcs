import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NormControlComponent } from './components/norm-control.component';
import { NormControlChartComponent } from './components/norm-control-chart.component';

const routes: Routes = [
    {
        path: 'norm-control/dashboard', component: NormControlChartComponent
    },
    {
        path: 'norm-control/:diplomId', component: NormControlComponent
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NormControlRoutingModule { }
