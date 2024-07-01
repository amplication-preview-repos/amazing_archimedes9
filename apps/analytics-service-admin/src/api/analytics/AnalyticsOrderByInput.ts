import { SortOrder } from "../../util/SortOrder";

export type AnalyticsOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  postId?: SortOrder;
  shares?: SortOrder;
  updatedAt?: SortOrder;
  views?: SortOrder;
};
