({
 
    saveReuniao : function(component, event, helper) {
		let cmpEvent = component.getEvent("finish");
        cmpEvent.setParams({
            "tipo": "cadastroReuniaoLista"
        });
        cmpEvent.fire();
        helper.showToast({"message":"Reunião criada com sucesso! 📉", "type": "success"});
    },

    continuarCadastro: function(component) {
        
        component.set("v.selecionarOrganizador", false);       
    	component.set("v.continuarCadastro", true);
       
        
	},
    
   

})