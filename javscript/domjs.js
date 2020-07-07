function loadjson(file){
    return new Promise((resolve,reject)=>{
       return fetch(file).then(response=>{
           if(response.ok){
               resolve(response.json());
           }
           else{
               reject(new Error('error'));
           }
       })

    })
}
var newfile = loadjson("dom.json");
newfile.then(data=>{
    console.log(data);
   details(data.box1);
   details1(data.box2);
})

var child1 = document.querySelector(".div1");
function details(dat){
    var div1 = document.createElement("div");
    var img1 = document.createElement("img");
    img1.classList.add("img-fluid");
    img1.src="var1.jpg";
    div1.appendChild(img1);
    child1.appendChild(div1);
    var x = document.createElement("h4");
    x.textContent = dat.name;
    child1.appendChild(x);
    var x1 = document.createElement("a");
    x1.href="mailto:doddivarun13@gmail.com";
    x1.textContent = dat.mail;
    child1.appendChild(x1);
    var x2 = document.createElement("h4");
    x2.textContent = dat.skill;
    child1.appendChild(x2);

    var x3 = document.createElement("button");
    x3.classList.add("btn");
    x3.classList.add("btn-primary");
    var lin1 = document.createElement("a");
    lin1.href="../nav.html";
    x3.textContent="Click Me"
    lin1.appendChild(x3);
    child1.appendChild(lin1);


}
var child2 = document.querySelector(".div2");
function details1(dat1){
    var div11 = document.createElement("div");
  
    var img11 = document.createElement("img");
    img11.classList.add("img-fluid");
    img11.src="var2.jpg";
    div11.appendChild(img11);
    child2.appendChild(div11);
    var xx = document.createElement("h4");
    xx.textContent = dat1.name;
    child2.appendChild(xx);
    var xx1 = document.createElement("a");
    xx1.href="mailto:varuncool@gmail.com";
    xx1.textContent = dat1.mail;
    child2.appendChild(xx1);
    var xx2 = document.createElement("h4");
    xx2.textContent = dat1.skill;
    child2.appendChild(xx2);
    var xx3 = document.createElement("button");
    xx3.classList.add("btn");
    xx3.classList.add("btn-primary");
    var lin = document.createElement("a");
    lin.href="index.html";
    xx3.textContent="Click Me"
    lin.appendChild(xx3);
    
    child2.appendChild(lin);

}