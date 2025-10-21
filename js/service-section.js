    document.addEventListener('DOMContentLoaded', function() {
    // Skills data for additional functionality if needed
    const skills = [
{
    name: "Java",
    description: "Object-oriented programming language for building enterprise-level applications, Android apps, and backend systems.",
    frontColor: "#007396",
    backColor: "#5382a1"
},
{
    name: "Python",
    description: "Versatile programming language for web development, data analysis, artificial intelligence, and automation.",
    frontColor: "#306998",
    backColor: "#ffd43b"
},
{
    name: "JavaScript",
    description: "Dynamic programming language for interactive web applications, both frontend and backend development.",
    frontColor: "#f7df1e",
    backColor: "#000000"
},
{
    name: "MySQL",
    description: "Relational database management system for storing, managing, and retrieving structured data.",
    frontColor: "#00758f",
    backColor: "#f29111"
},
{
    name: "HTML",
    description: "Markup language for creating web pages and applications, defining structure and content.",
    frontColor: "#e34c26",
    backColor: "#f06529"
},
{
    name: "CSS",
    description: "Style sheet language for designing web pages, controlling layout, colors, and responsive design.",
    frontColor: "#264de4",
    backColor: "#2965f1"
},
{
    name: "Figma",
    description: "Collaborative design tool for creating user interfaces, prototypes, and design systems.",
    frontColor: "#f24e1e",
    backColor: "#ff7262"
},
{
    name: "Hibernate",
    description: "Object-relational mapping tool for Java, simplifying database interactions and data persistence.",
    frontColor: "#59666c",
    backColor: "#bcae0f"
},
{
    name: "Git",
    description: "Version control system for tracking changes in source code and collaborative software development.",
    frontColor: "#f05032",
    backColor: "#f14e32"
}
    ];

    // You can add additional functionality here if needed
    // For example, adding click events to skill cards
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card, index) => {
    card.addEventListener('click', function() {
    // Add any click functionality here
    console.log(`Clicked on ${skills[index].name}`);
});
});
});