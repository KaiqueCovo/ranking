import { Point } from '@/models/point';

import { ContentfulItemResponse, fetchContentful } from '../fetchContentful';

export async function fetchAllPoints(): Promise<ContentfulItemResponse<Point>[]> {
  const points = await fetchContentful<Point>();

  return points;
}
