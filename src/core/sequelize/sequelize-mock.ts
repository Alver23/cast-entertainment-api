export const mockSequelize = {
  sequelize: {
    transaction: (fn) => {
      return new Promise((resolve, reject) => {
        return fn({}).then(resolve, reject);
      })
    }
  }
}
