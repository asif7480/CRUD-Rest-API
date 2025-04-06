import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema(
    {
        comment: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            enum: [1,2,3,4,5],
            required: true
        }
    }, 
    { timestamps: true }
)

const Feedback = mongoose.model("Feedback", feedbackSchema)
export default Feedback