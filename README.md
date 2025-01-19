# Task Manager Frontend

This is the **frontend** for the Task Manager app, a simple application to
create, update, and manage tasks. The frontend is built using **Next.js** with
**TypeScript** and styled using **Tailwind CSS**.

---

## Features

- **View Tasks**: Displays a list of tasks.
    - Incomplete tasks appear at the top, ordered by the date they were last
      updated.
    - Completed tasks appear at the bottom.
- **Add Tasks**: A form to add a new task with a title and color.
- **Edit Tasks**: Update the title, color, or completion status of a task.
- **Delete Tasks**: Remove tasks from the list.
- **Task Status Toggle**: Mark tasks as complete/incomplete using a checkbox.

---

## Technologies Used

- **React**: For building UI components.
- **Next.js**: Framework for server-side rendering and routing.
- **TypeScript**: For type safety.
- **Tailwind CSS**: For styling.
- **React Icons**: For icons.
- **Fetch API**: For communicating with the backend API.

---

## Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Steps

1. Clone the repository:

    ```bash
    git clone <repository-url>
    cd task-manager-frontend

    ```

2. Install dependencies:

    ```bash
    npm install

    ```

3. Start the development server:

    ```bash
    npm run dev
    ```

## API Integration

The app communicates with the backend API for tasks:

```bash
GET /tasks: Fetch all tasks.
GET /task/:id: Fetch an existing task.
POST /tasks: Create a new task.
PUT /tasks/:id: Update an existing task.
DELETE /tasks/:id: Delete a task.
```

## Known Issues & Future Enhancements

### Known Issues

API Error:

When refreshing the page while editing a task, the application fails to retrieve
the task from the API. This issue arises because the `taskId` parameter is
extracted from the route synchronously, whereas the API call to fetch the task
data is asynchronous.

Pagination:

The task list does not support pagination, which could impact performance with a
large number of tasks.

### Future Enhancements

- Add user authentication for managing tasks.
- Add support for filtering tasks by color, completion status, or due date.
- Improve the UI for mobile responsiveness. Add drag-and-drop functionality for
  reordering tasks.

## License

This project is licensed under the MIT License.
