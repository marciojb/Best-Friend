import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DiarioHistoricoPage } from './diario-historico.page';

describe('DiarioHistoricoPage', () => {
  let component: DiarioHistoricoPage;
  let fixture: ComponentFixture<DiarioHistoricoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DiarioHistoricoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


