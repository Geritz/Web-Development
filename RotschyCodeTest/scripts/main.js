/*eslint-env browser*/

var DetailsEmpName = document.querySelector("h1");
var DetailsEmpPos= document.querySelector("#posID");
var DetailsEmpDOH = document.querySelector("#doh");
var DetailsEmpPIC = document.querySelector("#pic");
var DetailsEmpJobDesc = document.querySelector("#jobDesc");


/* Ideally you would use the XMLhttpRequest object to obtain the JSON information the API would need to build whatever you needed done. In this case I am storing the JSON locally for ease of testing.*/
var result = {"1":{"fullname":"Brent Rotschy","nickname":"Brent","date_of_hire":"1989-01-02","reports_to":1,"job_description":"President stuff","position":"President"},"2":{"fullname":"Richard Stalman","nickname":"Rich","date_of_hire":"2012-09-19","reports_to":1,"job_description":"","position":""},"3":{"fullname":"David McPherson","nickname":"Dave","date_of_hire":"1999-06-24","reports_to":1,"job_description":"Meets with prospective developers and discusses how we can match our company's capabilities with their needs.<br>Maintains accounts with clients.<br>Works directly with the Owners to keep our customer base in line with the company mission.","position":"Sales Manager"},"4":{"fullname":"Thomas Swokowski","nickname":"Tom","date_of_hire":"2012-09-19","reports_to":1,"job_description":"","position":""},"5":{"fullname":"Samuel Fuld","nickname":"Sam","date_of_hire":"2006-12-04","reports_to":2,"job_description":"Worker Bee","position":"Employee"},"6":{"fullname":"Sarah Thegoat","nickname":"Sarah","date_of_hire":"2006-12-04","reports_to":2,"job_description":"Worker Bee","position":"Employee"},"7":{"fullname":"Noah Theman","nickname":"Noah","date_of_hire":"2006-12-04","reports_to":2,"job_description":"Worker Bee","position":"Employee"},"8":{"fullname":"Bethany Grett","nickname":"Beth","date_of_hire":"2006-12-04","reports_to":2,"job_description":"Worker Bee","position":"Employee"},"9":{"fullname":"Stephanie Neuberger","nickname":"Steph","date_of_hire":"2006-12-04","reports_to":4,"job_description":"Worker Bee","position":"Employee"},"10":{"fullname":"Todd Daniels","nickname":"","date_of_hire":"2010-11-14","reports_to":2,"job_description":"Worker Bee","position":"Employee"},"11":{"fullname":"Anne Berry","nickname":"Anne","date_of_hire":"2008-02-20","reports_to":4,"job_description":"Basically the Queen","position":"Accounts Receivable"},"12":{"fullname":"Spencer Moran","nickname":"Spencer","date_of_hire":"It could be today!","reports_to":12,"job_description":"New engineer who writes code for both front-end and backend web development as well as a truckload of other technologies.","position":"Web Developer"}}

fillEmpDetails(result["3"]);
fillListNames(result);

/*Uses the passed JSON object to fill the employee information into the main content section.*/
function fillEmpDetails (jsonObject){
    DetailsEmpName.textContent = jsonObject.fullname;
    DetailsEmpPos.textContent = " " + jsonObject.position;
    DetailsEmpDOH.textContent = " " + jsonObject.date_of_hire;
    DetailsEmpPIC.textContent = " " + result[jsonObject.reports_to].fullname;
    DetailsEmpJobDesc.textContent = jsonObject.job_description;
}

/*Uses the passed JSON object to populate the list of employees in the sidebar, and sets an onclick listener on each of them.*/
function fillListNames (jsonObject){
    var sidebarEntryHolder = document.querySelector("#sidebar-entry-container");
    for (var i in jsonObject) {
        var element = document.createElement("li");
        element.textContent = (jsonObject[i].nickname == "") ? jsonObject[i].fullname.substring(0, jsonObject[i].fullname.indexOf(' ')): jsonObject[i].nickname;
        
        // data-* is a custom attribute that can be set in HTML to store all kinds of useful information. That doesn't mean you should, of course, especially in this case since it exposes what might be considered sensitive payroll data to a simple page inspection, but for this example it works well enough.
        element.setAttribute("data-jsonobject", JSON.stringify(jsonObject[i]));
        element.onclick = function(event){
            resetSidebarSelection();
            this.classList.add("sidebar-element-selected");            
            fillEmpDetails(JSON.parse(this.getAttribute("data-jsonobject")));
        }
        sidebarEntryHolder.appendChild(element);        
    }
}

/*Resets the CSS styling on whatever element was last selected by clearing all of them from the selection class*/
function resetSidebarSelection(){
    var sidebarList = document.querySelector("#sidebar-entry-container");
    var items = sidebarList.getElementsByTagName("li");
    for (var j = 0; j < items.length; j++) {
        items[j].classList.remove("sidebar-element-selected");        
    }
}