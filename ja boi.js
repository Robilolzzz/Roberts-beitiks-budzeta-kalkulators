  //1.Nodevinēt mainīgos kurš iegūst ienākumu saraksta elemetu no html dokumenta
const ienakumi = document.getElementById('all_income');
//2.Nodevinēt mainīgos kurš iegūst izdevumu saraksta elemetu no html dokumenta
const izdevumi = document.getElementById('all_expenses');
//3.Nodevinēt mainīgos kurš iegūst pieejamā budžeta vertības elemetu no html dokumenta
const budget = document.getElementById('budget__value');
//console.log("ienakumi",ienakumi,"izdevumi",izdevumi,"budget",budget);

//4.Izveidot funkciju_1, kas izmaina pieejamā budžeta vertību
function funkcija_1(value){
document.getElementById('budget__value').innerHTML = value;

}
//5.Izveidot funkciju_2, kuru izsaucot, tiek pievienoti ienākumi vai izdevumi html elementu sarakstiem
function funkcija_2(ienakumi,type,desc,value){
console.log("ienakumi",ienakumi,"type",type,"desc",desc,"value",value)
}
//6.Izveidot funkciju_3, kas izsaucas pēc pogas "pievienot" nospiešanas
function myFunction() {
console.log("rtv");
}
//7.Funkcijai_3 jāpārbauda vai apraksta un summas lauks ir aizpildīts, ja nav, tad izvada paziņojumu par to, ka kāds no laukiem nav aizpildīts

//8.Funkcijai_3 ir jāizsauc funkcija_2, kas pievieno ienākumu vai izdevumu sarakstam jaunu ierakstu.
//9.Lai pārbaudītu vai izveidotās funkcijas darbojas pareizi, izsauc tās zemāk un ievieto fake datus
//10.Izsaukt funkciju_2, kas pievieno ienākumu sarakstam vertības

//11.Izsaukt funkciju_2, kas pievieno izdevumu sarakstam vertības

//12.Izsaukt funkciju_1, kas izmaina pieejamā budžeta vertību
funkcija_1(123123)
funkcija_2(ienakumi,true, 'ALga2',136);
//funkcija_2(all_expenses, true, 'laacis' , 26);
