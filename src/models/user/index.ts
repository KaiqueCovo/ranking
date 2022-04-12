import { Point } from '@/models/point';
import { ContentfulItemResponse } from '@/services/contentful/fetchContentful';

export interface User {
  name: string;
  user: string;
  avatar: string;
  points?: ContentfulItemResponse<Point>;
}
