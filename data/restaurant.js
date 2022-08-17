export default function RestaurantData() {
  return [
    {
      id: 0,
      name: "Nando's",
      image: 'https://picsum.photos/200',
      address: 'Main street',
      lat: 51.509865,
      latitude: 51.509865,
      long: -0.093157005255941,
      longitude: -0.093157005255941,
      rating: 4.8,
      short_description:
        "Nando's is a chain of fast casual restaurants in London. It is known for its sushi and other Japanese-inspired dishes.",
      dishes: [
        {
          id: 0,
          name: 'Test dish one',
          description: 'Sushi',
          price: '£10',
          image: 'https://picsum.photos/200',
        },
        {
          id: 1,
          name: 'Test dish two',
          description: 'Sushi',
          price: '£10',
          image: 'https://picsum.photos/200',
        },
        {
          id: 2,
          name: 'Test dish three',
          description: 'Sushi',
          price: '£10',
          image: 'https://picsum.photos/200',
        },
      ],
      genre: 'Japanese',
    },
    {
      id: 1,
      name: 'Yo! Sushi',
      image: 'https://picsum.photos/200',
      address: 'Tottenham Court Road',
      lat: 51.509865,
      latitude: 51.519865,
      long: -0.132957005255941,
      longitude: -0.093157005255941,
      rating: 3,
      short_description:
        'Yo! Sushi is a chain of fast casual restaurants in London. It is known for its sushi and other Japanese-inspired dishes.',
      dishes: [
        {
          id: 3,
          name: 'Test fruit dish one',
          description: 'Sushi',
          price: '£10',
          image: 'https://picsum.photos/200',
        },
        {
          id: 4,
          name: 'Test fruit dish two',
          description: 'Sushi',
          price: '£10',
          image: 'https://picsum.photos/200',
        },
        {
          id: 5,
          name: 'Test fruit dish three',
          description: 'Sushi',
          price: '£10',
          image: 'https://picsum.photos/200',
        },
      ],
      genre: 'Japanese',
    },
  ];
}
