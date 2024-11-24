import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCafecitoDevComponent } from './nav-cafecito-dev.component';

describe('NavCafecitoDevComponent', () => {
  let component: NavCafecitoDevComponent;
  let fixture: ComponentFixture<NavCafecitoDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavCafecitoDevComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavCafecitoDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
