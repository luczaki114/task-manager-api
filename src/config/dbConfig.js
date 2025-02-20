const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        if (!process.env.MONGODB_URI) {
            throw new Error('MONGODB_URI is not defined in environment variables');
        }
        
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB connected successfully');
        
        // Optional: Test the connection by querying the movies collection
        const Movie = mongoose.model('Movie', new mongoose.Schema({}, { strict: false }), 'movies');
        const movie = await Movie.findOne({ title: 'Back to the Future' });
        console.log('Test query successful:', movie.title);
        
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

module.exports = connectDB;