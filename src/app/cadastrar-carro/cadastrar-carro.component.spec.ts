import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarCarroComponent } from './cadastrar-carro.component';

describe('CadastrarCarroComponent', () => {
  let component: CadastrarCarroComponent;
  let fixture: ComponentFixture<CadastrarCarroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarCarroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarCarroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
