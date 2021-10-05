
// container
let container=document.createElement("div");
container.setAttribute("class","container");

let row=document.createElement("div");
row.setAttribute("class","row");

let col1=document.createElement("div");
col1.setAttribute("class","col-12");

// heading
let  headline=document.createElement("div")
headline.setAttribute("class","headline")
headline.innerHTML=" NATIONALITY  PREDICTOR";
let line=document.createElement("hr");

col1.append(headline)

//navbar
let col6=document.createElement("div");
col6.setAttribute("class","col-12 navbararea");

let navbar=document.createElement("div");
navbar.setAttribute("class","navbar1");

let a1=document.createElement("a")
a1.setAttribute("href","#");
a1.innerHTML="Home";

let a2=document.createElement("a")
a2.setAttribute("href","https://nationalize.io/#responses");
a2.setAttribute("target","_blank");
a2.innerHTML="Document";

let a3=document.createElement("a")
a3.setAttribute("href","https://genderize.io/");
a2.setAttribute("target","_blank");
a3.innerHTML="API";

navbar.append(a1,a2,a3)
col6.append(navbar)

//content
let col7=document.createElement("div");
col7.setAttribute("class","col-12");

let para=document.createElement("p");
para.innerHTML="Your nationality is the country you come from: American, Canadian, and Russian are all nationalities. A person's nationality is where they are a legal citizen, usually in the country where they were born.Nationality is a legal identification of a person in international law, establishing the person as a subject, a national, of a sovereign state. It affords the state jurisdiction over the person and affords the person the protection of the state against other states."
let para1=document.createElement("p");
para1.innerHTML=""
col7.append(para);


//image
let col2=document.createElement("div");
col2.setAttribute("class","col-12");
col2.setAttribute("id","image");
let  slideshow=document.createElement("div")
slideshow.setAttribute("class","slideshow")

let demohead=document.createElement("div");
demohead.setAttribute("id","demo");
demohead.setAttribute("class","carousel");
demohead.setAttribute("data-ride","carousel");

let ul=document.createElement("ul");
ul.setAttribute("class","carousel-indicators");

let li1=document.createElement("li");
li1.setAttribute("data-target","#demo");
li1.setAttribute("data-slide-to","0");
li1.setAttribute("class","active");

let li2=document.createElement("li");
li2.setAttribute("data-target","#demo");
li2.setAttribute("data-slide-to","1");



ul.append(li1,li2);


let carinner=document.createElement("div");
carinner.setAttribute("class","carousel-inner");

let caritem1=document.createElement("div");
caritem1.setAttribute("class","carousel-item active");

let img1=document.createElement("img");
img1.setAttribute("src","flag2.png");


let caritem2=document.createElement("div");
caritem2.setAttribute("class","carousel-item ");

let img2=document.createElement("img");
img2.setAttribute("src","un2.png");



let carprev=document.createElement("a");
carprev.setAttribute("href","#demo");
carprev.setAttribute("data-slide","prev");
carprev.setAttribute("class","carousel-control-prev");

let span1=document.createElement("span");
span1.setAttribute("class","carousel-control-prev-icon");

carprev.append(span1);

let carnext=document.createElement("a");
carnext.setAttribute("href","#demo");
carnext.setAttribute("data-slide","next");
carnext.setAttribute("class","carousel-control-next");

let span2=document.createElement("span");
span2.setAttribute("class","carousel-control-next-icon");

carnext.append(span2);





caritem1.append(img1);
caritem2.append(img2);
// caritem3.append(img3);
// caritem4.append(img4);
// caritem5.append(img5);

carinner.append(caritem1,caritem2);
demohead.append(ul,carinner,carprev,carnext);
slideshow.append(demohead);
col2.append(slideshow);


//
let col3=document.createElement("div");
col3.setAttribute("class","col-12 ");
// col3.setAttribute("id",)
let content=document.createElement("p")
content.innerHTML="It predicts the nationality of a person given their name.Enter the person name to know the nationality details:"
col3.append(content);
//
let col4=document.createElement("div");
col4.setAttribute("class","col-12");

let group=document.createElement("div");
 group.setAttribute("class","input-field");
let input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","name");
input.setAttribute("placeholder","Search by name");

let label=document.createElement("label");
// label.setAttribute("class=","form-label");
label.setAttribute("for","#name");
// label.innerHTML="Search by name";

let btn=document.createElement("button");
btn.setAttribute("type","button");


btn.append("Predict");
group.append(input,label,btn)
col4.append(group);
//
let col5=document.createElement("div");
col5.setAttribute("class","col-12");

