import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";
import {MatFormField, MatHint, MatLabel} from "@angular/material/form-field";
import {FormControl, ReactiveFormsModule} from "@angular/forms";

@Component({

  selector: 'app-ajouter-logement',
  standalone: true,
    imports: [
        MatCard,
        MatCardContent,
        MatCardHeader,
        MatCardTitle,
        MatDivider,
        MatFormField,
        MatLabel,
        MatHint,
      ReactiveFormsModule,


    ],
  templateUrl: './ajouter-logement.component.html',
  styleUrl: './ajouter-logement.component.css'
})
export class AjouterLogementComponent {

  name = new FormControl('');
}
