module.exports = (sequelize, DataTypes) => {

    // Model configuration
	let User = sequelize.define('user', {
        id: {
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            type: DataTypes.UUID
        },
        email: {
            allowNull: false,
            notEmpty: true,
            type: DataTypes.STRING,
        },
        password: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        name: {
            allowNull: false,
            notEmpty: true,
            type: DataTypes.STRING
        },
        surname: {
            allowNull: false,
            notEmpty: true,
            type: DataTypes.STRING
        },
        type: {
            defaultValue: 0,
            type: DataTypes.INTEGER
        },
        canAccessTowTruck: {
            defaultValue: false,
            type: DataTypes.BOOLEAN
        },
        isActive: {
            defaultValue: false,
            type: DataTypes.BOOLEAN
        },
        atWork: {
            defaultValue: false,
            type: DataTypes.BOOLEAN
        },
        isTechnicianDenyResponsible: {
            defaultValue: false,
            type: DataTypes.BOOLEAN
        }
    }, {
        paranoid: true,
        indexes: [
            {
              unique: true,
              fields: ['email']
            }
        ]
    });

    // Define methods
    require('./method/user')(User);

	// Model association
	User.associate = (models) => {
        User.hasMany(models.userToken, { as: 'userTokens', onDelete: 'cascade' });
    };
    
	// Return model
	return User;

}