({
    doInit : function(component, event, helper) {
		helper.getUsuariosDisponiveis(component, event, helper);
        console.log('oi doInit');
    },
    openParticiparReuniao: function(component, event, helper) {
        component.set("v.modalCadastroParticiparReuniao", true);
    },
    handleClickButtonParticiparReuniao: function(component) {
        component.set("v.modalCadastroParticiparReuniao", false);
    },
    
    participanteSelecionado: function(component, event, helper) {
       	component.set("v.participanteId", event.target.dataset.id);
        component.set("v.selecionarReuniao", true);
        helper.getReunioesDisponiveis(component, event, helper);
    },
    reuniaoSelecionada: function(component, event, helper) {
        component.set("v.reuniaoId", event.target.dataset.id);	
        console.log('reuniaoSelecionada');
        helper.adicionarParticipante(component, event, helper);
        component.set("v.selecionarReuniao", false);
    	component.set("v.continuarCadastro", true);
	}
})