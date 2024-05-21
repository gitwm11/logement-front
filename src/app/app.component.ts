import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AdminDashComponent} from "./admin-dash/admin-dash.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AdminDashComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
