import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAlbumsComponent } from './listar-albums.component';

describe('ListarAlbumsComponent', () => {
  let component: ListarAlbumsComponent;
  let fixture: ComponentFixture<ListarAlbumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarAlbumsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
