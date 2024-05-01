export interface BaseResponse<T> {
  data: T;
  hash: string;
  success: boolean;
  timestamp: number;
}

export interface ListParams {
  page: number;
  perPage: number;
  searchValue?: string;
}

export interface PaginationResponse {
  total: number;
}

export interface BaseEntity {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}
