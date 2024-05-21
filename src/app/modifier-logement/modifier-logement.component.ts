import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";

@Component({
  selector: 'app-modifier-logement',
  standalone: true,
    imports: [
        MatCard,
        MatCardContent,
        MatCardHeader,
        MatCardTitle,
        MatDivider
    ],
  templateUrl: './modifier-logement.component.html',
  styleUrl: './modifier-logement.component.css'
})
export class ModifierLogementComponent {

}
