# Submission

## Project Overview

My submission is a front-end app with API calls to [picsum.photos](https://picsum.photos/) to generate image cards. The app allows users to create new projects, edit existing projects, and delete projects. The app is built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/).

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version x.x.x)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) (recommended)

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/psidh/submission.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your-project
   ```

3. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

### Running the App

To run the Next.js app locally, follow these steps:

1. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. Open your web browser and visit [http://localhost:3000](http://localhost:3000) to view the app.

### Additional Commands

- Build the app for production:

  ```bash
  npm run build
  # or
  yarn build
  ```

- Start the production server:

  ```bash
  npm start
  # or
  yarn start
  ```

## Folder Structure

``` bash
├── src
│   ├── components
│   │   ├── Main.tsx
│   │   ├── Navbar.tsx 
│   │   └── Sidebar.tsx
│   ├── Interface
│   │   ├── ImageData.tsx
│   ├── app
│   │   ├── page.tsx
│   │   ├── layout.tsx 


```
# Main Component

The `Main` component is a React functional component that represents the main content of this app. It manages the state of generated image cards, allows users to create new projects, and provides the functionality to edit or delete existing projects.

## Components and Libraries Used

- **React**: The main library for building user interfaces in React applications.
- **Navbar**: An external component responsible for rendering the navigation bar.
- **ImageData**: An interface representing the structure of image data.

## State Management

### `useState`

1. **showModal**: A state variable to control the visibility of the modal (pop-up) for editing or creating new cards.

```jsx
const [showModal, setShowModal] = useState<boolean>(false);
```

2. **numOfCards**: A state variable to store the number of cards to be generated.

```jsx
const [numOfCards, setNumOfCards] = useState<number>(6);
```

3. **imageData**: A state variable to store an array of image data representing the generated cards.

```jsx
const [imageData, setImageData] = useState<ImageData[]>([]);
```

4. **selectedCard**: A state variable to store the data of the currently selected card for editing.

```jsx
const [selectedCard, setSelectedCard] = useState<ImageData | null>(null);
```

5. **newCard**: A state variable representing the data of a new card being created or edited.

```jsx
const [newCard, setNewCard] = useState<{ title: string; content: string }>({
  title: '',
  content: '',
});
```

## Functions

### `handleCardClick`

- **Description**: Opens the modal for creating a new project or editing an existing project.

### `handleModalClose`

- **Description**: Closes the modal.

### `handleGenerateCards`

- **Description**: Fetches a random page of images from [picsum.photos](https://picsum.photos/) and generates cards based on the retrieved data.

### `handleAddCard`

- **Description**: Adds a new card to the `imageData` state based on the `newCard` data.

### `handleReadCard`

- **Description**: Sets the selected card for editing and opens the modal.

### `handleEditCard`

- **Description**: Updates the data of the selected card based on the edited values.

### `handleDeleteCard`

- **Description**: Deletes the selected card.

## Rendering

- The component renders a navigation bar (`<Navbar />`) and a section containing generated cards and a modal.

- Cards are displayed with image thumbnails, author names, URLs, and dimensions.

- The modal allows users to edit existing cards or specify the number of cards to be generated.

## Styles

- The component uses Tailwind CSS classes for styling, making it responsive and visually appealing.

## Usage

- Import this component and use it within your application.

```jsx
import Main from '@/components/Main';

// ...

function App() {
  return (
    <>
      <Main />
    </>
  );
}
```

## Notes

- Ensure that the `Navbar` and `ImageData` components or interfaces are correctly imported and configured in your project.

---
