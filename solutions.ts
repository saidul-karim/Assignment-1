

function multiplyValue(value: number, multiplier: number = 2){
    return value * multiplier
}





function processInput(input: string | number | boolean){

    if (typeof input === "string") {
        return input.trim().toLowerCase()
    }

    if(typeof input === "number"){
        return input * 10
    }

    return input? "Active" : "Inactive"

}




function formatCoordinate(
    coordinate: readonly[number, number, string]  
)

{

const [latitude, longitude, locationName] = coordinate;

return `Location: ${locationName} (${latitude}${longitude})`

}





function concatenateArrays<T> (...arrays: T[][]) {

    const combinedArrays: T[] = [];

    for (const currentArray of arrays) {

        combinedArrays.push(...currentArray);
    }

    return combinedArrays;
}






interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

const course : Course = {
    title : "TypeScript Mastery",
    students : 120,
    isPublished : true,
} 


function getPopularCourses(courses: Course[], minStudents: number) {

    return courses.filter((course: Course) => 

        course.isPublished && course.students >= minStudents);
}





function pluckValues <T, K extends keyof T>(
    items : T[],
    key : K
): T[K][]

{

    return items.map((item: T) : T[K] =>item[key]);

}




class Employee {
    protected name : string;
    private baseSalary : number;

    constructor(name : string, baseSalary : number ){
         this.name = name;
         this.baseSalary = baseSalary;
    }

    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
    }

}


class Manager extends Employee {
    private department : string;

    constructor(name : string, baseSalary : number, department : string ){
        super(name, baseSalary);
        this.department = department;

    }

    getRoleInfo(): string {
        return`Manager of ${this.department} : ${this.name}`;
    }

}






function  validateAgeAsync(age : number) : Promise<string> {

    return new Promise<string>((resolve, reject) => {

        if(age < 18){

            reject(new Error("Access Denied: Must be 18 or older"))

            return;
        }

        setTimeout(() =>{
            resolve("Access Granted");
            
        }, 1000);

    })
}