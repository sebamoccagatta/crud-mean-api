const {  mongoose } = require("mongoose");
require('dotenv').config();

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('Base de datos conectada');
    } catch (error) {
        console.log(error);

        process.exit(1);
    }
}

module.exports = connection;