import { DELETE, GET, PATCH, POST } from '../helper';

export const getAllUsers = async (): Promise<User[]> => {
  const allUsers = await GET('user');
  return allUsers;
};

export const getUser = async (id: number): Promise<User> => {
  const user = await GET(`user/${id}`);
  return user;
};

export const createUser = async (user: any): Promise<User> => {
  const created = await POST('user/create', user);
  return created;
};

export const updateUser = async (updatedUser: any): Promise<User> => {
  const updated = await PATCH(`user/${updatedUser.id}`, updatedUser);
  return updated;
};

export const deleteUser = async (id: number): Promise<User> => {
  const deleted = await DELETE(`user/${id}`);
  return deleted;
};