let outputarea=document.createElement("div");
outputarea.setAttribute("class","outputarea");

let table=document.createElement("table");

let thead=document.createElement("thead");
let tr=document.createElement("tr");
let th1=document.createElement("th");
th1.innerHTML="Country Code";

let th2=document.createElement("th");
th2.innerHTML="Country Name";

let th3=document.createElement("th");
th3.innerHTML="Probability";

let th4=document.createElement("th");
th4.innerHTML="Name";

tr.append(th4,th1,th2,th3);
thead.append(tr);


let tbody=document.createElement("tbody");

table.append(thead,tbody);


col5.append(outputarea);


let col8=document.createElement("div");
col8.setAttribute("class","col-12 ");
col8.setAttribute("id","footer1");

let p=document.createElement("div");
p.innerHTML="contact:"
let address=document.createElement("div");
address.innerHTML="http://www.organisewehreuf.com";


let icon1=document.createElement("i");
icon1.setAttribute("class","fa fa-facebook-square");

let icon2=document.createElement("i");
icon2.setAttribute("class","fa fa-twitter");

let icon3=document.createElement("i");
icon3.setAttribute("class","fa fa-envelope");

let icon4=document.createElement("i");
icon4.setAttribute("class","fa fa-google-plus");



col8.append(icon1,icon2,icon3,icon4,p,address);



let col9=document.createElement("div");
col9.setAttribute("class","col-12 ");




let contentdetail=document.createElement("div");
contentdetail.setAttribute("id","notes");
contentdetail.innerHTML="People may need...";

let content1=document.createElement("div");
content1.innerHTML="National law";
let c1=document.createElement("p");
c1.innerHTML="Nationals normally have the right to enter or return to the country they belong to. Passports are issued to nationals of a state, rather than only to citizens, because passport is a travel document used to enter the country. However, nationals may not have the right of abode (the right to live permanently) in the countries that granted them passports."



let content2=document.createElement("div");
content2.innerHTML="Nationality versus citizenship";
let c2=document.createElement("p");
c2.innerHTML="citizenship is focused on the internal political life of the state and nationality is a matter of international law.[25] Article 15 of the Universal Declaration of Human Rights states that everyone has the right to nationality."


contentdetail.append(content1,c1,content2,c2);
col9.append(contentdetail);
row.append(col1,col6,col7,col2,col3,col4,col5,col9,col8);
container.append(row);
document.body.append(container);

// event on button
document.querySelector("button").addEventListener("click",function(event)
{
    display();
});


// function to display the table and fetch data from API
async function display()
{
    try{
        let getname=document.getElementById("name").value;
        let fetchdata = await fetch(`https://api.nationalize.io?name=${getname}`);
       
        let data= await fetchdata.json();
        let pname=data.name;
        let country1="";
        let country2="";
        let prob1=0;
        let prob2=0;
        let cname1="";
        let cname2="";
        
        if(data.country.length==1)
        {
            country1=data.country[0].country_id;
            prob1=data.country[0].probability;
            cname1= getcname(country1);
            tableappend(pname,country1,cname1,prob1);
            outputarea.append(table);
            console.log(cname1);
        }
        else if(data.country.length>=2)
        {
            country1=data.country[0].country_id;
            prob1=(data.country[0].probability);
            console.log("before "+prob1);
            country2=data.country[1].country_id;
            prob2=(data.country[1].probability);
            prob1=fixdecimal(prob1);
            prob2=fixdecimal(prob2);
            console.log("after "+prob1);
            cname1= getcname(country1);
            cname2=getcname(country2);
            
            tableappend(pname,country1,cname1,prob1);
            if(country2!="")
            tableappend(pname,country2,cname2,prob2);
            outputarea.append(table);
        }
        else if(data.country.length==0)
        {
            window.alert("Hello! \nSorry I can't predict by this name.\nTry with some other name.");
        }
    
        
    }
    catch(e)
    {
        console.log("error");
       
    }    
     
   
}
// function to set decimal to 4 digit
function fixdecimal(num) {
    
    var n = num.toFixed(4);
   return n
  }

//   funtion to append the row to tbody
function tableappend(name,countrycode,countryname,prob)
{
    
    let tr=document.createElement("tr");
    let td1=document.createElement("td");
    td1.innerHTML=countrycode;
    let td2=document.createElement("td");
    td2.innerHTML=countryname;
    let td3=document.createElement("td");
    td3.innerHTML=prob;
    let td4=document.createElement("td");
    td4.innerHTML=name;

    tr.append(td4,td1,td2,td3);
    tbody.append(tr);


}


