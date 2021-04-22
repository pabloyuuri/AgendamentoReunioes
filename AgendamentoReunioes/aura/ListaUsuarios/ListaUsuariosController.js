({
    doInit : function(component, event, helper) {  

        component.set('v.columns', [
            {label: 'Nome Completo', fieldName: 'Name', type: 'text', editable: true },
            {label: 'RG', fieldName: 'RG__c', type: 'text', editable: true},
            {label: 'Email', fieldName: 'Email', type: 'text', editable: true}
        ]);
        helper.usuarios(component, event, helper);
    },
    limparFiltro: function(component, event, helper) {
        component.set("v.filtroNome", "");
       	component.set("v.filtroSobrenome", "");
        component.set("v.filtroRG", "");
        helper.usuarios(component, event, helper);
    },
    filtrar: function(component, event, helper) {
        helper.usuarios(component, event, helper);
    },
    
    openCadastroUsuario : function(component, event, helper) 
    {
        component.set("v.modalCadastroUsuario", true);
    },
    
    handleClickButtonUsuario: function(component) 
    {
        component.set("v.modalCadastroUsuario", false);
    },
    handleClickButtonReuniao: function(component){
        component.set("v.modalCadastroReuniao", false);
    },
    
    openCadastroReuniao: function(component){
        component.set("v.modalCadastroReuniao", true);
    },
    
    handleSaveEdition: function (component, event, helper) {
        let updatedRecords = component.find("usuarioTable").get("v.draftValues");
        let action = component.get("c.updateUsuario");
        action.setParams({
            "updatedRecords" : updatedRecords
        })
        
        action.setCallback(this, (response) => {            
            let state = response.getState();
            if (state === "SUCCESS") {
            if ( response.getReturnValue() === true ) {  
            
            helper.toastMsg( 'success', 'Registro(s) salvo(s) com sucesso!' );  
            
        } else {   
           helper.toastMsg( 'error', 'Verifique os dados passados 🧐' );  
        }  
        
    } 
     else {  
     
     	helper.toastMsg( 'error', 'Servidor não response. 😿' );  
    
    }  
    });
    
    	$A.enqueueAction(action );
    
    },

    handleRowAction: function (component, event, helper) {
        let selectedRow = event.getParam('selectedRows');
        component.set("v.delIdUsuario", selectedRow);
   
        
    },
    
   	deletarUsuario: function(component, event, helper) {
        let action = component.get("c.deleteUsuario");
        action.setParams({
            "recordListUsuario": component.get("v.delIdUsuario")
        });
        
        action.setCallback(this, (response) => {
            let state = response.getState();
            console.log(state);
            if (state === "SUCCESS") {
            	helper.usuarios(component, event, helper);
            	helper.toastMsg('warning', 'Registro(s) de usuário(s) deletado com sucesso! 😭😳 ' );
        	}
        })
        
        $A.enqueueAction(action);
    },
            
   	handleModalTableEventCustom : function(component, event, helper) { 
       let tipo = event.getParam("tipo");
       
       if(tipo === "cadastroUsuarioLista") {
            component.set("v.modalCadastroUsuario", false);
            helper.usuarios(component, event, helper);
       } 
       if(tipo === "cadastroReuniaoLista") {
       	component.set("v.modalCadastroReuniao", false);
       }
    }
    
   
    
    
})