// const user = {
//     id: 1,
//     name:'Web',
//     surname: 'Brain',
//     key:'23456',
// };

// const univ = [
//     {
//     id: 1,
//     name:'Eshmat',
//     status: 'CS',
//     department: 'IT',
//     },
//     {
//     id: 2,
//     name:'Toshmat',
//     status: 'BBA',
//     department: 'B',
//     },
//     {
//     id: 3,
//     name:'Eshmat akasi',
//     status: 'CS',
//     department: 'IT',
//     },
//     {
//     id: 0,
//     name:'Gulbashakar',
//     status: 'CS',
//     department: 'AI',
//     },  
//     {
//     id: 10,
//     name:'Mirshakar',
//     status: 'CS',
//     department: 'AI',
//     },
// ];
// const {id, name,surname,key} = user;
// console.log(id);

// //onREAD
// // function onRead(){
// //     console.log(univ.filter(value => value.id == 10));
// // }


// // //onDelete
// // function onDelete(){
// //     console.log(univ.filter(value => value.id !== 10));
// // }
// // onDelete();


// // //sorting tha data
// // function onSorting(){
// //     console.log(univ.sort((a,b)=>a.name.localeCompare(b.name)));
// // }
// // onSorting();




// // //onCreate
// // function onCreate() {
// //     univ[univ.length]={ id: 11,
// //         name:'Mirshakar akasi',
// //         status: 'CSS',
// //         department: 'IT',}

// //     console.log(univ);
// // }
// // onCreate();




// let user = new Object();
// let user={
//     key : 'kalit',
//     age: 20,
//     for:5,
//     let:"kalit",
//     return:5,
// };
// // console.log(user["age"]);
// // delete user.age;
// // console.log(user);

// console.log(user.for+user.age);






// const user = {
//     id: 1,
//     name:'Web',
//     surname: 'Brain',
//     key:'23456',
// };

// const univ = [
//     {
//     id: 1,
//     name:'Eshmat',
//     status: 'CS',
//     department: 'IT',
//     },
//     {
//     id: 2,
//     name:'Toshmat',
//     status: 'BBA',
//     department: 'B',
//     },
//     {
//     id: 3,
//     name:'Eshmat akasi',
//     status: 'CS',
//     department: 'IT',
//     },
//     {
//     id: 0,
//     name:'Gulbashakar',
//     status: 'CS',
//     department: 'AI',
//     },  
//     {
//     id: 10,
//     name:'Mirshakar',
//     status: 'CS',
//     department: 'AI',
//     },
// ];

// // function  onRead() {
// //     console.log(univ.filter(value=> value.id==10));
// // }
// // onRead();

// // function  onDelete() {
// //     console.log(univ.filter(value=>value.id!==10));
// // }
// // onDelete();


// // function  onSort() {
// //     console.log(univ.sort((a,b)=>a.name.localeCompare(b.name)));
// // }

// // onSort();

// function onCreate() {
//     univ[univ.length]={
//         id:11,
//         name:'Alisher',
//         status:'IT',
//         department:'CSS',
//     }
// } 
// onCreate();






class User{
    constructor(name){
        this.name=name;
    }
    sayHi(){
        console.log(this.name);
    }
}

console.log(typeof User);