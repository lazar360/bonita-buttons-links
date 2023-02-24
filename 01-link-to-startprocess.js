/* Exemple Bonita : Procurement Request 
in variables : 
Name : procurementProcesses
Value : /bonita/API/bpm/process?c=1&p=0&f=name=Procurement%20request&o=deploymentDate
Type : External API
*/

/* in variables
Name : getProcurementProcessStartUrl
Value : cf ci-dessous
Type : Javascript expression
*/
if ($data.procurementProcesses && $data.procurementProcesses.length) {
    var process = $data.procurementProcesses[0];
    return "/bonita/portal/resource/process/"+ encodeURI(process.name) +"/" + process.version + "/content/?id=" + process.id +"&senderUrl="+ window.top.location.href;
}
// La variable getProcurementProcessStartUrl est reporté dans le widget Link à la rubrique URL (custom url)
