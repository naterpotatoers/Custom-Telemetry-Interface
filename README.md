# Running the frontend locally
0. Make sure you're in the root directory and have node installed
1. Install dependencies
   ```bash
   npm install
   ```
2. Run the app
   ```bash
     npm run dev
   ```
3. Open [http://localhost:5173/](http://localhost:5173/) with your browser to see the result.

# Running the backend locally

0. Navigate to the backend directory
   ```bash
   cd server
   ```
1. Install dependencies
   ```bash
    npm install
   ```
   1.5 Might need to build the app
   ```bash
    npm run build
   ```
2. Run the app
   ```bash
   npm start
   ```
3. Open [http://localhost:3000/](http://localhost:3000/) with your browser to see the result.
4. Send POST requests to [http://localhost:3000/](http://localhost:3000/) with a json body like so:
   ```json
   {
     "text": "Your text here"
   }
   ```
5. Retrieve the response from the server by making GET requests to [http://localhost:3000/](http://localhost:3000/)

