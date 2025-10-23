import { mockUsers } from './mockData';

export function findUserByEmailAndPassword(email?: string, password?: string) {
  if (!email || !password) return null;
  return mockUsers.find(u => u.email === email && u.password === password) || null;
}
