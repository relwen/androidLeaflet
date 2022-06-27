

function cheickConnection(){
     
    return AndroidBridge.isConnected();

}


function Toast(msg){
   AndroidBridge.Toast(msg);
}



function saveData(id,name,surname,phone,profil){

   AndroidBridge.saveUserPref(id,name,surname,phone,profil);
}


function getId(){
   return AndroidBridge.getIdPrefs();
}

function getName(){

   return AndroidBridge.getNamePrefs();
}

function getSurname(){

   return AndroidBridge.getSurnamePrefs();
}


function sendToWathApp(msg){

   AndroidBridge.sendToWathApp(msg);
}


function fidelisationWa(msg,photo){

   AndroidBridge.fidelisationWa(msg,photo);
}


function whathsAppCourtoisie(strMessage){
   AndroidBridge.whathsAppCourtoisie(strMessage);
}



function whathsPub(produit,prix_produit,photo,strMessage){
   AndroidBridge.whathsPub(produit,prix_produit,photo,strMessage);
}



function whathsPromo(obj_promo, produit_promos,photo,prix_init,prix_promo,date_debut_promo,date_end_promo){
   AndroidBridge.whathsPromo(obj_promo, produit_promos,photo,prix_init,prix_promo,date_debut_promo,date_end_promo);
}



function whathsJeuConcours(quizz,photo,price_to_win,date_end_game){
   AndroidBridge.whathsJeuConcours(quizz,photo,price_to_win,date_end_game);
}






function FacebookAuth(){
    AndroidBridge.FacebookAuth();
}


function getPhone(){

   return AndroidBridge.getPhonePrefs();
}



function getProfil(){

   return AndroidBridge.getProfilPrefs();
}



function statusConnect(){
   var value=AndroidBridge.statusConnecter();
   return value;
}


function saveLaunch(){
   AndroidBridge.saveLaunch();
}



// Retourner si l'activité a été lancée au moins une fois

function firstLaunch(){

   var value=AndroidBridge.firstLaunch();

   return value;

}



// Se deconnecter

function logout(){
   AndroidBridge.logout();
}


//Inserer une instance de fiche
function saveDownload(nom_boutique, date, descript_boutique, on_off, pub_content, file_content, commercant_id, localisation,id_boutique,heure,media,pcouverture){
   AndroidBridge.saveDownlaod(nom_boutique, date, descript_boutique, on_off, pub_content, file_content, commercant_id, localisation,id_boutique,heure,media,pcouverture);
}




function getAllDownload(){
   return JSON.parse(AndroidBridge.getAllDownload());
}


function getPositionNetwork(){
   return JSON.parse(AndroidBridge.getPositionNetwork());
}


