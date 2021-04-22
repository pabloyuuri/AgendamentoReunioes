public class ReuniaoController {

	@AuraEnabled
    public static List<Reuniao__c> getReuniao(String titulo, String status, String dataHora){
        
        String query = 'SELECT User__r.Name, Titulo__c, StatusReuniao__c, DataHora__c FROM Reuniao__c WHERE Id != null';
        if (!String.isBlank(titulo)) {
            titulo += '%'; // encontrar todos os valores que começam com o titulo
            query += ' AND Titulo__c LIKE :titulo';
        }
        if (!String.isBlank(status)) {
            status += '%'; // 
            query += ' AND StatusReuniao__c LIKE :status';
        }
        if (!String.isBlank(dataHora)) {
            dataHora += '%'; //
            query += ' AND DataHora__c LIKE :dataHora';
        }
        
        query += ' ORDER BY CREATEDDATE DESC';
        
        return Database.query(query);
    }
    
   @AuraEnabled
   public static Boolean updateReuniao(List<Reuniao__c> updatedRecords) {
        try {  
          update updatedRecords;  
          return true;  
            
        } 
        catch(Exception e) {  
        
          return false;  
        
    	}
    }
    
    @AuraEnabled
    public static void deleteReuniao(List<Reuniao__c> recordListReuniao) {
        List<Reuniao__c> reuniao = [SELECT Id FROM Reuniao__c WHERE Id IN :recordListReuniao];
        
        delete reuniao;
        
    }

  

}