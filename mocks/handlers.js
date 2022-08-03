import { rest } from 'msw';
import songs from './songs';

const getSongs = () => {
  return rest.get('/api/songs', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(songs));
  });
};

export const handlers = [getSongs()];
