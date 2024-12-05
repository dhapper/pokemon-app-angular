import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PkmnGeneratorComponent } from './pkmn-generator.component';

describe('PkmnGeneratorComponent', () => {
  let component: PkmnGeneratorComponent;
  let fixture: ComponentFixture<PkmnGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PkmnGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PkmnGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
