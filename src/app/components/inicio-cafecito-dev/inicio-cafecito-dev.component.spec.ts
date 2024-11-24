import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioCafecitoDevComponent } from './inicio-cafecito-dev.component';

describe('InicioCafecitoDevComponent', () => {
  let component: InicioCafecitoDevComponent;
  let fixture: ComponentFixture<InicioCafecitoDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InicioCafecitoDevComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioCafecitoDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
