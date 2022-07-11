function myFunction() {
    alert("There is no specific User. Everyone deserves a healthy life.");
}

let headers = ['sugar_g', 'fiber_g', 'servingSize_g', 'fat_g', 'calories_g'];
let myTable = document.querySelector('#table');
function item() {
    event.preventDefault();
    var data = document.getElementById('userInput').value;
    document.getElementById("showmessage2").style.display = "none";
    document.getElementById("showmessage3").style.display = "none";
    document.getElementById("showmessage4").style.display = "none";
    document.getElementById("showmessage5").style.display = "none";
    document.getElementById("showmessage").style.display = "block";
    document.getElementById("call").style.display = "block";
    document.getElementById("describe").style.display = "block";
    document.getElementById("table").style.display = "flex";
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            console.log(response);
            // document.getElementsById("table").innerHTML = data + "is the food you want to check";
            var item = response.items[0];
            var sugar = item.sugar_g;
            var fiber = item.fiber_g;
            var serving = item.serving_size_g;
            var fat = item.fat_total_g;
            var cal = item.calories;
            document.getElementById("describe").innerHTML = "Here is the nutrients in the " + data;
            // document.getElementById("yup2").innerHTML = "Here is the nutrients in the " + data;
            let table = document.createElement('table');
            let heade_row = document.createElement('tr');
            headers.forEach(headerText => {
                let header = document.createElement('th');
                let textNode = document.createTextNode(headerText);
                header.appendChild(textNode);
                heade_row.appendChild(header);
            });
            table.appendChild(heade_row);
            let content = [{ sugar, fiber, serving, fat, cal }];
            content.forEach(emp => {
                let row = document.createElement('tr');
                Object.values(emp).forEach(text => {
                    let cell = document.createElement('td');
                    let textNode = document.createTextNode(text);
                    cell.appendChild(textNode);
                    row.appendChild(cell);
                })
                table.appendChild(row);
            });
            myTable.appendChild(table);

            if (cal < 100) {
                document.getElementById("showmessage").innerHTML = data + " is a kind of low cal food. It will help you lose your weight";
            }
            else {
                document.getElementById("showmessage").innerHTML = data + " is a kind of high cal food. Eating too much will be bad for your health";
            }

        }


    };
    xhttp.open("GET", "https://api.calorieninjas.com/v1/nutrition?query=" + data, true);
    xhttp.setRequestHeader("x-api-key", "oRGaIB70hm/rSJDium33Ew==8AzrLddXw89GqIjX");
    xhttp.send();
    document.getElementById('userInput').value = "";
    document.getElementById("table").innerHTML = "";



}

document.querySelector('#call').addEventListener('click', item);








