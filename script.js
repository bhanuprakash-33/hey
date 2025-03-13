const works = {
    "task1": { "title": "Project 1", "url": "works/task1/index.html" },
    "task2": { "title": "Project 2", "url": "works/task2/index.html" },
    "task3": { "title": "Project 3", "url": "works/task3/index.html" },
};

const workFrame = document.getElementById("workFrame");
const projectsContainer = document.getElementById("projects-container");

Object.keys(works).forEach(key => {
    const button = document.createElement("button");
    button.textContent = works[key].title;
    button.onclick = () => {
        workFrame.src = works[key].url;
    };
    projectsContainer.appendChild(button);
});


// write your code here 
// you need to display the list of work titles in a navigation panel 
// if a work title is clicked, the body section should display the work without reloading the page
