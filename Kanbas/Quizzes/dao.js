import model from "./model.js";
export async function findQuizzesForCourse(courseId) {
    return await model.find({ course: courseId });
}
export async function getQuizById(quizId) {
    return await model.find({ _id: quizId });
}
export function createQuizzes(quiz) {
    delete quiz._id;
    return model.create(quiz);
}
export function deleteQuizzes(quizId) {
    return model.deleteOne({ _id: quizId });
}
export function getQuizQuestionsById(quizId) {
    return model.findById(quizId, "questions");
}
export async function createQuizQuestions(quizId, question) {
    try {
        const updatedQuiz = await Quiz.findByIdAndUpdate(
            quizId,
            { $push: { questions: question } }, 
            { new: true, runValidators: true } 
        );
        
        if (!updatedQuiz) {
            throw new Error("Quiz not found");
        }
        
        return updatedQuiz;
    } catch (error) {
        throw new Error(`Failed to add question: ${error.message}`);
    }
}

export function updateQuizById(quizId, quizUpdates) {
    return model.updateOne({ _id: quizId }, quizUpdates);
  }
