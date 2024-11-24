import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyCafecitoDevComponent } from './body-cafecito-dev.component';

describe('BodyCafecitoDevComponent', () => {
  let component: BodyCafecitoDevComponent;
  let fixture: ComponentFixture<BodyCafecitoDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BodyCafecitoDevComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyCafecitoDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
