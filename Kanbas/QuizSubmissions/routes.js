import * as quizSubmissionDao from "./dao.js";
export default function QuizSubmissionRoutes(app) {
 
    app.post("/api/quizzes/:quizId/submitQuiz", async (req, res) => {
        try {
            const { studentId, answers } = req.body;
            const { quizId } = req.params;

            if (!studentId || !quizId || !answers || !Array.isArray(answers)) {
                return res.status(400).send("Invalid submission data.");
            }

            await quizSubmissionDao.storeQuizSubmission(studentId, quizId, answers);
            res.status(200).send("Success");
        } catch (error) {
            console.error("Error handling quiz submission:", error);
            res.status(500).send("Internal server error.");
        }
    });

    app.get("/api/quizzes/:quizId/submission", async(req, res) => {
        const { quizId } = req.params;
        const data = await quizSubmissionDao.getSubmissionData(quizId);
        res.json(data);
    });
}
