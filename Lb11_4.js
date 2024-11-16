function Student(name, surname, age, course) {
    this.name = name;       
    this.surname = surname; 
    this.age = age;         
    this.course = course;  

    this.GetOlder = function(years) {
        this.age += years;
    };
    this.ChangeSurname = function(newSurname) {
        this.surname = newSurname;
    };
    this.MoveToSecondCourse = function() {
        this.course += 1;
    };
}

const student1 = new Student("Name", "Surname", 18, 2);

console.log(student1)
student1.GetOlder(1);
student1.ChangeSurname("Newsurname");
student1.MoveToSecondCourse();
console.log(student1)
