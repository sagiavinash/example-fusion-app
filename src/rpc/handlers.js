const handlers = __NODE__ && {
  getUser: async (args, ctx) => ({
    user: {
      id: 123,
      name: 'John Doe',
    },
  })
};

export default handlers;
