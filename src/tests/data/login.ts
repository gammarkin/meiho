/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable max-len */

const baseUsers = [
  { _id: { $oid: '6495bef6f96637320590e89e' }, username: 'tester', hashed_password: '$2b$10$jChBoO3MYQFpG5xzf7dcwOUZeVx1/ITtSfY9ReELeO7oUny2ivUpm', email: 'tester@tester.com', role: 'user', __v: { $numberInt: '0' } },
  { _id: { $oid: '64947894d7457023fe925375' }, username: 'Joey James', hashed_password: '$2b$10$e38KTgqfly9C/ooOi4l9Le0dZHsYoSt0lVGbCUlI4AvGYLxiOeTja', email: 'joey@email.com', role: 'tester', __v: { $numberInt: '0' } },
];
      
export const createdUser = { _id: { $oid: '6495bef6f96637320590e89e' }, username: 'test', hashed_password: '$2b$10$ZNz6kfkgNgAo25IkPwrrOOKjrXTxxiprBEIIumk.6h8hNAkOXs2za', email: 'test@tester.com', role: 'user', __v: { $numberInt: '0' } };
export const userToCreate = { username: 'test', password: 'bolinha', email: 'test@tester.com', role: 'user' };
    
export default baseUsers;
