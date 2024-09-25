
const clickButton= document.getElementById('clickButton');
const addWork=()=>{
    
    let newWorkName= document.getElementById("workName").value;
    let newWorkDetails= document.getElementById("workDetails").value;

    // creating and adding work name
    let li= document.createElement("li");
    li.textContent=newWorkName;
    let ul= document.getElementById('workNameUl');
    ul.appendChild(li);
    
//    creating and adding discription
     li= document.createElement("li");
     li.textContent=newWorkDetails;
     ul= document.getElementById('workDetailsUl');
     ul.appendChild(li);

    //  adding work to an array
    const workList=[];
const work ={
    name:"name",
    discription: "discription"
}
    work.name= newWorkName;
    work.discription= newWorkDetails;
    workList.push(work);

    console.log(work);
    
    document.getElementById("workName").value="";
    document.getElementById("workDetails").value="";

};

clickButton.addEventListener("click",addWork);
