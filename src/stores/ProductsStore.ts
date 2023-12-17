import { singleton } from 'tsyringe';

import { Store, Action } from 'usestore-ts';

import axios from 'axios';

import { ProductSummary } from '../types';
import { apiService } from '../services/ApiService';

const apiBaseUrl = 'https://shop-demo-api-01.fly.dev';

@singleton()
@Store()
export default class ProductsStore {
  products: ProductSummary[] = [];

  async fetchProducts({ categoryId }: {
    categoryId?: string;
  }) {
    this.setProducts([]);

    const products = await apiService.fetchProducts({ categoryId });

    this.setProducts(products);
  }

  @Action()
  setProducts(products: ProductSummary[]) {
    this.products = products;
  }
}
