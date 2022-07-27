function myFunction() {
    alert("There is no specific User. Everyone deserves a healthy life.");
}

let headers = ['servingSize_g', 'sugar_g', 'fiber_g', 'fat_g', 'calories_g'];
let myTable = document.querySelector('#table');
function item() {
    event.preventDefault();
    var data = document.getElementById('userInput').value;
    if (!data.includes("and")) {
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
                var serving = item.serving_size_g;
                var sugar = item.sugar_g;
                var fiber = item.fiber_g;
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
                let content = [{ serving, sugar, fiber, fat, cal }];
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


    else {
        document.getElementById("showmessage2").style.display = "block";
        document.getElementById("showmessage3").style.display = "block";
        document.getElementById("showmessage4").style.display = "block";
        document.getElementById("showmessage5").style.display = "block";
        document.getElementById("showmessage").style.display = "none";
        // document.getElementById("call").style.display = "none";
        document.getElementById("describe").style.display = "none";
        document.getElementById("table").style.display = "none";
        var data = document.getElementById('userInput').value;

        var index = data.indexOf(" and ")
        var data1 = data.substring(0, index);
        var data2 = data.substring(index + 5, data.length);

        var xhttp = new XMLHttpRequest();
        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var response = JSON.parse(this.responseText);
                console.log(response);
                var item = response.items[0];
                var serving1 = item.serving_size_g;
                var sugar1 = item.sugar_g;
                var fiber1 = item.fiber_g;
                var fat1 = item.fat_total_g;
                var cal1 = item.calories;

                var item2 = response.items[1];
                var serving2 = item2.serving_size_g;
                var sugar2 = item2.sugar_g;
                var fiber2 = item2.fiber_g;
                var fat2 = item2.fat_total_g;
                var cal2 = item2.calories;


                var sugar_d = sugar1 - sugar2;

                sugar_d = sugar_d.toFixed(2);
                // sugar_d = sugar_d + "g";
                var fiber_d = fiber1 - fiber2;
                fiber_d = fiber_d.toFixed(2);
                var fat_d = fat1 - fat2;
                fat_d = fat_d.toFixed(2);
                var cal_d = cal1 - cal2;
                cal_d = cal_d.toFixed(2);

                if (sugar_d > 0) {
                    if (fiber_d > 0) {
                        if (fat_d > 0) {
                            if (cal_d > 0) {
                                document.getElementById("showmessage2").innerHTML = "the sugar difference between 100g " + data1 + " and 100g " + data2 + " is " + sugar_d + "g";

                                document.getElementById("showmessage3").innerHTML = "the fiber difference between 100g " + data1 + " and 100g " + data2 + " is " + fiber_d + "g";
                                document.getElementById("showmessage4").innerHTML = "the fat difference between 100g " + data1 + " and 100g " + data2 + " is " + fat_d + "g";
                                document.getElementById("showmessage5").innerHTML = "the calory difference between 100g " + data1 + " and 100g " + data2 + " is " + cal_d + "cal";
                            }
                            else {
                                document.getElementById("showmessage2").innerHTML = "the sugar difference between 100g " + data1 + " and 100g " + data2 + " is " + sugar_d + "g";

                                document.getElementById("showmessage3").innerHTML = "the fiber difference between 100g " + data1 + " and 100g " + data2 + " is " + fiber_d + "g";
                                document.getElementById("showmessage4").innerHTML = "the fat difference between 100g " + data1 + " and 100g " + data2 + " is " + fat_d + "g";
                                document.getElementById("showmessage5").innerHTML = "the calory difference between 100g " + data2 + " and 100g " + data1 + " is " + -1 * cal_d + "cal";
                            }
                        }
                        else {
                            if (cal_d > 0) {
                                document.getElementById("showmessage2").innerHTML = "the sugar difference between 100g " + data1 + " and 100g " + data2 + " is " + sugar_d + "g";

                                document.getElementById("showmessage3").innerHTML = "the fiber difference between 100g " + data1 + " and 100g " + data2 + " is " + fiber_d + "g";
                                document.getElementById("showmessage4").innerHTML = "the fat difference between 100g " + data2 + " and 100g " + data1 + " is " + -1 * fat_d + "g";
                                document.getElementById("showmessage5").innerHTML = "the calory difference between 100g " + data1 + " and 100g " + data2 + " is " + cal_d + "cal";
                            }
                            else {
                                document.getElementById("showmessage2").innerHTML = "the sugar difference between 100g " + data1 + " and 100g " + data2 + " is " + sugar_d + "g";

                                document.getElementById("showmessage3").innerHTML = "the fiber difference between 100g " + data1 + " and 100g " + data2 + " is " + fiber_d + "g";
                                document.getElementById("showmessage4").innerHTML = "the fat difference between 100g " + data2 + " and 100g " + data1 + " is " + -1 * fat_d + "g";
                                document.getElementById("showmessage5").innerHTML = "the calory difference between 100g " + data2 + " and 100g " + data1 + " is " + -1 * cal_d + "cal";
                            }
                        }
                    }
                    else {
                        if (fat_d > 0) {
                            if (cal_d > 0) {
                                document.getElementById("showmessage2").innerHTML = "the sugar difference between 100g " + data1 + " and 100g " + data2 + " is " + sugar_d + "g";

                                document.getElementById("showmessage3").innerHTML = "the fiber difference between 100g " + data2 + " and 100g " + data1 + " is " + -1 * fiber_d + "g";
                                document.getElementById("showmessage4").innerHTML = "the fat difference between 100g " + data1 + " and 100g " + data2 + " is " + fat_d + "g";
                                document.getElementById("showmessage5").innerHTML = "the calory difference between 100g " + data1 + " and 100g " + data2 + " is " + cal_d + "cal";
                            }
                            else {
                                document.getElementById("showmessage2").innerHTML = "the sugar difference between 100g " + data1 + " and 100g " + data2 + " is " + sugar_d + "g";


                                document.getElementById("showmessage3").innerHTML = "the fiber difference between 100g " + data2 + " and 100g " + data1 + " is " + -1 * fiber_d + "g";
                                document.getElementById("showmessage4").innerHTML = "the fat difference between 100g " + data1 + " and 100g " + data2 + " is " + fat_d + "g";
                                document.getElementById("showmessage5").innerHTML = "the calory difference between 100g " + data2 + " and 100g " + data1 + " is " + -1 * cal_d + "cal";
                            }
                        }
                        else {
                            if (cal_d > 0) {
                                document.getElementById("showmessage2").innerHTML = "the sugar difference between 100g " + data1 + " and 100g " + data2 + " is " + sugar_d + "g";

                                document.getElementById("showmessage3").innerHTML = "the fiber difference between 100g " + data2 + " and 100g " + data1 + " is " + -1 * fiber_d + "g";
                                document.getElementById("showmessage4").innerHTML = "the fat difference between 100g " + data2 + " and 100g " + data1 + " is " + -1 * fat_d + "g";
                                document.getElementById("showmessage5").innerHTML = "the calory difference between 100g " + data1 + " and 100g " + data2 + " is " + cal_d + "cal";
                            }
                            else {
                                document.getElementById("showmessage2").innerHTML = "the sugar difference between 100g " + data1 + " and 100g " + data2 + " is " + sugar_d + "g";
                                document.getElementById("showmessage3").innerHTML = "the fiber difference between 100g " + data2 + " and 100g " + data1 + " is " + -1 * fiber_d + "g";
                                document.getElementById("showmessage4").innerHTML = "the fat difference between 100g " + data2 + " and 100g " + data1 + " is " + -1 * fat_d + "g";
                                document.getElementById("showmessage5").innerHTML = "the calory difference between 100g " + data2 + " and 100g " + data1 + " is " + -1 * cal_d + "cal";
                            }
                        }
                    }

                }
                else if (sugar_d < 0) {
                    if (fiber_d > 0) {
                        if (fat_d > 0) {
                            if (cal_d > 0) {
                                document.getElementById("showmessage2").innerHTML = "the sugar difference between 100g " + data2 + " and 100g " + data1 + " is " + -1 * sugar_d + "g";

                                document.getElementById("showmessage3").innerHTML = "the fiber difference between 100g " + data1 + " and 100g " + data2 + " is " + fiber_d + "g";
                                document.getElementById("showmessage4").innerHTML = "the fat difference between 100g " + data1 + " and 100g " + data2 + " is " + fat_d + "g";
                                document.getElementById("showmessage5").innerHTML = "the calory difference between 100g " + data1 + " and 100g " + data2 + " is " + cal_d + "cal";
                            }
                            else {
                                document.getElementById("showmessage2").innerHTML = "the sugar difference between 100g " + data2 + " and 100g " + data1 + " is " + -1 * sugar_d + "g";

                                document.getElementById("showmessage3").innerHTML = "the fiber difference between 100g " + data1 + " and 100g " + data2 + " is " + fiber_d + "g";
                                document.getElementById("showmessage4").innerHTML = "the fat difference between 100g " + data1 + " and 100g " + data2 + " is " + fat_d + "g";
                                document.getElementById("showmessage5").innerHTML = "the calory difference between 100g " + data2 + " and 100g " + data1 + " is " + -1 * cal_d + "cal";
                            }
                        }
                        else {
                            if (cal_d > 0) {
                                document.getElementById("showmessage2").innerHTML = "the sugar difference between 100g " + data2 + " and 100g " + data1 + " is " + -1 * sugar_d + "g";

                                document.getElementById("showmessage3").innerHTML = "the fiber difference between 100g " + data1 + " and 100g " + data2 + " is " + fiber_d + "g";
                                document.getElementById("showmessage4").innerHTML = "the fat difference between 100g " + data2 + " and 100g " + data1 + " is " + -1 * fat_d + "g";
                                document.getElementById("showmessage5").innerHTML = "the calory difference between 100g " + data1 + " and 100g " + data2 + " is " + cal_d + "cal";
                            }
                            else {
                                document.getElementById("showmessage2").innerHTML = "the sugar difference between 100g " + data2 + " and 100g " + data1 + " is " + -1 * sugar_d + "g";
                                document.getElementById("showmessage3").innerHTML = "the fiber difference between 100g " + data1 + " and 100g " + data2 + " is " + fiber_d + "g";
                                document.getElementById("showmessage4").innerHTML = "the fat difference between 100g " + data2 + " and 100g " + data1 + " is " + -1 * fat_d + "g";
                                document.getElementById("showmessage5").innerHTML = "the calory difference between 100g " + data2 + " and 100g " + data1 + " is " + -1 * cal_d + "cal";
                            }
                        }
                    }
                    else {
                        if (fat_d > 0) {
                            if (cal_d > 0) {
                                document.getElementById("showmessage2").innerHTML = "the sugar difference between 100g " + data2 + " and 100g " + data1 + " is " + -1 * sugar_d + "g";
                                document.getElementById("showmessage3").innerHTML = "the fiber difference between 100g " + data2 + " and 100g " + data1 + " is " + -1 * fiber_d + "g";
                                document.getElementById("showmessage4").innerHTML = "the fat difference between 100g " + data1 + " and 100g " + data2 + " is " + fat_d + "g";
                                document.getElementById("showmessage5").innerHTML = "the calory difference between 100g " + data1 + " and 100g " + data2 + " is " + cal_d + "cal";
                            }
                            else {
                                document.getElementById("showmessage2").innerHTML = "the sugar difference between 100g " + data2 + " and 100g " + data1 + " is " + -1 * sugar_d + "g";


                                document.getElementById("showmessage3").innerHTML = "the fiber difference between 100g " + data2 + " and 100g " + data1 + " is " + -1 * fiber_d + "g";
                                document.getElementById("showmessage4").innerHTML = "the fat difference between 100g " + data1 + " and 100g " + data2 + " is " + fat_d + "g";
                                document.getElementById("showmessage5").innerHTML = "the calory difference between 100g " + data2 + " and 100g " + data1 + " is " + -1 * cal_d + "cal";
                            }
                        }
                        else {
                            if (cal_d > 0) {
                                document.getElementById("showmessage2").innerHTML = "the sugar difference between 100g " + data2 + " and 100g " + data1 + " is " + -1 * sugar_d + "g";
                                document.getElementById("showmessage3").innerHTML = "the fiber difference between 100g " + data2 + " and 100g " + data1 + " is " + -1 * fiber_d + "g";
                                document.getElementById("showmessage4").innerHTML = "the fat difference between 100g " + data2 + " and 100g " + data1 + " is " + -1 * fat_d + "g";
                                document.getElementById("showmessage5").innerHTML = "the calory difference between 100g " + data1 + " and 100g " + data2 + " is " + cal_d + "cal";
                            }
                            else {
                                document.getElementById("showmessage2").innerHTML = "the sugar difference between 100g " + data2 + " and 100g " + data1 + " is " + -1 * sugar_d + "g";
                                document.getElementById("showmessage3").innerHTML = "the fiber difference between 100g " + data2 + " and 100g " + data1 + " is " + -1 * fiber_d + "g";
                                document.getElementById("showmessage4").innerHTML = "the fat difference between 100g " + data2 + " and 100g " + data1 + " is " + -1 * fat_d + "g";
                                document.getElementById("showmessage5").innerHTML = "the calory difference between 100g " + data2 + " and 100g " + data1 + " is " + -1 * cal_d + "cal";
                            }
                        }
                    }
                }


            }
        };
        xhttp.open("GET", "https://api.calorieninjas.com/v1/nutrition?query=" + data1 + " and " + data2, true);
        xhttp.setRequestHeader("x-api-key", "oRGaIB70hm/rSJDium33Ew==8AzrLddXw89GqIjX");
        xhttp.send();
        document.getElementById('userInput').value = "";

        
    }

}


document.querySelector('#call').addEventListener('click', item);