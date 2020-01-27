import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharSheetComponent } from './char-sheet.component';

describe('CharSheetComponent', () => {
  let component: CharSheetComponent;
  let fixture: ComponentFixture<CharSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharSheetComponent);
    component = fixture.componentInstance;
    component.charName = 'Air Elemental';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have name', () => {
    expect(component.getName()).toEqual('Air Elemental');

    component.charName = 'Barbarian';
    fixture.detectChanges();
    expect(component.getName()).toEqual('Barbarian');
  });

  it('should show name', () => {
    expect(fixture.nativeElement.querySelector('.charName').textContent).toEqual('Air Elemental');

    component.charName = 'Barbarian';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.charName').textContent).toEqual('Barbarian');
  });

  it('should have desc', () => {
    expect(component.getDesc()).toEqual('Medium');

    component.charName = 'Barbarian';
    fixture.detectChanges();
    expect(component.getDesc()).toEqual('Medium');
  });

  it('should show desc', () => {
    expect(fixture.nativeElement.querySelector('.charClass').textContent).toEqual('Medium');

    component.charName = 'Barbarian';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.charClass').textContent).toEqual('Medium');
  });


});
