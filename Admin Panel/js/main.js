const dest = document.querySelector(".navbar-right ul");        // destination

console.log(dest);

const newLi = document.createElement("li");                       //li

newLi.innerText = "hello";                                  // <li> hello </li>


dest.before(newLi);