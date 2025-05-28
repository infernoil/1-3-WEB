"use strict";

class PersonalInfo {
    constructor(name, email, phone, age) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.age = parseInt(age, 10) || "Не вказано";
    }
}

class Experience {
    constructor(company, position, years) {
        this.company = company;
        this.position = position;
        this.years = parseInt(years, 10) || 0;
    }
}

class Education {
    constructor(institution, degree, year) {
        this.institution = institution;
        this.degree = degree;
        this.year = parseInt(year, 10) || "Не вказано";
    }
}

class Skills {
    constructor(skills) {
        this.skills = skills.split(",").map(skill => skill.trim());
    }
}

class Resume {
    constructor(personalInfo, experience, education, skills) {
        this.personalInfo = personalInfo;
        this.experience = experience;
        this.education = education;
        this.skills = skills;
    }

    displayResume() {
        const resumeContainer = document.getElementById("resume");
        resumeContainer.innerHTML = `
            <h2>Резюме</h2>
            <h3>Особиста інформація</h3>
            <p><strong>Ім'я:</strong> ${this.personalInfo.name}</p>
            <p><strong>Email:</strong> ${this.personalInfo.email}</p>
            <p><strong>Телефон: +380 </strong> ${this.personalInfo.phone}</p>
            <p><strong>Вік:</strong> ${this.personalInfo.age}</p>
            
            <h3>Досвід роботи</h3>
            <p><strong>Компанія:</strong> ${this.experience.company}</p>
            <p><strong>Посада:</strong> ${this.experience.position}</p>
            <p><strong>Роки досвіду:</strong> ${this.experience.years}</p>
            
            <h3>Освіта</h3>
            <p><strong>Заклад:</strong> ${this.education.institution}</p>
            <p><strong>Ступінь:</strong> ${this.education.degree}</p>
            <p><strong>Рік закінчення:</strong> ${this.education.year}</p>
            
            <h3>Навички</h3>
            <p>${this.skills.skills.join(", ")}</p>
        `;
    }
}

function getUserData() {

    const name = prompt("Введіть ваше ім'я:");
    const email = prompt("Введіть ваш email:");
    const phone = prompt("Введіть ваш телефон:");
    const age = prompt("Введіть ваш вік:" , 18);
    const personalInfo = new PersonalInfo(name, email, phone, age);

    const company = prompt("Введіть назву компанії, в якій ви працювали:");
    const position = prompt("Введіть вашу посаду:");
    const years = prompt("Введіть кількість років досвіду:");
    const experience = new Experience(company, position, years);

    const institution = prompt("Введіть назву навчального закладу:");
    const degree = prompt("Введіть отриману ступінь:");
    const year = prompt("Введіть рік закінчення навчання:");
    const education = new Education(institution, degree, year);

    const skills = prompt("Введіть ваші навички через кому:");
    const skillsObject = new Skills(skills);

    const resume = new Resume(personalInfo, experience, education, skillsObject);
    resume.displayResume();
}

document.getElementById("generate").addEventListener("click", getUserData);
