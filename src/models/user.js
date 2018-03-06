export default function user(sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      required: true,
      validate: {
        len: [1, 30],
      },
    },
    password: {
      type: DataTypes.STRING,
      required: true,
    },
  });
};
