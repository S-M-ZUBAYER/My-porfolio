import img1 from "../assets/TaskManagementSystem/login.jpg";
import img3 from "../assets/TaskManagementSystem/Employee/addNewEmpoyee.jpg";
import img4 from "../assets/TaskManagementSystem/Employee/EditEmployee.jpg";
import img5 from "../assets/TaskManagementSystem/Employee/removeAndDisableEmpoyee.jpg";
import img6 from "../assets/TaskManagementSystem/dashboard/dashboard.jpg";
import img7 from "../assets/TaskManagementSystem/dashboard/task details.jpg";
import img8 from "../assets/TaskManagementSystem/dashboard/upload resource.jpg";
import img9 from "../assets/TaskManagementSystem/dashboard/upload test report.jpg";
import img10 from "../assets/TaskManagementSystem/project/createProject.jpg";
import img11 from "../assets/TaskManagementSystem/project/projectList.jpg";
import img12 from "../assets/TaskManagementSystem/project/createtask.jpg";
import img13 from "../assets/TaskManagementSystem/project/ProjectWiseTask.jpg";
import img14 from "../assets/TaskManagementSystem/project/taskDetails.jpg";
import img15 from "../assets/TaskManagementSystem/project/taskListUnderAproject.jpg";
import img17 from "../assets/TaskManagementSystem/project/uploadDiscussionInfoForTask.jpg";
import img18 from "../assets/TaskManagementSystem/TaskReport/DateWisePersonTaskReport.jpg";
import img19 from "../assets/TaskManagementSystem/TaskReport/DateWisePersonTaskReport1.jpg";
import img20 from "../assets/TaskManagementSystem/BugAndSolution/BugList.jpg";
import img21 from "../assets/TaskManagementSystem/BugAndSolution/ShowBuglist.jpg";
import img22 from "../assets/TaskManagementSystem/BugAndSolution/CreateNewBugDetails.jpg";

const TaskManagementSystemData = {
    title: "Task Management System",

    overview: `The Project & Task Management System is a centralized platform designed
to manage projects, tasks, bugs, and employees efficiently. It enables real-time
project tracking, task assignments, document sharing, bug reporting, and team
collaboration with approval and review workflows for admins, team leaders, and SQA members.`,

    keyFeatures: [
        "Real-time project dashboard with task status tracking",
        "Detailed project and task management with document support",
        "Bug reporting, assignment, and testing workflow",
        "Employee management with department-wise control"
    ],

    categories: [
        {
            title: "Dashboard",
            description: [
                "Displays all projects with their running tasks.",
                "Tasks are categorized by status: To Do, In Progress, Completed.",
                "Shows assigned team members for each task.",
                'Admin can delete only tasks in "To Do" status.'
            ],
            images: [img1, img6]
        },
        {
            title: "Project Management",
            description: [
                "Complete list of all projects with main information.",
                "Each project contains multiple tasks with different statuses.",
                "Assigned members can access task resources, discussion docs, and detailed info.",
                "Admin can edit tasks and upload documents/resources.",
                "Team members can update task status for review.",
                "SQA and team leaders receive notifications for review/testing.",
                "Approved tasks marked as completed; otherwise reverted to 'In Progress'."
            ],
            images: [img10, img11, img12, img7, img8, img9]
        },
        {
            title: "Task Management",
            description: [
                "Project-wise tasks displayed in summarized card format.",
                "Admin and assigned members can edit tasks.",
                "Admin can delete tasks when necessary."
            ],
            images: [img13, img17, img14, img15]
        },
        {
            title: "Bug Management",
            description: [
                "Bugs reported by customers/testers uploaded by admin or team leaders.",
                "Bug reports include description, attachments, and project references.",
                "Bugs assigned to specific team members.",
                "Assigned members get notifications to resolve issues.",
                "After fixing, bugs sent for testing by SQA/team leaders."
            ],
            images: [img20, img21, img22]
        },
        {
            title: "Task Reports",
            description: [
                "Team members submit daily activity reports indicating tasks worked on.",
                "Reports can include descriptions, documents, and progress notes.",
                "Team leaders/supervisors monitor employee activity and performance.",
                "Provides organized overview of task completion and team productivity."
            ],
            images: [img18, img19]
        },
        {
            title: "Employee Management",
            description: [
                "Displays employee list with category-based color indicators.",
                "Employees can be managed by department.",
                "Admin can edit employee information.",
                "Admin can disable or remove employees when required."
            ],
            images: [img3, img4, img5]
        }
    ],

    technologies: [
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Zustand",
        "React.js",
        "Vite",
        "Firebase",
        "Node.js",
        "ExpressJS",
        "JWT",
        "MySQL",
        "Swagger UI"
    ],

    links: [
        {
            label: "Live Site",
            url: "https://grozziie.zjweiting.com:58235/"
        },
        // {
        //     label: "GitHub Client Site",
        //     url: "https://github.com/S-M-ZUBAYER/Study-Zone-Client-Site"
        // },
        // {
        //     label: "GitHub Server Site",
        //     url: "https://github.com/S-M-ZUBAYER/Study-Zone-Server-Site"
        // }
    ]
};

export default TaskManagementSystemData;
