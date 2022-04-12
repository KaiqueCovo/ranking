import { User } from '@/models/user';

import { ContentfulItemResponse, fetchContentful } from '../fetchContentful';

export async function fetchAllUsers(): Promise<ContentfulItemResponse<User>[]> {
  const users = await fetchContentful<User>();

  console.log(users);
  return users;
}
