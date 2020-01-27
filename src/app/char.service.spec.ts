import { TestBed } from '@angular/core/testing';

import { CharService} from './char.service';

describe('CharService', () => {
  let service: CharService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(CharService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  /**
   * Based on Mock char values. To be moved to a MockWebService in future
   */

  it('should listChars()', () => {
    expect(service.listChars()).toEqual(['Air Elemental', 'Succubus', 'Barbarian']);
  });

  it('should give numChars()', () => {
    expect(service.numChars()).toEqual(3);
  });

  it('should getCharByName()', () => {
    expect(service.getCharByName('Air Elemental')).toEqual({name: 'Air Elemental', desc: 'Medium'});
    expect(service.getCharByName('Barbarian')).toEqual({name: 'Barbarian', desc: 'Medium'});
  });
});
