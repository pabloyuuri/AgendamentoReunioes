({
	listaReuniao : function(component) {
        let action = component.get("c.getReuniao");
        action.setParams({
            "titulo": component.get("v.filtroTitulo"),
            "status": component.get("v.filtroStatus"),
            "dataHora": component.get("v.filtroDataHora")
        });
        action.setCallback(this, (response) => {
            let responseValue = response.getReturnValue();
            let state = response.getState();
            if(state === "SUCCESS") {
                console.log(responseValue);
                
                component.set("v.reunioes", responseValue);
            
            console.log("oi reunioes: " + component.get("v.reunioes"));
            }
        });
        
    	$A.enqueueAction(action);          
	},
    
    saveEdition: function (component, event, helper) {
       let updatedRecords = component.find("reuniaoTable").get("v.draftValues");
       let action = component.get("c.updateReuniao");
       action.setParams({
           "updatedRecords" : updatedRecords
       });
        
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
          		helper.toastMsg( 'error', 'Servidor não responde. 😿' );  
            }  
		});
    
    	$A.enqueueAction(action );  
    },
    toastMsg : function( strType, strMessage ) {  
          
        var showToast = $A.get( "e.force:showToast" );   
        showToast.setParams({   
              
            message : strMessage,  
            type : strType,  
            mode : 'sticky'  
              
        });   
        showToast.fire();   
          
    }
       
})