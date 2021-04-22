import { LightningElement, wire, api } from 'lwc';
import loadParticipantes from '@salesforce/apex/GerenciadorReuniaoController.getReunioes';

export default class RelatedReunioes extends LightningElement {
  @api recordId;

  reunioes;
  

  @wire(loadParticipantes, { usuarioId: '$recordId' } )
  wiredParticipantes( { error,  data } ) {
    
    if(error) {
      console.log('error');
      console.dir(error);
    }
    
    else if (data) {
      this.reunioes = data;
      console.log(this.reunioes);
      
      console.log('data');
      console.dir(data);
    }
  }
}