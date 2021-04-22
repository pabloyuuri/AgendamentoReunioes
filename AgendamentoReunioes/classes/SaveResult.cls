public with sharing class SaveResult {
    
    @AuraEnabled // id do registro
    public String recordId {get; private set;}
    @AuraEnabled  // response de success do registro
    public Boolean isSuccess {get; private set;}
    @AuraEnabled // response de erros registro.
    public List<String> errors;
    
    public SaveResult(Database.SaveResult save) {
        this.recordId = save.getId();
        this.isSuccess = save.isSuccess();
        this.errors = new List<String>();

        for (Database.Error error : save.getErrors()) {
            errors.add(error.getMessage());
        }
    }
}