/* Ussing httprequest

function loadjson(file,callback){
    var xhr = new XMLHttpRequest();
 xhr.overrideMimeType("application/json");
 xhr.open("GET",file,true);
 xhr.onreadystatechange=function(){
     if(xhr.readyState === 4 && xhr.status == "200")
     {
         callback(xhr.responseText);
     }
 };
 xhr.send(null);
}
loadjson("new.json",function(text){
    var data = JSON.parse(text);
    console.log(data);
    basic(data.details);
    basic1(data.careerobjective);
    education(data.educationalqualification);
    skills(data.technicalskills);
})

var child1 = document.querySelector(".child1");
var child2 = document.querySelector(".child2");
function basic(det){
    var img = document.createElement("img");
    img.src="var.jpg";
    child1.appendChild(img);

    var name = document.createElement("h4");
    name.textContent=det.name;
    child1.appendChild(name);

    var email = document.createElement("a");
    email.href="mailto:doddivarun13@gmail.com";
    email.textContent=det.email;
    child1.appendChild(email);

    var num = document.createElement("h4");
    num.textContent=det.number;
    child1.appendChild(num);
    
    child1.appendChild(document.createElement("hr"));
    
    var bus = document.createElement("h4");
    bus.textContent=det.address;
    child1.appendChild(bus);
   
   

var image = document.createElement("image");
image.src="var.jpg";
child1.appendChild(image); 
}
function basic1(dat){
    var head = document.createElement("h2");
    head.textContent="Career Objective";
    child2.appendChild(head);
    child2.appendChild(document.createElement("hr"));
    var para = document.createElement("div");
    para.textContent=dat.info;
    child2.appendChild(para);
    
}
function education(edu){
    child2.appendChild(document.createElement("hr"));
    var head1 = document.createElement("h2");
    head1.textContent="Educational Qualification";
    child2.appendChild(head1);
    child2.appendChild(document.createElement("hr"));


    var tab1 = document.createElement("table");
  
    tab1.border="1";
    child2.appendChild(tab1);

   tabledata="";
   for( i=0;i<edu.length;i++){
 tabledata+="<tr><td>"+edu[i].institute+"</td><td>"+edu[i].degree+"</td><td>"+edu[i].passoutyear+"</td><td>"+edu[i].percentage+"</td></tr>";
   }
   
   tab1.innerHTML=tabledata;
   
}

function skills(info)
{
 var hd = document.createElement("h2");
 hd.textContent="Technical Skills";
 child2.appendChild(hd);
 child2.appendChild(document.createElement("br"));

 child2.appendChild(document.createElement("hr"));
 var lst = document.createElement("ul");
 child2.appendChild(lst);

  for(j=0;j<info.length;j++){
     var title = document.createElement("h4");
     title.textContent=info[j].title;
     child2.appendChild(title);
     var skillul = document.createElement("ul");
     var skillli = document.createElement("li");
     skillli.textContent=info[j].info;
     skillul.appendChild(skillli);
     child2.appendChild(skillul);
     
  }
}
*/

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
var newfile = loadjson("new.json");
newfile.then(data=>{
    console.log(data);
    basic(data.details);
    basic1(data.careerobjective);
    education(data.educationalqualification);
    skills(data.technicalskills);
})
var child1 = document.querySelector(".child1");
var child2 = document.querySelector(".child2");
function basic(det){
    var img = document.createElement("img");
    img.src="var.jpg";
    child1.appendChild(img);

    var name = document.createElement("h4");
    name.textContent=det.name;
    child1.appendChild(name);

    var email = document.createElement("a");
    email.href="mailto:doddivarun13@gmail.com";
    email.textContent=det.email;
    child1.appendChild(email);

    var num = document.createElement("h4");
    num.textContent=det.number;
    child1.appendChild(num);
    
    child1.appendChild(document.createElement("hr"));
    
    var bus = document.createElement("h4");
    bus.textContent=det.address;
    child1.appendChild(bus);
   
   

var image = document.createElement("image");
image.src="var.jpg";
child1.appendChild(image); 
}
function basic1(dat){
    var head = document.createElement("h2");
    head.textContent="Career Objective";
    child2.appendChild(head);
    child2.appendChild(document.createElement("hr"));
    var para = document.createElement("div");
    para.textContent=dat.info;
    child2.appendChild(para);
    
}
function education(edu){
    child2.appendChild(document.createElement("hr"));
    var head1 = document.createElement("h2");
    head1.textContent="Educational Qualification";
    child2.appendChild(head1);
    child2.appendChild(document.createElement("hr"));


    var tab1 = document.createElement("table");
  
    tab1.border="1";
    child2.appendChild(tab1);

   tabledata="";
   for( i=0;i<edu.length;i++){
 tabledata+="<tr><td>"+edu[i].institute+"</td><td>"+edu[i].degree+"</td><td>"+edu[i].passoutyear+"</td><td>"+edu[i].percentage+"</td></tr>";
   }
   
   tab1.innerHTML=tabledata;
   
}

function skills(info)
{
 var hd = document.createElement("h2");
 hd.textContent="Technical Skills";
 child2.appendChild(hd);
 child2.appendChild(document.createElement("br"));

 child2.appendChild(document.createElement("hr"));
 var lst = document.createElement("ul");
 child2.appendChild(lst);

  for(j=0;j<info.length;j++){
     var title = document.createElement("h4");
     title.textContent=info[j].title;
     child2.appendChild(title);
     var skillul = document.createElement("ul");
     var skillli = document.createElement("li");
     skillli.textContent=info[j].info;
     skillul.appendChild(skillli);
     child2.appendChild(skillul);
     
  }
}