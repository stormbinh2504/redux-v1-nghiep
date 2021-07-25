var initialState = [
  {
    id: 1,
    name: "Iphone 6",
    price: 600,
    status: true,
  },
  {
    id: 2,
    name: "Oppo F15",
    price: 500,
    status: false,
  },
  {
    id: 3,
    name: "Samsung note 8",
    price: 800,
    status: true,
  },
];

const products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};

export default products;
