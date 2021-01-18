import React from 'react';
import { ExploreMoviesView } from '../../components/views/explore/movies-page';

const data = [
  {
    id: 2,
    title: 'John Wick 3',
    genre: 'action | thriller',
    time: '108 min',
    year: 2020,
    info:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus feugiat velit. Proin consectetur ipsum in nulla volutpat porttitor. Pellentesque feugiat scelerisque interdum.',
    image: require('../../images/johnwick.jpeg'),
  },
  {
    id: 3,
    title: 'Kevin Hart',
    genre: 'comedy | drama',
    time: '105 min',
    year: 2021,
    info:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
    image: require('../../images/kevin.jpg'),
  },
  {
    id: 4,
    title: 'Mary Queen of Scotts',
    genre: 'Drama | Horror',
    time: '108 min',
    info:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
    year: 2021,
    image: require('../../images/mary-queen.jpeg'),
  },
  {
    id: 1,
    title: 'Bad Hair',
    genre: 'Suspense | Horror',
    time: '108 min',
    year: 2021,
    info:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
    image: require('../../images/bad-hair.jpg'),
  },
];

interface ComingSoonProps {}

export const ComingSoon: React.FC<ComingSoonProps> = () => {
  const description =
    'Coming soon In Theathers , Do not miss out, you can start reserving or set reminders ';
  return (
    <ExploreMoviesView
      data={data}
      description={description}
      type="Coming Soon Movies"
    />
  );
};
