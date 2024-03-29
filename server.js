import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import compression from 'compression'; // Import compression middleware

const __dirname = path.dirname(fileURLToPath(import.meta.url)); // Define __dirname using import.meta.url
const app = express();
const PORT = process.env.PORT || 3000;

// Use compression middleware
app.use(compression());

// Serve static files (like your HTML file)
app.use(express.static(path.join(__dirname, 'dist')));

// Set cache control headers for static files
app.use((req, res, next) => {
    res.set('Cache-Control', 'public, max-age=31557600'); 
    next();
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



