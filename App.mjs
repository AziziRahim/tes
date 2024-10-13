import { index, store, destroy } from "./controlling.mjs"

const main = () => {
    // arrow function
    const user = [{nama : "Data 11", umur :18, alamat : "Jl. Data 11", email : "data11@gmail.com"}, 
    {nama : "Data 12", umur : 29, alamat : "Jl. Data 12", email : "data12@gmail.com"}
];
    index();
    store(user);
    index();
};

main();