import { TestBed } from '@angular/core/testing';

import { ConvertirMonedaService } from './convertir-moneda.service';

describe('ConvertirMonedaService', () => {
  let service: ConvertirMonedaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConvertirMonedaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
