import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type AnalyticsWhereInput = {
  id?: StringFilter;
  postId?: IntNullableFilter;
  shares?: IntNullableFilter;
  views?: IntNullableFilter;
};
