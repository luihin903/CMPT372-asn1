import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from '../components/view/view.component';
import { AddComponent } from '../components/add/add.component';
import { DetailComponent } from '../components/detail/detail.component';

const appRoutes: Routes = [
	{path: "", component: ViewComponent},
	{path: "add", component: AddComponent},
	{path: "recipes/:id", component: DetailComponent}
]

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})
export class RoutingModule { }
