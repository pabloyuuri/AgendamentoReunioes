import { LightningElement, wire, api } from 'lwc';
import loadParticipantes from '@salesforce/apex/GerenciadorReuniaoController.getParticipantes';
//import loadReunioes from '@salesforce/apex/GerenciadorReuniaoController.getReunioes';
export default class RelatedParticipantes extends LightningElement {
  @api recordId;

  participantes;
  

  @wire(loadParticipantes, { reuniaoId: '$recordId' } )
  wiredParticipantes( { error,  data } ) {
    
    if(error) {
      console.log('error');
      console.dir(error);
    }
    
    else if (data) {
      this.participantes = data;
      console.log(this.participantes);
      
      console.log('data');
      console.dir(data);
    }
  } 

}