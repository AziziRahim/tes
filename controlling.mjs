import users from "./data.mjs";

const index = () => {
    console.log("index of get All user ");
    users.forEach(function(user){
        console.log(users.map((user) => `${user.nama} - ${user.umur} - ${user.alamat}`));
    });
};

const store =  (user) => {
    users.push(user);
};

const destroy = () => {
    users.pop();

};

export {index, store, destroy};