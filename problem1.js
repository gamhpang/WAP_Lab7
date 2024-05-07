// 1st way using self

let group = {

    title: "Our Group",

    students: ["John", "Pete", "Alice"],

    showList: function () {
        const self = this;

        this.students.forEach(function (student) {

            console.log(self.title + ": " + student

            );

        });

    }

};

group.showList();


// 2nd way, using arrow function

let group = {

    title: "Our Group",

    students: ["John", "Pete", "Alice"],

    showList: function () {

        this.students.forEach(student => {

            console.log(this.title + ": " + student

            );

        });

    }

};

group.showList();


// 3rd way, using bind

let group = {

    title: "Our Group",

    students: ["John", "Pete", "Alice"],

    showList: function () {

        const log = function(student){
            console.log(this.title + ": " + student);
        }
        this.students.forEach(log.bind(group));

    }

};

group.showList();


// 4th way, using call

let group = {

    title: "Our Group",

    students: ["John", "Pete", "Alice"],

    showList: function () {

        const log = function(student){
            console.log(this.title + ": " + student);
        }
        this.students.forEach((student)=>log.call(group,student));

    }

};

group.showList();


// 5th way, using apply

let group = {

    title: "Our Group",

    students: ["John", "Pete", "Alice"],

    showList: function () {

        const log = function(student){
            console.log(this.title + ": " + student);
        }
        this.students.forEach((student)=>log.apply(group,[student]));

    }

};

group.showList();