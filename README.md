# Whiteboard Application
https://white-board-opal.vercel.app/

## Overview

This project is an interactive whiteboard application built using React and Konva. It allows users to draw, scribble, and create shapes on a virtual canvas, with additional features like color selection and screen recording via WebRTC.

## Features

- **Scribbling and Drawing**: Freehand drawing functionality using the mouse or touch input.
- **Shapes**: Users can draw various shapes (lines, rectangles, circles) on the canvas.
- **Color Selection**: Choose different colors for drawing and shapes.
- **Screen Recording**: The application allows users to record their screen and the whiteboard interactions using WebRTC.
- **Undo/Redo**: Basic undo/redo functionality to reverse or restore previous actions on the canvas.

## Technologies Used

- **Frontend**: React.js, Konva.js (for handling canvas operations)
- **Screen Recording**: WebRTC for capturing and saving the screen activities
- **State Management**: React's Context API
- **Styling**: CSS for basic layout and design

## How to Run the Project

### Prerequisites

- Node.js (version 14.x or higher)
- pnpm (preferred) or npm/yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/whiteboard-app.git
2. Navigate to the project directory:
   ```bash
   cd whiteboard-app
3. Install the dependencies:
   ```bash
   pnpm install

### Running the Project

To run the development server, use the following command:
   ```bash
   pnpm start
   ```
This will start the application on http://localhost:3000.

### Build for Production

To create a production build, use the following command:
   ```bash
   pnpm run build
   ```

### Testing the Production Build Locally

If you'd like to test the production build locally, you can use a simple HTTP server:
   ```bash
   pnpm serve -s build
   ```
This will serve the production build locally on http://localhost:5000

## Future Improvements

- Adding more shape types (e.g., triangles, polygons).
- Implementing real-time collaboration for multiple users.
- Exporting the canvas content as an image or PDF.
- Advanced screen recording options.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
