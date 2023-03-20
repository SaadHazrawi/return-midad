export interface IProduct {
  id: number;
  name: string;
  code: string;
  releaseData: string;
  description: string;
  price: number;
  star: number;
  image: string;
  catId:number;
  catName?:string;
}
