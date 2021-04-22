public class UsuarioController {
  
  @AuraEnabled
  public static List<User> listaUsuarios( String nome, String rg ){
      
      String query = 'SELECT id, Name, RG__c, Email FROM User WHERE Id!= null';
      
      if (!String.isBlank(nome)) {
            nome += '%'; // encontrar todos os valores que começam com o titulo
            query += ' AND Name LIKE :nome';
        }
      if (!String.isBlank(rg)) {
            rg += '%'; //
            query += ' AND RG__c LIKE :rg';
      }
        
        query += ' ORDER BY CREATEDDATE DESC';
        
        return Database.query(query);
      
  }
    
  
    

  @AuraEnabled
  public static void deleteUsuario(List<User> recordListUsuario) {
      //List<User> usuarios = [SELECT Id FROM User WHERE Id IN :recordListUsuario];
      
      //delete usuarios;
      
  }

  @AuraEnabled
  public static Boolean updateUsuario(List<User> updatedRecords) {
    try {  
      update updatedRecords;  
      return true;  
        
    } 
    catch(Exception e) {  
    
      return false;  
        
    }   
  }

}