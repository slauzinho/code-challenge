import { faker } from '@faker-js/faker';

export default [
  {
    id: faker.datatype.uuid(),
    name: faker.music.songName(),
    genre: faker.music.genre(),
    artist: faker.name.firstName(),
    cover: 'https://loremflickr.com/200/200',
    url: 'https://www.bensound.com/bensound-music/bensound-dontforget.mp3',
  },
  {
    id: faker.datatype.uuid(),
    name: faker.music.songName(),
    genre: faker.music.genre(),
    artist: faker.name.firstName(),
    cover: 'https://loremflickr.com/200/200/nature',
    url: 'https://www.bensound.com/bensound-music/bensound-wildblood.mp3',
  },
  {
    id: faker.datatype.uuid(),
    name: faker.music.songName(),
    genre: faker.music.genre(),
    artist: faker.name.firstName(),
    cover: 'https://loremflickr.com/200/200/animals',
    url: 'https://www.bensound.com/bensound-music/bensound-autoreverse.mp3',
  },
  {
    id: faker.datatype.uuid(),
    name: faker.music.songName(),
    genre: faker.music.genre(),
    artist: faker.name.firstName(),
    cover: 'https://loremflickr.com/200/200/dog',
    url: 'https://www.bensound.com/bensound-music/bensound-worldonfire.mp3',
  },
  {
    id: faker.datatype.uuid(),
    name: faker.music.songName(),
    genre: faker.music.genre(),
    artist: faker.name.firstName(),
    cover: 'https://loremflickr.com/200/200/paris',
    url: 'https://www.bensound.com/bensound-music/bensound-afterlight.mp3',
  },
];
