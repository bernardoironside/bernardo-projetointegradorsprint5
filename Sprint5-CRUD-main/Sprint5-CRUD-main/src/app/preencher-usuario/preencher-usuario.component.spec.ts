import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreencherUsuarioComponent } from './preencher-usuario.component';

describe('PreencherUsuarioComponent', () => {
  let component: PreencherUsuarioComponent;
  let fixture: ComponentFixture<PreencherUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreencherUsuarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreencherUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
