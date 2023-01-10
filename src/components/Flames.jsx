import React,{useState} from 'react'

function Flames(props) {
    const [firstName, setFirstName] = useState("");
    const [secondName, setsecondName] = useState("");
    const[ans,setAns]=useState("");
    const ansList=["Friends","Love","Affection","Marriage","Enemy","Siblings"];
    function calculateArray(fname,sname){
        let arr1=fname.split("");
        let arr2=sname.split("");
        let count=arr1.length;
      //  console.log(arr1,arr2);

        for(let i=0;i<count;i++){
            let e=arr1[i];
            let index=arr2.indexOf(e);
            if(arr2[index]){
                arr2.splice(index,1);
                arr1.splice(i,1)
            }

        }
        console.log(arr1,arr2);
        return arr1.length+arr2.length;

    }
    function getResult(){
        if(firstName==="" || secondName===""){
            document.write("Please Enter valid input");
        }
       let sum= calculateArray(firstName,secondName);
       let res=sum%6;
       setAns(ansList[res]);
    }
    function clearAll(){
        setFirstName("");
        setsecondName("");
        setAns("")
    }
  return (
    <div>
         <div>
              <input type="text" data-testid="input1" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} placeholder="Enter first name"/>
         </div>
         <div>
             <input type="text" data-testid="input2" value={secondName} onChange={(e)=>{setsecondName(e.target.value)}} placeholder="Enter first name"/>
         </div>
         <div>
             <button data-testid="calculate_relationship" onClick={getResult}>Calculate Relationship Future</button>
         </div>
         <div>
             <button data-testid="clear" onClick={clearAll}>Clear</button>
         </div>
         <h3 data-testid="answer">{ans}</h3> 
    </div>
  )
}

export default Flames