import {Injectable} from '@angular/core';
import Brands from '../../assets/brands.json';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {
  brands: any[] = [];

  constructor() {
    this.brands = Brands;
  }

  /**
   * Get brand by id
   *
   * @param id
   */
  getById(id: any) {
    return this.brands.find(brand => brand.brandId == id);
  }
}
