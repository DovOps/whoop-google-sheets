

function onOpen() {
  SpreadsheetApp.getUi()  
      .createMenu('Whoop')
      .addItem('Login', 'showSidebar')
      .addToUi();
}


function handleSidebarSubmit(obj){
  var results={};
   
  var results=handleLoginRequest(obj.username,obj.password);
  // for reasons I don't understand, Google has a hard time serializing this remotely 
  // to HTML calling this via google.script.run, but this fixes the issue.
  //    o
  // -\/^\/-
  // Whatever!
  return  JSON.parse(JSON.stringify(results));
}


function showSidebar() {
  var html = HtmlService.createHtmlOutputFromFile('login.html')
      .setTitle('Whoop Login')
      .setWidth(320);
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .showSidebar(html);
}

