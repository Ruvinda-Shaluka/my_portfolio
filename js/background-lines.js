// === Green Matrix Lines ===
function createGreenCodeLines() {
    const bg = document.getElementById('code-bg');
    const texts = [
        'System.out.println("Initializing...");',
        'for (int i = 0; i < 1000; i++) {',
        'public static void main(String[] args) {',
        'import java.util.*;',
        'console.log("Loading modules...");',
        'SELECT * FROM users WHERE active=1;',
        'ssh user@server.com -p 22',
        'git commit -m "Initial commit"',
        'ping 8.8.8.8 -c 4',
        'chmod +x deploy.sh'
    ];

    for (let i = 0; i < 20; i++) {
        const line = document.createElement('div');
        line.className = 'code-line';
        line.textContent = texts[Math.floor(Math.random() * texts.length)];

        // Random placement and timing
        line.style.top = `${Math.random() * 100}%`;
        line.style.animationDuration = `${10 + Math.random() * 10}s`;
        line.style.animationDelay = `${Math.random() * 5}s`;

        bg.appendChild(line);
    }
}

// === Load Everything ===
document.addEventListener('DOMContentLoaded', () => {
    // Start background lines
    createGreenCodeLines();
});
