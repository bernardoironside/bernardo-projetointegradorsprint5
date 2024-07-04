import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableProjetosComponent } from './table-projetos.component';

describe('TableProjetosComponent', () => {
  let component: TableProjetosComponent;
  let fixture: ComponentFixture<TableProjetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableProjetosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableProjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
