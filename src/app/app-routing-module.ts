import {AppComponent} from "./app.component";
import {ResultComponent} from "./result/result.component";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {DrawComponent} from "./draw/draw.component";

const routes: Routes = [
  {path: '', redirectTo: '/losowanie', pathMatch: 'full'},
  {path: 'losowanie', component: DrawComponent},
  {path: 'wynik', component: ResultComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
