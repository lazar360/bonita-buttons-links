/* Exemple Bonita : Procurement Request
1-Trouver le process 
in variables : 
Name : procurementProcesses
Value : ../API/bpm/process?c=1&p=0&f=name=Procurement%20request&o=deploymentDate
Type : External API

2-Trouver la tache
in variables : 
Name : tasksFromRequest
Value : ../API/bpm/humanTask?c=1&p=0&f=caseId={{request.caseId}}
Type : External API

3- Affichage de toutes les request avec l'appel
Dans le BPM, on a un caseId pour chaque request
On affiche toutes les requests dans un tableau avec la variable allRequest
../API/bdm/businessData/com.company.model.Request?p=0&c=20&q=find

4-Variable request
request est une variable String sans rien
Ce qui fait que quand on clique sur la ligne du tableau, ça sélectionne la request 
*/

/* in variables
Name : getTaskUrl
Value : cf ci-dessous
Type : Javascript expression
*/
if ($data.procurementProcesses && $data.procurementProcesses.length
    && $data.tasksFromRequest && $data.tasksFromRequest.length) {
    var process = $data.procurementProcesses[0];
    var task = $data.tasksFromRequest[0];
    return "/bonita/portal/resource/taskInstance/"+ encodeURI(process.name) +"/"+ encodeURI(process.version) +"/"+ encodeURI(task.name) +"/content/?id="+ task.id +"&senderUrl="+ window.top.location.href;
}