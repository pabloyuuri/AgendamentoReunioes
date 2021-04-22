({
	doInit: function(component, event, helper) {
		helper.listaReuniao(component);
        component.set('v.columns', [
            //{label: 'Organizador', fieldName:"Usuario__r.NomeCompleto__c" , type: 'text', editable: false},
            {label: 'Titulo', fieldName: 'Titulo__c', type: 'text', editable: true},
            {label: 'Status', fieldName: 'StatusReuniao__c', type: 'text', editable: true },
            {label: 'Data e Horário', fieldName: 'DataHora__c', type: 'text', editable: true},
        ]);
	},
    
    limparFiltro: function(component, event, helper) {
        component.set("v.filtroTitulo", "");
       	component.set("v.filtroStatus", "");
        component.set("v.filtroDataHora", "");
        helper.listaReuniao(component, event, helper);
    },
    filtrar: function(component, event, helper) {
        helper.listaReuniao(component, event, helper);
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
    openAdicionarParticipante : function(component, event, helper) 
    {
        component.set("v.modalAdicionarParticipante", true);
    },
    
    handleClickButtonParticipante: function(component) 
    {
        component.set("v.modalAdicionarParticipante", false);
    },
    handleSaveEdition: function (component, event, helper) {
        helper.saveEdition(component, event, helper);
    },
    
    
    
    handleRowAction: function (component, event, helper) {
        let selectedRow = event.getParam('selectedRows');
        component.set("v.delIdReuniao", selectedRow);
   
        
    },
    deletarReuniao: function(component, event, helper) {
      	let action = component.get("c.deleteReuniao");
        action.setParams({
            "recordListReuniao": component.get("v.delIdReuniao")
        });
            
       	action.setCallback(this, (response) => {
            let state = response.getState();
            console.log(state);
            if (state === "SUCCESS") {
            	helper.listaReuniao(component, event, helper);
            	helper.toastMsg('warning', 'Registro(s) de reunião deletado(s) com sucesso! 😭😳 ' );
            	
        	}
         });
            
       	 $A.enqueueAction(action);
    },
    
    
    
    handleModalTableEventCustom : function(component, event, helper) { 
       let tipo = event.getParam("tipo");
       
       if(tipo === "cadastroUsuarioLista") {
            component.set("v.modalCadastroUsuario", false);
            
       } 
       if(tipo === "cadastroReuniaoLista") {
       	component.set("v.modalCadastroReuniao", false);
        helper.listaReuniao(component, event, helper);
       }
    }
   
})