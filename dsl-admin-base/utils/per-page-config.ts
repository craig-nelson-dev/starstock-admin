import { DEFAULT_PER_PAGE } from './constant';

class PerPageConfig {
  private config: { [key: string]: number } = {};

  constructor() {
    this.config = {};
  }

  public setPerPage(key: string, value: number) {
    this.config[key] = value;
  }

  public getPerPage(key: string): number {
    return this.config[key] || DEFAULT_PER_PAGE;
  }
}

export default new PerPageConfig();
