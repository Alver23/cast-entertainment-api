export const sequelizeMock = {
  sequelize: {
    transaction: (fn) => {
      return new Promise((resolve, reject) => {
        return fn({}).then(resolve, reject);
      })
    }
  }
}
