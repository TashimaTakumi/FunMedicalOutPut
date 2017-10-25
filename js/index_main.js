const FIRSTNAME = 0;
const LASTNAME = 1;
const PERCENTAGE = 2;
const SIGN = 3;

var page1; var page2;

var dataOfServer={};

const dummyData=[
  ["田島","拓実",100,0],
  ["小嶋","勇暉",50,5],
];

window.onload=function(){
  page1=document.getElementById("page1");
  page2=document.getElementById("page2");
  page1.style.display="block";
  page2.style.display="none";
}

function initVisial(){
  page1.style.display="block";
  page2.style.display="none";
}

function changeVisial(){
  page1.style.display="none";
  page2.style.display="block";

  initData(document.getElementById("patientNo").value);
}

function initData(patientNo){
  getDataFromServer(patientNo);

  document.getElementById("nameFirst").textContent=getData(FIRSTNAME);
  document.getElementById("nameLast").textContent=getData(LASTNAME);
  document.getElementById("percentage").textContent=getData(PERCENTAGE);
  document.getElementById("sign").textContent=getData(SIGN);
}

function getDataFromServer(patientNo){
  dataOfServer.firstName=dummyData[patientNo][FIRSTNAME];
  dataOfServer.lastName=dummyData[patientNo][LASTNAME];
  dataOfServer.percentage=dummyData[patientNo][PERCENTAGE];
  dataOfServer.sign=dummyData[patientNo][SIGN];
}

function getData(mode){
  switch (mode) {
    case FIRSTNAME:
      return dataOfServer.firstName;
    case LASTNAME:
      return dataOfServer.lastName;
    case PERCENTAGE:
      return dataOfServer.percentage;
    case SIGN:
      return dataOfServer.sign;
  }
  return null;
}
