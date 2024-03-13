const { userProvider } = require('../database/models/userProvider');

const inserUserProvider =  (data) => {
    try {
        const createUserProvider = userProvider.create(data);
        return createUserProvider
    } catch (error) {
        console.error('Error inserting user provider:', error);
        throw new Error('Failed to insert user provider');
    }
};


const getUserProviderByEmail = async (email) => {
    try {
        const foundUserProvider = await userProvider.findOne({ where: { email } });
        return foundUserProvider;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to get user provider');
    }
};
const getUserProvider = async (id) => {
    try {
        const foundUserProvider = await userProvider.findByPk(id);
        return foundUserProvider;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to get user provider');
    }
};
const getAllUserProviders = async () => {
    try {
        const allUserProviders = await userProvider.findAll();
        return allUserProviders;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to get all user providers');
    }
};

module.exports = {
    inserUserProvider,
    getUserProvider,
    getUserProviderByEmail,
    getAllUserProviders
};
