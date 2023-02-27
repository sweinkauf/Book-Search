const { Books } = require('../models');

const resolvers = {
  Query: {
    classes: async () => {
      return await Book.find({});
    }
  }
};

module.exports = resolvers;