// to get the country name by countrycode as a parameter
function getcname(countrycode)
{
var object=[
    {cname:"Afghanistan",code:"AF"},
    {cname:"Albania",code:"AL"},
    {cname:"Algeria",code:"DZ"},
    {cname:"American Samoa",code:"AS"},
    {cname:"Andorra",code:"AD"},
    {cname:"Angola",code:"AO"},
    {cname:"Anguilla",code:"AI"},
    {cname:"Antarctica",code:"AQ"},
    {cname:"Antigua and Barbuda",code:"AG"},
    {cname:"Argentina",code:"AR"},
    {cname:"Armenia",code:"AM"},
    {cname:"Aruba",code:"AW"},
    {cname:"Australia",code:"AU"},
    {cname:"Austria",code:"AT"},
    {cname:"Azerbaijan",code:"AZ"},
    {cname:"Bahamas ",code:"BS"},
    {cname:"Bahrain",code:"BH"},
    {cname:"Bangladesh",code:"BD"},
    {cname:"Barbados",code:"BB"},
    {cname:"Belarus",code:"BY"},
    {cname:"Belgium",code:"BE"},
    {cname:"Belize",code:"BZ"},
    {cname:"Benin",code:"BJ"},
    {cname:"Bermuda",code:"BM"},
    {cname:"Bhutan",code:"BT"},
    {cname:"Bolivia",code:"BO"},
    {cname:"Bonaire, Sint Eustatius and Saba",code:"BQ"},
    {cname:"Bosnia and Herzegovina",code:"BA"},
    {cname:"Botswana",code:"BW"},
    {cname:"Bouvet Island",code:"BV"},
    {cname:"Brazil",code:"BR"},
    {cname:"British Indian Ocean Territory",code:"IO"},
    {cname:"Brunei Darussalam",code:"BN"},
    {cname:"Bulgaria",code:"BG"},
    {cname:"Burkina Faso",code:"BF"},
    {cname:"Burundi",code:"BI"},
    {cname:"Cabo Verde	",code:"CV"},
    {cname:"Cambodia",code:"KH"},
    {cname:"Cameroon",code:"CM"},
    {cname:"Canada",code:"CA"},
    {cname:"Cayman Islands",code:"KY"},
    {cname:"Central African Republic",code:"CF"},
    {cname:"Chad",code:"TD"},
    {cname:"Chile",code:"CL"},
    {cname:"China",code:"CN"},
    {cname:"Christmas Island",code:"CX"},
    {cname:"Cocos (Keeling) Islands (the)",code:"CC"},
    {cname:"Colombia",code:"CO"},
    {cname:"Comoros",code:"KM"},
    {cname:"Congo(the Democratic Republic of the) ",code:"CD"},
    {cname:"Congo (the)",code:"CG"},
    {cname:"Cook Islands (the)",code:"CK"},
    {cname:"Costa Rica",code:"CR"},
    {cname:"Croatia",code:"HR"},
    {cname:"Cuba",code:"CU"},
    {cname:"Curaçao",code:"CW"},
    {cname:"Cyprus",code:"CY"},
    {cname:"Czechia",code:"CZ"},
    {cname:"Côte d'Ivoire",code:"CI"},
    {cname:"Denmark",code:"DK"},
    {cname:"Djibouti",code:"DJ"},
    {cname:"Dominica",code:"DM"},
    {cname:"Dominican Republic (the)",code:"DO"},
    {cname:"Ecuador",code:"EC"},
    {cname:"Egypt",code:"EG"},
    {cname:"El Salvador",code:"SV"},
    {cname:"Equatorial Guinea",code:"GQ"},
    {cname:"Eritrea",code:"ER"},
    {cname:"Estonia",code:"EE"},
    {cname:"Eswatini",code:"SZ"},
    {cname:"Ethiopia",code:"ET"},
    {cname:"Falkland Islands (the) [Malvinas]",code:"FK"},
    {cname:"Faroe Islands",code:"FO"},
    {cname:"Fiji",code:"FJ"},
    {cname:"Finland",code:"FI"},
    {cname:"France",code:"FR"},
    {cname:"French Guiana",code:"GF"},
    {cname:"French Polynesia",code:"PF"},
    {cname:"French Southern Territories (the)",code:"TF"},
    {cname:"Gabon",code:"GA"},
    {cname:"Gambia (the)",code:"GM"},
    {cname:"Georgia",code:"GE"},
    {cname:"Germany",code:"DE"},
    {cname:"Ghana",code:"GH"},
    {cname:"Gibraltar",code:"GI"},
    {cname:"Greece",code:"GR"},
    {cname:"Greenland",code:"GL"},
    {cname:"Grenada",code:"GD"},
    {cname:"Guadeloupe",code:"GP"},
    {cname:"Guam",code:"GU"},
    {cname:"Guatemala",code:"GT"},
    {cname:"Guernsey",code:"GG"},
    {cname:"Guinea",code:"GN"},
    {cname:"Guinea-Bissau",code:"GW"},
    {cname:"Guyana",code:"GY"},
    {cname:"Haiti",code:"HT"},
    {cname:"Heard Island and McDonald Islands",code:"HM"},
    {cname:"Holy See (the)",code:"VA"},
    {cname:"Honduras",code:"HN"},
    {cname:"Hong Kong",code:"HK"},
    {cname:"Hungary",code:"HU"},
    {cname:"Iceland",code:"IS"},
    {cname:"India",code:"IN"},
    {cname:"Indonesia",code:"ID"},
    {cname:"Iran (Islamic Republic of)",code:"IR"},
    {cname:"Iraq",code:"IQ"},
    {cname:"Ireland",code:"IE"},
    {cname:"Isle of Man",code:"IM"},
    {cname:"Israel",code:"IL"},
    {cname:"Italy",code:"IT"},
    {cname:"Jamaica",code:"JM"},
    {cname:"Japan",code:"JP"},
    {cname:"Jersey",code:"JE"},
    {cname:"Jordan",code:"JO"},
    {cname:"Kazakhstan",code:"KZ"},
    {cname:"Kenya",code:"KE"},
    {cname:"Kiribati",code:"KI"},
    {cname:"Korea (the Democratic People's Republic of)",code:"KP"},
    {cname:"Korea (the Republic of)",code:"KR"},
    {cname:"Kuwait",code:"KW"},
    {cname:"Kyrgyzstan",code:"KG"},
    {cname:"Lao People's Democratic Republic (the)",code:"LA"},
    {cname:"Latvia",code:"LV"},
    {cname:"Lebanon",code:"LB"},
    {cname:"Lesotho",code:"LS"},
    {cname:"Liberia",code:"LR"},
    {cname:"Libya",code:"LY"},
    {cname:"Liechtenstein",code:"LI"},
    {cname:"Lithuania",code:"LT"},
    {cname:"Luxembourg",code:"LU"},
    {cname:"Macao",code:"MO"},
    {cname:"Madagascar",code:"MG"},
    {cname:"Malawi",code:"MW"},
    {cname:"Malaysia",code:"MY"},
    {cname:"Maldives",code:"MV"},
    {cname:"Mali",code:"ML"},
    {cname:"Malta",code:"MT"},
    {cname:"Marshall Islands (the)",code:"MH"},
    {cname:"Martinique",code:"MQ"},
    {cname:"Mauritania",code:"MR"},
    {cname:"Mauritius",code:"MU"},
    {cname:"Mayotte",code:"YT"},
    {cname:"Mexico",code:"MX"},
    {cname:"Micronesia (Federated States of)",code:"FM"},
    {cname:"Moldova (the Republic of)",code:"MD"},
    {cname:"Monaco",code:"MC"},
    {cname:"Mongolia",code:"MN"},
    {cname:"Montenegro",code:"ME"},
    {cname:"Montserrat",code:"MS"},
    {cname:"Morocco",code:"MA"},
    {cname:"Mozambique",code:"MZ"},
    {cname:"Myanmar",code:"MM"},
    {cname:"Namibia",code:"NA"},
    {cname:"Nauru",code:"NR"},
    {cname:"Nepal",code:"NP"},
    {cname:"Netherlands (the)",code:"	NL"},
    {cname:"New Caledonia",code:"NC"},
    {cname:"New Zealand",code:"	NZ"},
    {cname:"Nicaragua",code:"NI"},
    {cname:"Niger (the)",code:"NE"},
    {cname:"Nigeria",code:"NG"},
    {cname:"Niue",code:"NU"},
    {cname:"Norfolk Island",code:"NF"},
    {cname:"Northern Mariana Islands (the",code:"MP"},
    {cname:"Norway",code:"NO"},
    {cname:"Oman",code:"OM"},
    {cname:"Pakistan",code:"PK"},
    {cname:"Palau",code:"PW"},
    {cname:"Palestine, State of",code:"PS"},
    {cname:"Panama",code:"PA"},
    {cname:"Papua New Guinea",code:"PG"},
    {cname:"Paraguay",code:"PY"},
    {cname:"Peru",code:"PE"},
    {cname:"Philippines (the)",code:"PH"},
    {cname:"Pitcairn",code:"PN"},
    {cname:"Poland",code:"PL"},
    {cname:"Portugal",code:"PT"},
    {cname:"Puerto Rico",code:"PR"},
    {cname:"Qatar",code:"QA"},
    {cname:"Republic of North Macedonia",code:"MK"},
    {cname:"Romania",code:"RO"},
    {cname:"Russian Federation (the)",code:"RU"},
    {cname:"Rwanda",code:"RW"},
    {cname:"Réunion",code:"RE"},
    {cname:"Saint Barthélemy",code:"BL"},
    {cname:"Saint Helena",code:"SH"},
    {cname:"Saint Kitts and Nevis",code:"KN"},
    {cname:"Saint Lucia",code:"LC"},
    {cname:"Saint Martin",code:"MF"},
    {cname:"Saint Pierre and Miquelon",code:"PM"},
    {cname:"Saint Vincent and the Grenadines",code:"VC"},
    {cname:"Samoa",code:"WS"},
    {cname:"San Marino",code:"SM"},
    {cname:"Sao Tome and Principe",code:"ST"},
    {cname:"Saudi Arabia",code:"SA"},
    {cname:"Senegal",code:"SN"},

    {cname:"Serbia",code:"RS"},
    {cname:"Seychelles",code:"SC"},
    {cname:"Sierra Leone",code:"SL"},
    {cname:"Singapore",code:"SG"},
    {cname:"Sint Maarten ",code:"SX"},
    {cname:"Slovakia",code:"SK"},
    {cname:"Slovenia",code:"SI"},
    {cname:"Solomon Islands",code:"SB"},
    {cname:"Somalia",code:"SO"},
    {cname:"South Africa",code:"ZA"},
    {cname:"South Georgia and the South Sandwich Islands",code:"GS"},
    {cname:"South Sudan",code:"SS"},
    {cname:"Spain",code:"ES"},
    {cname:"Sri Lanka",code:"LK"},
    {cname:"Sudan (the)",code:"SD"},

    {cname:"Suriname",code:"SR"},
    {cname:"Svalbard and Jan Mayen",code:"SJ"},
    {cname:"Sweden",code:"SE"},
    {cname:"Switzerland",code:"CH"},

    {cname:"Syrian Arab Republic",code:"SY"},
    {cname:"Taiwan",code:"TW"},
    {cname:"Tajikistan",code:"TJ"},

    {cname:"Tanzania",code:"TZ"},
    {cname:"Thailand",code:"TH"},
    {cname:"Timor-Leste",code:"TL"},
    {cname:"Togo",code:"TG"},
    {cname:"Tokelau",code:"TK"},
    {cname:"Tonga",code:"TO"},
    {cname:"Trinidad and Tobago",code:"TT"},
    {cname:"Tunisia",code:"TN"},

    {cname:"Turkey",code:"TR"},
    {cname:"Turkmenistan",code:"TM"},
    {cname:"Turks and Caicos Islands ",code:"TC"},
    {cname:"Tuvalu",code:"TV"},
    {cname:"Uganda",code:"UG"},
    {cname:"Ukraine",code:"UA"},
    {cname:"United Arab Emirates ",code:"AE"},
    {cname:"United Kingdom of Great Britain and Northern Ireland ",code:"GB"},
    {cname:"United States Minor Outlying Islands ",code:"UM"},
    {cname:"United States of America ",code:"US"},
    {cname:"Uruguay",code:"UY"},
    {cname:"Uzbekistan",code:"UZ"},
    {cname:"Vanuatu",code:"VU"},
    {cname:"Venezuela ",code:"VE"},
    {cname:"Viet Nam",code:"VN"},

    {cname:"Virgin Islands (British)",code:"VG"},
    {cname:"Virgin Islands (U.S.)",code:"VI"},
    {cname:"Wallis and Futuna",code:"WF"},
    {cname:"Western Sahara",code:"EH"},
    {cname:"Yemen",code:"YE"},
    {cname:"Zambia",code:"ZM"},
    {cname:"Zimbabwe",code:"ZW"},
    {cname:"Åland Islands",code:"AX"}
    
]
    for(let i=0;i<object.length;i++)
    {
        let temp=object[i].code;
        if(temp==countrycode)
        {
            // console.log(typeof object[i].code+"= "+ typeof countrycode );
        return object[i].cname;
        }
    }
    return countrycode;
}


   

