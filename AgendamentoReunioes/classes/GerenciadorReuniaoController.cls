public class GerenciadorReuniaoController {
    

    @AuraEnabled(cacheable = true)
    public static List<ParticipanteReuniao__c> getParticipantes(String reuniaoId) {
        return [SELECT Id, Usuario__r.Name  FROM ParticipanteReuniao__c	 WHERE Reuniao__c =: reuniaoId ];
    }  

    @AuraEnabled(cacheable = true)
    public static List<ParticipanteReuniao__c> getReunioes(String usuarioId) {
        return [SELECT Id, Reuniao__r.Titulo__c  FROM ParticipanteReuniao__c WHERE Usuario__c =: usuarioId ];
    }  
    
}