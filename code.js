


function incremente(i)
            {
                var num = parseInt(document.getElementById("q"+i).value);
                var pr = parseInt(document.getElementById("p"+i).value);
                var prc= parseInt(document.getElementById("prix"+i).textContent);
                num = num+1;
                document.getElementById("q"+i).value = num;
                pr=prc*num;
                document.getElementById("p"+i).value = pr;
                

            }

 function decremente(i)
            {
                var num = parseInt(document.getElementById("q"+i).value);
                var pr = parseInt(document.getElementById("p"+i).value);
                var prc= parseInt(document.getElementById("prix"+i).textContent);
                if(num>=1){
                    num=num-1
                    
                  
                document.getElementById("q"+i).value = num;
                pr=prc*num;
                document.getElementById("p"+i).value = pr;}
                
            }
    
           /* function incrementesn()
            {
                var num = parseInt(document.getElementById("q11").value);
                var pr = parseInt(document.getElementById("p11").value);
                num = num+1;
                document.getElementById("q11").value = num;
                pr=200*num;
                document.getElementById("p11").value = pr;
                

            }
            function decrementesn()
            {
                var num = parseInt(document.getElementById("q11").value);
                var pr = parseInt(document.getElementById("p11").value);
                num = num-1;
                document.getElementById("q11").value = num;
                pr=200*num;
                document.getElementById("p11").value = pr;
                

            }

            function incrementesc()
            {
                var num = parseInt(document.getElementById("q33").value);
                var pr = parseInt(document.getElementById("p33").value);
                num = num+1;
                document.getElementById("q33").value = num;
                pr=280*num;
                document.getElementById("p33").value = pr;
                

            }


            function deccrementesc()
            {
                var num = parseInt(document.getElementById("q33").value);
                var pr = parseInt(document.getElementById("p33").value);
                num = num-1;
                document.getElementById("q33").value = num;
                pr=280*num;
                document.getElementById("p33").value = pr;
                

            }*/

function total(l,j,k){
var tota=0;
item1 = 0;
item2 = 0;
item3 = 0; 

if (document.getElementById("p"+l) !== null)
{
var item1 =parseInt(document.getElementById("p"+l).value);
}

if (document.getElementById("p"+j) !== null)
{
var item2 =parseInt(document.getElementById("p"+j).value);
}

if (document.getElementById("p"+k) !== null)
{
var item3 =parseInt(document.getElementById("p"+k).value);
}

console.log(item1);
console.log(item2);
console.log(item3);

tota = tota+item1+item2+item3;
document.getElementById("tot").textContent = tota;

}


function delet (i){
    var line = document.getElementById("ligne"+i);
    line.remove();
    
}

