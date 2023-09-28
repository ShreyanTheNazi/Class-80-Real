Student_Array = [];

function submit()
{
    Array_Display = [];

    for(var j=1; j<=4; j++)
    {var Student = document.getElementById("student" + j).value;
    console.log(Student);
    Student_Array.push(Student);}

    console.log(Student_Array);
    var Student_Length = Student_Array.length;
    console.log(Student_Length);

    for(var k=0; k<Student_Length; k++)
    {
        Array_Display.push("<h4>Name-"+Student_Array[k]+"</h4>");
        console.log(Array_Display);
    }

    document.getElementById("display-name-comma").innerHTML = Array_Display;
    var no_comma = Array_Display.join(" ");
    console.log(no_comma); 
    document.getElementById("display-name-no-comma").innerHTML = no_comma;
    document.getElementById("submit").style.display = "none";
    document.getElementById("sort").style.display = "inline-block";
}

function sort()
{
    Student_Array.sort();
    console.log(Student_Array);
    var Sorted_Array = [];
    var Student_Length = Student_Array.length;
    console.log(Student_Length);
    for(var k=0; k<Student_Length; k++)
    {
        Sorted_Array.push("<h4>Name-"+Student_Array[k]+"</h4>");
        console.log(Sorted_Array);
    }
    var no_comma = Sorted_Array.join(" ");
    console.log(no_comma); 
    document.getElementById("display-name-no-comma").innerHTML = no_comma;
}

function update()
{
    document.getElementById("display-name-no-comma").innerHTML = "<h1>"+Student_Array+"</h1>";  
}