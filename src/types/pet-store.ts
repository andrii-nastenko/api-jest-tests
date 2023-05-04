export type Status = 'available' | 'pending' | 'sort';

export interface Pet {
  id: number;
  category: Category;
  name: string;
  photoUrls: string[];
  tags: Tag[];
  status: string;
}

export type PetsResponse = Pet[];

export type Category = Pick<Pet, 'id' | 'name'>;

export type Tag = Category;
