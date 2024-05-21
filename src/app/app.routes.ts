import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {LocatairesComponent} from "./locataires/locataires.component";
import {LogementsComponent} from "./logements/logements.component";
import {LoginComponent} from "./login/login.component";
import {AjouterLogementComponent} from "./ajouter-logement/ajouter-logement.component";
import {ModifierLogementComponent} from "./modifier-logement/modifier-logement.component";
import {AdminDashComponent} from "./admin-dash/admin-dash.component";



export const routes: Routes = [
  {path : "", component : LoginComponent},
  {path : "login", component : LoginComponent},
  {path : "admin", component : AdminDashComponent,



    children :[
      {path : "home", component : HomeComponent},
      {path : "dashboard", component : DashboardComponent},
      {path : "locataires", component : LocatairesComponent},
      {path : "Logements", component : LogementsComponent},
      {
        path : "ajouterLogement", component : AjouterLogementComponent,

      },
      {path : "modifierLogement", component : ModifierLogementComponent},
    ]},

];
