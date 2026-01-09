import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

console.log('Server starting...');
console.log('Directory:', __dirname);

// Serve static files
app.use(express.static(__dirname));

// Root → login
app.get('/', (req, res) => {
    res.redirect('/screens/login.html');
});

// Screens route
app.get('/screens/:filename', (req, res) => {
    const filePath = path.join(__dirname, 'screens', req.params.filename);
    fs.existsSync(filePath)
        ? res.sendFile(filePath)
        : res.status(404).send('File not found');
});

// Direct html access
app.get('/:filename', (req, res) => {
    const filename = req.params.filename;

    if (filename.match(/\.(js|css|png|jpg|jpeg|gif|ico|json)$/)) {
        return res.status(404).end();
    }

    const screensPath = path.join(__dirname, 'screens', filename);
    if (fs.existsSync(screensPath)) {
        return res.sendFile(screensPath);
    }

    res.redirect('/screens/login.html');
});

// Health check
app.get('/api/status', (_, res) => {
    res.json({ status: 'OK', time: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});