# Name
Interactive Registration Form



# Description

it's an interactive registration form that get specific information in input and evaluation them and get correct information then send a registered message to user and save the entered information.

## Installation

first npm should install , use below code in terminal or CMD or PWD

```bash
npm install
```
then , for serve website with node.js , open project's folder in editor and open terminal in it or open terminal or CMD in project folder path and enter :
```bash
node server 
```
finally in browser , enter below address in URL
```bash
http://localhost:7000/
```
## Usage
when user enter data in form and click on submit button , function that written in script.js evaluate data and if data were passed by condition then send server get these data :
```bash
if (validateInput()) {
            let xhttp = new XMLHttpRequest();
            // cearte connection
            xhttp.open('POST', "http://localhost:7000/");
            xhttp.onload = function (res) {
                // get from server
                this.responseText;
                alert(this.responseText);
            }
            // send data
            xhttp.send(new FormData(document.getElementById("card")));
        }
```
in server file , Data is taken and if method type was POST then take data and convert them to string type and save them to information.txt file then set header status and a message as a response.
```bash
if (req.method === 'POST') {
    req.on("data", function (data) {
      console.log(data.toString());
      fs.appendFile("information.txt", data.toString(), function (err) {
        if (err) {
          throw err; console.log("saved in file");
        }
      })
    })
    res.writeHead(200);
    res.end("you are registered");
  } 
```
## Authors and acknowledgment
- owner : Zahra Zafarzade
- mentors : Aien Saidi , Hossein Rahimi and MohammadJavad Hasanzade