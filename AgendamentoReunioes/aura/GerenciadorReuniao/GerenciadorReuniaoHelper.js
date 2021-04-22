({
    getUsuariosDisponiveis : function(component, event, helper) {
        
		let action = component.get("c.getUsuariosDisponiveis");
        action.setCallback(this, (response) => {
           	let state = response.getState(); 
            console.log(state);
            if(state === "SUCCESS") {
            	//console.log("oi success");
            	//console.log(response.getReturnValue());
            	component.set("v.listUsuariosDisponiveis", response.getReturnValue());
        	}
        });
       	$A.enqueueAction(action);

    },
    getReunioesDisponiveis : function(component, event, helper) {
        
		let action = component.get("c.getReunioesDisponiveis");
       // console.log('oi helper');
        action.setCallback(this, (response) => {
           // console.log('oi setCallbakc');
           	let state = response.getState(); ;
            if(state === "SUCCESS") {
            	//console.log("oi success");
            	//console.log(response.getReturnValue());
            	component.set("v.listReunioesDisponiveis", response.getReturnValue());
            	//console.log(component.get("v.listReunioesDisponiveis"));
        	}
        });
       	$A.enqueueAction(action);

    }, 
    adicionarParticipante : function(component, event, helper) {
        
		let action = component.get("c.adicionarParticipante");
        console.log('oi helper');
        action.setParams({
            "idUsuario": component.get("v.participanteId"),
            "idReuniao": component.get("v.reuniaoId")
        })
        action.setCallback(this, (response) => {
           	let state = response.getState(); ;
            if(state === "SUCCESS") {
            	console.log("oi state adicionarParticipante");
            	
            	
            	
            	
        	}
        });
       	$A.enqueueAction(action);

    },      
})