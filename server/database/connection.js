const mongoose = require('mongoose');

// defone the function to connect to the mongoDB database.
const connectDB = async () => {
    try {
        // define the mongodb database connection string
        const con = await mongoose.connect(process.env.MONGO_URI, {
            // to address unwanted warnings in the console.
            useNewUrlParser: true,
            useUnifiedTopology: true,
            //useFindAndModify: false,
            //useCreateIndex: true
        });

        console.log(`mongoDB connected: ${con.connection.host}`);
    } catch (err) {
        console.log(err);
        console.log("oops, unable to connect to mongoDB");
        process.exit(1);
    }
}

module.exports = connectDB;