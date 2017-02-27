var getallen = [2,4,6,1,3,5];
var seizoenen = ["winter", "lente", "zomer", "herfst"];
var elementen = [4, "januari", "februari", 12, "maart", 11, "april"];

elementen.push("mei");
elementen.push("juni");
elementen.push(8);

elementen[0] = "fietspomp";
elementen[1] = "ventiel";
elementen[2] = "lucht";

for(var i=0; i< getallen.length;++i){
  document.write(getallen[i] + "<br>");
}
document.write("<br>");
for(var i=0; i< seizoenen.length;++i){
  document.write(seizoenen[i] + "<br>");
}
document.write("<br>");
for(var i=0; i< elementen.length;++i){
  document.write(elementen[i] + "<br>");
}
