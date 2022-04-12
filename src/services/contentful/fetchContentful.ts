import { createClient } from 'contentful';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface ContentfulItemResponse<T = any> {
  fields: T;
}

interface ContentfulResponse {
  total: number;
  skip: number;
  limit: number;
  items: ContentfulItemResponse[];
}

export async function fetchContentful<T>(contentType = 'users'): Promise<ContentfulItemResponse<T>[]> {

  const client = createClient({
    space: process.env.NEXT_PUBLIC_CF_SPACE_ID || '',
    accessToken: process.env.NEXT_PUBLIC_CF_DELIVERY_ACCESS_TOKEN || '',
  });

  const { items } = await client.getEntries<ContentfulResponse>({ content_type: contentType });

  return items as ContentfulItemResponse[];
}
