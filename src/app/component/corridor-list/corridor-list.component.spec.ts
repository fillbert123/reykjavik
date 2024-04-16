import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorridorListComponent } from './corridor-list.component';

describe('CorridorListComponent', () => {
  let component: CorridorListComponent;
  let fixture: ComponentFixture<CorridorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CorridorListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CorridorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
