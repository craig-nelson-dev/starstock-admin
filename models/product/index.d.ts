import { UnitSize } from './unit-size';
import { Price } from './price';
import { ProductCategory } from './product-category';
import { ProductStatus } from './product-status';
import { ProductApprovalStatus } from './product-approvalStatus';

export * from './product-status';
export interface ProductModel {
  id: number;
  brandOwner: string;
  code: string;
  image: string;
  name: string;
  containerType: string;
  unitSize: UnitSize;
  inputPrice: Price;
  sellOutPrice: Price;
  category: ProductCategory;
  status: ProductStatus;
  approval: ProductApprovalStatus;
  mainImage: string;
  additionalImages: Array;
  longDescription: string;
}
