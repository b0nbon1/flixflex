import React, { useState } from 'react';

import { NearTheater } from '../../components/views/explore/near-theater';

interface NearbyTheatreProps {}

const data = [
  {
    id: 1,
    title: 'Century Cinemax Garden City',
    info: 'Roysambu Off Exit 7 Thika Rd Nairobi garden city mall 2nd floor',
    image: require('../../images/cinema/theater-1.jpg'),
    stars: 5,
  },
  {
    id: 2,
    title: 'Anga Imax Nairobi',
    info:
      '1st Floor, 20th Century Building, Opposite Trans National House, Near City Hall, Mama Ngina St, Nairobi, Kenya',
    image: require('../../images/cinema/theater-2.jpg'),
    stars: 4.5,
  },
  {
    id: 3,
    title: 'Anga Sky, Panari Centre',
    info: 'The Panari Hotel, Mombasa Road, Nairobi',
    image: require('../../images/cinema/theater-3.jpg'),
    stars: 5,
  },
  {
    id: 4,
    title: 'Century Cinemax Junction',
    info: 'Junction Mall Parking Hall, Ngong Rd, Nairobi, Kenya',
    image: require('../../images/cinema/theater-4.jpg'),
    stars: 4.5,
  },
  {
    id: 5,
    title: 'Nyali Cinemax',
    info: 'Off Nyali Rd Opposite Nakumat Cinemax, Nyali Rd, Mombasa, Kenya',
    image: require('../../images/cinema/theater-5.jpg'),
    stars: 4,
  },
  {
    id: 6,
    title: 'Rupa Cinemas, Eldoret',
    info: 'Eldoret town',
    image: require('../../images/cinema/theater-6.jpeg'),
    stars: 5,
  },
];

export const NearbyTheatre: React.FC<NearbyTheatreProps> = () => {
  const [location, setLocation] = useState('');
  const handleLocation = () => {
    setLocation('Nairobi');
  };
  return (
    <NearTheater
      location={location}
      handleLocation={handleLocation}
      data={data}
    />
  );
};
