import * as dao from "./dao.js";
export default function EnrollmentRoutes(app) {
  app.get("/api/enrollments/:userId", (req, res) => {
    const userid = req.params.userId;
    console.log(userid);
    const enrollments = dao.findEnrollmentsForUser(userid);
    res.send(enrollments);
  });
}
