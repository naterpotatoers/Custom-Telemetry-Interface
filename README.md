# Astraeus-UI
Interface for a multipurpose board designed for advanced avionic systems built using the libhal open source embedded framework.  
![astraeus-ui-demo](https://github.com/naterpotatoers/Astraeus-UI/assets/41933236/6e96071b-4279-4640-ab0c-052d9c0df830)

# Running the frontend locally
1. Make sure you're in the root directory and have node installed
2. Install dependencies
   ```bash
   npm install
   ```
3. Run the app
   ```bash
     npm run dev
   ```
4. Open [http://localhost:5173/](http://localhost:5173/) with your browser to see the result.

# Running the backend locally
1. Navigate to the backend directory
   ```bash
   cd server
   ```
2. Install dependencies
   ```bash
    npm install
   ```
   1.5 Might need to build the app
   ```bash
    npm run build
   ```
3. Run the app
   ```bash
   npm start
   ```
4. Open [http://localhost:3000/](http://localhost:3000/) with your browser to see the result.
5. Send POST requests to [http://localhost:3000/](http://localhost:3000/) with a json body like so:
   ```json
   {
     "text": "Your text here"
   }
   ```
6. Retrieve the response from the server by making GET requests to [http://localhost:3000/](http://localhost:3000/)


