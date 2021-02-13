import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewsDetailsComponent } from './components/news-details/news-details.component';
import { PresentationCommissionComponent } from './components/presentation-commission/presentation-commission.component';
import { PresentationLiensComponent } from './components/presentation-liens/presentation-liens.component';
import { PresentationMinistreComponent } from './components/presentation-ministre/presentation-ministre.component';
import { ReglFiscComponent } from './components/regl-fisc/regl-fisc.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "commissionfiscale", component: PresentationCommissionComponent},
  {path: "ministre", component: PresentationMinistreComponent},
  {path: "liens", component: PresentationLiensComponent},
  {path: "news/:id", component: NewsDetailsComponent},
  {path: "regl_fisc", component: ReglFiscComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
