import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterCafecitoDevComponent } from './footer-cafecito-dev.component';

describe('FooterCafecitoDevComponent', () => {
  let component: FooterCafecitoDevComponent;
  let fixture: ComponentFixture<FooterCafecitoDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterCafecitoDevComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterCafecitoDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
