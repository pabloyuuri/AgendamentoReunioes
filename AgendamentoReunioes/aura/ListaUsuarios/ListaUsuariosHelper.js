({
    usuarios: function(component, event, helper) {
        let action = component.get("c.listaUsuarios");
       	
        action.setParams({
            "nome": component.get("v.filtroNome"), 
            "rg": component.get("v.filtroRG")
        })
        
        action.setCallback(this, (response) => {
            let responseValue = response.getReturnValue();
            let state = response.getState();
            
            if(state === "SUCCESS") {
            	component.set("v.usuarios", responseValue);
        	}
  		});
        
        $A.enqueueAction(action);
    },
 
    
    toastMsg : function( strType, strMessage ) {  
          
        let showToast = $A.get( "e.force:showToast" );   
        showToast.setParams({
            message : strMessage,  
            type : strType,  
            mode : 'sticky'  
              
        });   
        showToast.fire();   
          
    }


    
})