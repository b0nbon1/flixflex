import React from 'react';
import { ExploreMoviesView } from '../../components/views/explore/movies-page';

const data = [
  {
    id: 2,
    title: 'Lupin',
    genre: 'action | thriller',
    time: '108 min',
    year: 2020,
    info:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus feugiat velit. Proin consectetur ipsum in nulla volutpat porttitor. Pellentesque feugiat scelerisque interdum.',
    image: require('../../images/lupin.jpg'),
  },
  {
    id: 3,
    title: 'Wonder Woman 1984',
    genre: 'comedy | Action',
    time: '105 min',
    year: 2021,
    info:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
    image: require('../../images/ww84.jpg'),
  },
  {
    id: 4,
    title: 'Warrior',
    genre: 'Action | Horror',
    time: '108 min',
    info:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
    year: 2021,
    image: require('../../images/warrior.jpg'),
  },
  {
    id: 1,
    title: 'Run',
    genre: 'Drama | Horror',
    time: '108 min',
    year: 2021,
    info:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
    image: require('../../images/run.jpg'),
  },
];

interface NowPlayingProps {}

export const NowPlaying: React.FC<NowPlayingProps> = () => {
  const description =
    'Now In Theathers , All the greatest awaiting show are now been played, Click book to get yourself a ticket.';
  return (
    <ExploreMoviesView
      data={data}
      description={description}
      type="Upcoming Movies"
    />
  );
};
