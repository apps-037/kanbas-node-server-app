import model from "./model.js";
import { findCoursesForUser } from "../Enrollments/dao.js"; 

export function findAllCourses() {
  return model.find();
}
export async function findCoursesForEnrolledUser(userId) {
  try {
    const enrolledCourses = await findCoursesForUser(userId);
    return model.find({ number:  { $in: enrolledCourses } });
  } catch (error) {
    console.error("Error fetching courses for user:", error);
    throw error;
  }
}
export function createCourse(course) {
  delete course._id;
  return model.create(course);
}
export function updateCourse(courseId, courseUpdates) {
  return model.updateOne({ _id: courseId }, { $set: courseUpdates });
}

export function deleteCourse(courseId) {
  return model.deleteOne({ _id: courseId });
 }

 // export function findCoursesForEnrolledUser(userId) {
//   const { courses, enrollments } = Database;
//   const enrolledCourses = courses.filter((course) =>
//     enrollments.some(
//       (enrollment) =>
//         enrollment.user === userId && enrollment.course === course._id
//     )
//   );
//   return enrolledCourses;
// }
// export function createCourse(course) {
//   const newCourse = { ...course, _id: Date.now().toString() };
//   Database.courses = [...Database.courses, newCourse];
//   return newCourse;
// }
// export function deleteCourse(courseId) {
//   const { courses, enrollments } = Database;
//   Database.courses = courses.filter((course) => course._id !== courseId);
//   Database.enrollments = enrollments.filter(
//     (enrollment) => enrollment.course !== courseId
//   );
// }
// export function updateCourse(courseId, courseUpdates) {
//   const { courses } = Database;
//   const course = courses.find((course) => course._id === courseId);
//   Object.assign(course, courseUpdates);
//   return course;
// }
