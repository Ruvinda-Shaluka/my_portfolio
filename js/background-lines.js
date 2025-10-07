// === Code Snippets for Tabs ===
const snippets = {
    java: `// Student Developer - Java Style
public class Developer {
    private String name = "Ruvinda Shaluka";
    private String status = "Computer Science Student";
    private String[] skills = {"Java", "HTML", "CSS", "JavaScript", "Python"};
    private boolean eagerToLearn = true;

    public void introduce() {
        System.out.println("Hello! I'm " + name + ".");
        System.out.println("I'm a student exploring fullstack development and clean code.");
    }

    public void showLearningPath() {
        System.out.println("📚 Currently learning:");
        System.out.println("   • Web Technologies");
        System.out.println("   • Network & Security Basics");
    }

    public static void main(String[] args) {
        Developer dev = new Developer();
        dev.introduce();
        dev.showLearningPath();
    }
}`,
    python: `# Student Developer - Python Style
class Developer:
    def __init__(self):
        self.name = "Ruvinda Shaluka"
        self.status = "Computer Science Student"
        self.skills = ["Python", "Flask", "Django", "SQL"]
        self.eager_to_learn = True

    def introduce(self):
        print(f"Hello! I'm {self.name}.")
        print("I'm a student exploring backend development and security.")

    def show_learning_path(self):
        print("📚 Currently learning:")
        print("   • Flask & Django")
        print("   • Cyber Security Basics")

if __name__ == "__main__":
    dev = Developer()
    dev.introduce()
    dev.show_learning_path()`,
    js: `// Student Developer - JavaScript Style
class Developer {
    constructor() {
        this.name = "Ruvinda Shaluka";
        this.status = "Computer Science Student";
        this.skills = ["JavaScript", "React", "Node.js", "MongoDB"];
        this.eagerToLearn = true;
    }
    introduce() {
        console.log(\`Hello! I'm \${this.name}.\`);
        console.log("I'm a student exploring fullstack development and UI/UX.");
    }
    showLearningPath() {
        console.log("📚 Currently learning:");
        console.log("   • React & Node.js");
        console.log("   • API Security");
    }
}
const dev = new Developer();
dev.introduce();
dev.showLearningPath();`
};

// === Syntax Highlighting ===
function highlightCode(code) {
    return code
        .replace(/\/\/.*/g, '<span class="comment">$&</span>')
        .replace(/#.*$/gm, '<span class="comment">$&</span>')
        .replace(/".*?"|'.*?'/g, '<span class="string">$&</span>')
        .replace(/\b(public|private|protected|static|final|class|void|String|int|def|console|print)\b/g, '<span class="keyword">$&</span>')
        .replace(/\b(introduce|showLearningPath|show_learning_path)\b/g, '<span class="function">$&</span>')
        .replace(/\b(name|skills|status|eagerToLearn|eager_to_learn)\b/g, '<span class="var">$&</span>');
}

// === Typing Effect ===
function typeCode(element, text, speed = 15) {
    let i = 0;
    element.innerHTML = '';

    const timer = setInterval(() => {
        if (i <= text.length) {
            element.innerHTML = text.substring(0, i) + '<span class="cursor">█</span>';
            i++;
            element.scrollTop = element.scrollHeight;
        } else {
            clearInterval(timer);
            const cursor = document.querySelector('.cursor');
            if (cursor) cursor.remove();

            // Apply syntax highlighting after typing
            element.innerHTML = highlightCode(text);
        }
    }, speed);
}

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
    const output = document.getElementById('code-output');
    typeCode(output, snippets.java);

    // Tab switching
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const lang = btn.getAttribute('data-lang');
            typeCode(output, snippets[lang]);
        });
    });

    // Start background lines
    createGreenCodeLines();
});
