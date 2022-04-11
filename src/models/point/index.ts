import { ContentfulItemResponse } from '@/services/contentful/fetchContentful';

import { User } from '../user';

export interface Point {
  points: number;
  motive: string;
  user: ContentfulItemResponse<User>;
}
