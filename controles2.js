function alpha(ch)
{
    i=0;
    ch=ch.toUpperCase();
    while(i<ch.length && (ch.charAt(i)>='A' && ch.charAt(i)<='Z')){
        i++;
    }
    return i==ch.length;
}
function numerique(ch)
{
    i=0;
    while(i<ch.length && (ch.charAt(i)>='0' && ch.charAt(i)<='9')){
        i++;
    }
    return i==ch.length;
}
function verif_email(ch)
{
    p1=ch.indexOf("@");
    p2=ch.indexOf(".");
    ch1=ch.substring(0,p1);
    ch2=ch.substring(p1+1,p2);
    ch3=ch.substring(p2+1);
    alert(ch1+" "+ch2+" "+ch3);
    if(p1>p2 || p1==-1 || p2==-1 || ch1=="" || ch2=="" || ch3=="" || !alpha(ch2) || ch3!="com"){
        return false;
    } 
    else{
        return true;    
    }
}
function controle(){
    nom=document.getElementById("nom").value;
    prenom=document.getElementById("prenom").value;
    cin=document.getElementById("cin").value;
    age=document.getElementById("age").value;
    email=document.getElementById("email").value;
    liste = document.getElementById("list");
    c1 = document.getElementById("sec").checked;
    c2 = document.getElementById("univ").checked;
    c3 = document.getElementById("aut").checked;
    g1 = document.getElementById("pt").checked;
    g2 = document.getElementById("js").checked;
    g3 = document.getElementById("c").checked;

    if(nom=="" || !alpha(nom)){
        alert("Veuillez remplir le champ nom");
        return false;
    }
    if(prenom=="" || !alpha(prenom)){
        alert("Prenom feregh !");
        return false;
    }
    if(cin=="" || !numerique(cin) || cin.length!=8){
        alert("CIN mch mrgl !");
        return false;
    }
    if(!(cin.substr(0,2)=="01" || cin.substr(0,2)=="02"))
    {
        alert("CIN doit pas commencer par 01 ou 02 !");
        return false;
    }
    if(age=="" || !numerique(age)){
        alert("Age mech mrgl !");
        return false;
    }
    if(email==""){
        alert("Email feregh !");
        return false;
    }
    if(!verif_email(email)){
        alert("Email mech mrgl !");
        return false;
    }
    if(liste.options.selectedIndex==0){
        alert("Veuillez choisir un Modules de formation !");
        return false;
    }
    if(c1==false && c2==false && c3==false){
        alert("Veuillez cocher au moins un Niveau !");
        return false;
    }
    if(g1==false && g2==false && g3==false){
        alert("Veuillez cocher au moins une langages de programmation !");
        return false;
    }

}
