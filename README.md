# Data Table Component with React Table & React Query

## 📝 Project Summary

This project demonstrates a fully functional and customizable **Data Table** built using **React Table** (`@tanstack/react-table`). The component supports:

- **Sorting**: Allows sorting data by columns.
- **Pagination**: Enables navigation through data pages.
- **Filtering**: Includes global and column-specific filtering.
- **Dynamic Rendering**: Renders table headers, body, and rows dynamically using `flexRender`.

The table is styled using custom UI components and can easily be integrated into any React-based project.

---

## 🚀 Features

- **Dynamic Table Rendering**: Handles a variety of data structures and column definitions.
- **Search Functionality**: Global search input for filtering rows.
- **Pagination**: Built-in pagination for better navigation of large datasets.
- **Customizable**: Easily extendable to meet specific project requirements.

---

## 🛠️ Installation and Setup

Follow these steps to run the project locally:

### Prerequisites

- Node.js (>= 16.x)
- npm (>= 7.x) or yarn (>= 1.x)

### Steps to Run Locally

1. **Clone the Repository**

   ```bash
   git https://github.com/raviycoder/user_management.git
   cd user_management
   ```

2. **Install Dependencies**

   Use your package manager of choice:

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the Development Server**

   Run the following command to start the project locally:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Access the Application**

   Open your browser and navigate to:

   ```
   http://localhost:3000
   ```

---

## 📂 Project Structure

Here's an overview of the important files and folders:

```plaintext
src/
├── components/
│   ├── providers/
│   │   ├── Tanstack.tsx       # Tanstack Query component
│   ├── table/
│   │   ├── Pagination.tsx     # Pagination component
│   ├── ui/
│   │   ├── input.tsx          # Input component for search
│   │   ├── table.tsx          # Table UI components
├── hooks/
│   ├── useUsers.ts            # Custom hook for fetching and managing user data
├── app/
│   ├── types/
│   │   ├── user.ts            # Types of user data
│   ├── users/
│   │   ├── columns.tsx        # Column of user
│   │   ├── data-table.tsx     # Table of user data
│   │   ├── page.tsx           # Page of user data
│   ├── globals.tsx               
│   ├── layout.tsx             
│   ├── page.tsx               # Main entry point for User Data
```

---

## 🧪 Example Usage

### Data

Here’s an example of the data structure used by the table:

```typescript
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
```

### Component Usage

To use the `DataTable` component in your project:

```tsx
import { DataTable } from "@/components/table/DataTable";

const columns: ColumnDef<User, any>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "address.city",
    header: "City",
  },
];

const data: User[] = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
];

export default function App() {
  return <DataTable columns={columns} data={data} />;
}
```