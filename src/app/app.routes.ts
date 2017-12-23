import {UserComponent} from "./user/user.component";
import {AppComponent} from "./app.component";
import {provideRoutes, RouterModule} from "@angular/router";
const APP_ROUTES=[
  {path: 'user',component:UserComponent},
  {path:'',component:AppComponent}

];

export const APP_CONST_PROVIDER=[
  provideRoutes(APP_ROUTES)

];

export const routing=RouterModule.forRoot(APP_ROUTES);
