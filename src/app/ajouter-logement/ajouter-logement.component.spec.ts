import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterLogementComponent } from './ajouter-logement.component';

describe('AjouterLogementComponent', () => {
  let component: AjouterLogementComponent;
  let fixture: ComponentFixture<AjouterLogementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterLogementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjouterLogementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
