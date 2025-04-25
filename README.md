
# TodoApp

A simple Todo list application built with **React**. This app allows users to manage their tasks efficiently by adding, completing, and deleting tasks. Additionally, it includes a filtering feature to sort tasks based on their completion status, and data is saved in the browser's local storage for persistence.

## Features

- **Add Tasks**: Quickly add new tasks to your list.
- **Mark Tasks as Complete**: Toggle the task completion status.
- **Delete Tasks**: Easily remove tasks from the list.
- **Filter Tasks**: View tasks based on their status (All, Open, Completed).
- **Persistent Data**: Tasks are saved to your browser's local storage and remain even after a page reload.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/suvani-ctrl/TodoApp.git
   ```

2. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

4. Visit [http://localhost:5173](http://localhost:5173) in your browser to view the app.

## Usage

1. **Add New Tasks**: Type into the input field and click the "Add" button to add new tasks.
2. **Mark Tasks as Complete**: Click the "Done" button next to a task to mark it as completed.
3. **Delete Tasks**: Use the "Delete" button to remove a task.
4. **Filter Tasks**: Click on "All", "Open", or "Completed" tabs to view filtered tasks based on their completion status.

## Tech Stack

- **React**: For building the user interface.
- **Vite**: For fast development and bundling.
- **Local Storage**: For saving and persisting tasks across sessions.

## Screenshots

### General View

Here is the default view of the TodoApp, where you can see all tasks.

![image](https://github.com/user-attachments/assets/11bff66b-bada-4f98-a1e3-e5895ef9490c)

### Button to Mark as Done

This is how the "Done" button looks for marking tasks as complete.

![image](https://github.com/user-attachments/assets/99c175cf-d2b5-40a8-ab44-dc5109f5d7c5)

### After Task Deletion

Tasks can be deleted, and the UI will update accordingly. Here’s the view after a task is removed.

![image](https://github.com/user-attachments/assets/63077177-9189-4d3c-83d2-8bbd7c325a43)

### Local Storage Persistence

Tasks are saved to local storage, ensuring that they persist even after a page reload.

![image](https://github.com/user-attachments/assets/c0892935-9076-48e7-b4d1-c21024ba2d62)
