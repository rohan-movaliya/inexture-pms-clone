// Category-wise data
export interface CategoryWiseCount {
  category_id: number;
  category_name: string;
  count: number;
}

// Root response structure
export interface DefaulterStatusApiResponse {
  total_defaulter_count: number;
  category_wise_counts: CategoryWiseCount[];
}

export interface DefaulterStatus {
  data: CategoryWiseCount[];
  total: number;
}