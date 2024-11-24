import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCafecitoDevComponent } from './login-cafecito-dev.component';

describe('LoginCafecitoDevComponent', () => {
  let component: LoginCafecitoDevComponent;
  let fixture: ComponentFixture<LoginCafecitoDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginCafecitoDevComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginCafecitoDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
