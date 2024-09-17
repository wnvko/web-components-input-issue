import { Model } from './model';

// const API_ENDPOINT = 'https://data-northwind.indigo.design';

class Service {
  public get = async (): Promise<Model | undefined> => {
    return new Promise(resolve => setTimeout(resolve, 500));
  }
}
export const service: Service = new Service();
