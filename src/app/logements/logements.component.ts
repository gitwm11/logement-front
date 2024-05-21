import {Component, OnInit} from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-logements',
  standalone: true,
    imports: [
        MatCard,
        MatCardContent,
        MatCardHeader,
        MatCardTitle,
        MatDivider,
        HttpClientModule,
        MatCardActions,
        MatCardSubtitle,

    ],
  templateUrl: './logements.component.html',
  styleUrl: './logements.component.css'
})
export class LogementsComponent implements OnInit{
  public logements : any;
  public dataSource : any;
  public displayedColumns=['type','status','prix','date_location']

  constructor(private http:HttpClient) {
  }
  ngOnInit() {
    this.http.get("http://localhost:8021/logements")
      .subscribe({
        next:data => {
          this.logements = data;
          this.dataSource = new MatCard(this.logements);

        },
        error : err=>{
          console.log(err);
        }

      })
  }

}
