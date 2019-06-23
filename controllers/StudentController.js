import students from '../dummy/students.js';

class StudentController {
	// Get all students
	static getAllStudents(req, res) {
		return res.status(200).json({
			students,
			message: "All the students",
		});
	}
	// Get a single student
	static getSingleStudent(req, res) {
		const findStudent = students.find(student => student.id === parseInt(req.params.id, 10));
		if (findStudent) {
			return res.status(200).json({
				student: findStudent,
				message: "A single student record",
			});
		}
		return res.status(404).json({
			message: "Student record not found",
		});
	}
	// Create a student
	static createStudent(req, res) {
		const findStudent = students.find(student => student.email === req.body.email);
		if (findStudent) {
			return res.status(422).json({
				message: "Student email already exists!",
			});
		}
		const last = students.push(req.body);
		return res.status(201).json({
			student: students[last - 1],
			message: "Student created successfully!",
		});
	}
	// Update a student
	static updateStudent(req, res) {
		const student = students.find(student => student.id === +req.params.id);
		const studentIndex = students.indexOf(student);
		if (studentIndex === -1) {
			return res.status(404).json({
				message: "Student not found!",
			});
		}
		students[studentIndex] = req.body;
		return res.status(202).json({
			student: students[studentIndex],
			message: "Student updated successfully!",
		});
	}
	// Delete a student
	static deleteStudent(req, res) {
		const student = students.find(student => student.id === +req.params.id);
		const studentIndex = students.indexOf(student);
		if (studentIndex === -1) {
			return res.status(404).json({
				message: "Student not found!",
			});
		}
		students.splice(studentIndex, 1);
		return res.status(202).json({
			students,
			message: "Student delete successfully!",
		});
	}
}
export default StudentController;