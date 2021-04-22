({
	saveUser : function(component, event, helper) {
		let cmpEvent = component.getEvent("finish");
        cmpEvent.setParams({
            "tipo": "cadastroUsuarioLista"
        });
        cmpEvent.fire();
    },
})