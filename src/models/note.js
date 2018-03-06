export default function note(sequelize, DataTypes) {
  return sequelize.define('notes', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      required: true,
    },
    content: {
      type: DataTypes.TEXT,
      required: true,
    },
  });
};
