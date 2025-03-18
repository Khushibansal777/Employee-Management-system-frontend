const employees = [
  {
    id: 1,
    firstname: "Amit",
    email: "e@e.com",
    password: "123",
    tasks: [
      {
        task_title: "Prepare Report",
        task_description: "Compile sales data for Q1.",
        task_category: "Reporting",
        task_date: "2025-03-17",
        active: true,
        newtask: false,
        completed: false,
        failed: false,
      },
      {
        task_title: "Client Meeting",
        task_description: "Discuss new contract terms.",
        task_category: "Meetings",
        task_date: "2025-03-18",
        active: false,
        newtask: true,
        completed: false,
        failed: false,
      },
    ],
    task_numbers: {
      active: 1,
      newtask: 1,
      completed: 0,
      failed: 0,
    },
  },
  {
    id: 2,
    firstname: "Rajesh",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        task_title: "Code Review",
        task_description: "Review pull requests for the project.",
        task_category: "Development",
        task_date: "2025-03-16",
        active: false,
        newtask: false,
        completed: true,
        failed: false,
      },
      {
        task_title: "Fix Bugs",
        task_description: "Resolve critical issues in the app.",
        task_category: "Development",
        task_date: "2025-03-20",
        active: true,
        newtask: false,
        completed: false,
        failed: false,
      },
      {
        task_title: "Deploy Update",
        task_description: "Push the latest version to production.",
        task_category: "Deployment",
        task_date: "2025-03-22",
        active: false,
        newtask: true,
        completed: false,
        failed: false,
      },
    ],
    task_numbers: {
      active: 1,
      newtask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 3,
    firstname: "Priya",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        task_title: "Design Wireframe",
        task_description: "Create UI wireframes for the new app.",
        task_category: "Design",
        task_date: "2025-03-19",
        active: true,
        newtask: false,
        completed: false,
        failed: false,
      },
      {
        task_title: "Update Documentation",
        task_description: "Revise API documentation.",
        task_category: "Documentation",
        task_date: "2025-03-21",
        active: false,
        newtask: false,
        completed: true,
        failed: false,
      },
    ],
    task_numbers: {
      active: 1,
      newtask: 0,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 4,
    firstname: "Suresh",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        task_title: "Data Backup",
        task_description: "Perform routine database backup.",
        task_category: "IT",
        task_date: "2025-03-15",
        active: false,
        newtask: false,
        completed: false,
        failed: true,
      },
      {
        task_title: "Security Audit",
        task_description: "Analyze system vulnerabilities.",
        task_category: "Security",
        task_date: "2025-03-23",
        active: true,
        newtask: false,
        completed: false,
        failed: false,
      },
    ],
    task_numbers: {
      active: 1,
      newtask: 0,
      completed: 0,
      failed: 1,
    },
  },
  {
    id: 5,
    firstname: "Neha",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        task_title: "Content Writing",
        task_description: "Write blog posts for marketing.",
        task_category: "Marketing",
        task_date: "2025-03-18",
        active: false,
        newtask: true,
        completed: false,
        failed: false,
      },
      {
        task_title: "SEO Optimization",
        task_description: "Improve website SEO performance.",
        task_category: "Marketing",
        task_date: "2025-03-25",
        active: true,
        newtask: false,
        completed: false,
        failed: false,
      },
    ],
    task_numbers: {
      active: 1,
      newtask: 1,
      completed: 0,
      failed: 0,
    },
  },
];
const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];
export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
