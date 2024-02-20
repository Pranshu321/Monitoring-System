import mongoose from 'mongoose'

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_API)
    console.log('Connected to MongoDB')
  } catch (err) {
    throw new Error('Error in connecting in MongoDB')
  }
}

export default connect
