import asyncHandler from "express-async-handler"
import Feedback from "../models/feedback.model.mjs"
import { ErrorResponse } from "../utils/ErrorResponse.mjs"

// @DESC    getAllFeedbacks
// @ROUTE   GET /api/v1/feedback/
// @ACCESS  Public
const getAllFeedback = asyncHandler( async(request, response) => {
    const feedbacks = await Feedback.find()
    const limit = parseInt(request.query.limit)

    if(!isNaN(limit) && limit > 0){
        return response.status(200).json(feedbacks.slice(0,limit))
    }
    response.status(200).json(feedbacks)
})

// @DESC    getSingleFeedback
// @ROUTE   GET /api/v1/feedback/:id
// @ACCESS  Public
const getSingleFeedback = asyncHandler( async(request, response) => {
    const { id } = request.params

    const feedback = await Feedback.findById(id)

    if(!feedback){
        throw new ErrorResponse(404, "Feedback not found.")
    }

    response.status(200).json({ feedback })
})

// @DESC    addFeedback
// @ROUTE   POST /api/v1/feedback/
// @ACCESS  Public
const addFeedback = asyncHandler( async(request, response) => {
    const { comment, rating } = request.body

    if(!comment || !rating){
        throw new ErrorResponse(400, "Input all fields")
    }

    const feedback = await Feedback.create({
        comment,
        rating
    })

    response.status(201).json({ message: "New feedback added.", feedback })
})

// @DESC    updateFeedback
// @ROUTE   PUT /api/v1/feedback/:id
// @ACCESS  Public
const updateFeedback = asyncHandler( async(request, response) => {
    const feedback = await Feedback.findById(request.params.id)
    if(!feedback){
        throw new ErrorResponse(404, "Feedback not found.")
    }

    const updatedFeedback = await Feedback.findByIdAndUpdate(request.params.id, request.body, { new: true })

    response.status(200).json({ message: "Feedback updated.", feedback: updatedFeedback })
})

// @DESC    deleteFeedback
// @ROUTE   DELETE /api/v1/feedback/:id
// @ACCESS  Public
const deleteFeedback = asyncHandler( async(request, response) => {
    const feedback = await Feedback.findById(request.params.id)
    if(!feedback){
        throw new ErrorResponse(404, "Feedback not found.")
    }

    await Feedback.findByIdAndDelete(request.params.id)

    response.status(200).json({ message: "Feedback deleted."})
})

export {
    getAllFeedback,
    getSingleFeedback,
    addFeedback,
    updateFeedback,
    deleteFeedback
}