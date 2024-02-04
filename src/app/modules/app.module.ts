import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from '../components/app/app.component';
import { ViewComponent } from '../components/view/view.component';
import { AddComponent } from '../components/add/add.component';
import { DetailComponent } from '../components/detail/detail.component';
import { RoutingModule } from './routing.module';
import { RecipeService } from '../services/recipe.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		AppComponent,
		ViewComponent,
		AddComponent,
		DetailComponent
	],
	imports: [
		BrowserModule,
		RoutingModule,
		FormsModule,
		ReactiveFormsModule
	],
	providers: [RecipeService],
	bootstrap: [AppComponent]
})
export class AppModule { }
