import model from "./model.js";

export async function storeQuizSubmission(studentId, quizId, answers) {
    try {
        const submission = {
            studentId,
            quizId,
            answers,
        };
        await model.create(submission);
        console.log("Quiz submission stored successfully.");
    } catch (error) {
        console.error("Error storing quiz submission:", error);
        throw error;
    }
}
