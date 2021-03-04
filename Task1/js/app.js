let tbodyId = document.querySelector("#tbodayId");
let students = [{
        name: "Mahmoud",
        class: "class1",
        age: 26,
        degree: 90,
        grade: "  ",
    },
    {
        name: "Ali",
        class: "class2",
        age: 25,
        degree: 70,
        grade: " ",
    },
    {
        name: "tamer",
        class: "class2",
        age: 22,
        degree: 80,
        grade: " ",
    },
];
let headers = ["id", "name", "class", "age", "degree", "grade", "modifys"];
let modifys = [{
        txt: "Delete Student",
        classes: "btn btn-danger m-1",
    },
    {
        txt: "Edit Student dgree",
        classes: "btn btn-info m-1",
    },
];

//Show hide button
let showFormbtn = document.querySelector("#showhide");
let formTable = document.querySelector("#formTablee");
formTable.addEventListener("submit", function (e) {
    e.preventDefault();
    let student = {
        name: this.elements.name.value,
        class: this.elements.class.value,
        age: this.elements.age.value,
        degree: this.elements.degree.value,
    };
    students.push(student);
    this.reset();
    this.classList.add("d-none");
    showFormbtn.innerText = "Show form";
    showStudents();
});
showFormbtn.onclick = function () {
    this.innerText == "Show form" ?
        (this.innerText = "Hide form") :
        (this.innerText = "Show form");
    formTable.classList.toggle("d-none");
};

//Create Element Function
let createElement = function (elementType, parent, txt = "", classes = []) {
    ele = document.createElement(elementType);
    if (txt != "") ele.innerText = txt;
    if (classes != "") ele.classList = classes;
    parent.appendChild(ele);
    return ele;
};
// Add students
let showStudents = function () {
    tbodyId.innerText = "";
    students.forEach((student, i) => {
        if (student.degree >= 90) {
            student.grade = "A";
        } else if (student.degree < 90 && student.degree >= 80) {
            student.grade = "B";
        } else if (student.degree < 80 && student.degree >= 70) {
            student.grade = "C";
        } else if (student.degree < 70 && student.degree >= 60) {
            student.grade = "D";
        } else if (student.degree < 60) {
            student.grade = "F";
        }
        tr = createElement("tr", tbodyId);
        headers.forEach((header) => {
            if (header == "id") txt = i + 1;
            else if (header == "modifys") txt = "";
            else txt = student[header];
            td = createElement("td", tr, txt);
        });
        modifys.forEach((modify) => {
            btn = createElement("button", td, modify.txt, modify.classes);
            btn.addEventListener("click", function (e) {
                if (modify.txt == "Delete Student") deleteStudent(i);
                else if (modify.txt == "Edit Student dgree") editdegree(i);
            });
        });
    });
};

function deleteStudent(index) {
    students.splice(index, 1);
    showStudents();
}

function editdegree(index) {
    console.log(students[index].degree);
    students[index].degree = prompt("Enter the new dgree");
    showStudents();
}

function showGrade(index) {
    console.log(students[index].grade);
    if (students[index].degree >= 90) {
        students[index].grade = "A";
    }
}

showStudents();