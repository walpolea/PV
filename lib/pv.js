import { createApp, reactive } from 'petite-vue';

export default class PV {
  
  static store = reactive({});
  
  static initializeStore( data ) {
    PV.store = reactive(data);
    PV.registerScope( "globalStore", PV.store );
  }
  
  static scopes = {
    globalStore: PV.store
  };
  
  static directives = [];
  
  static registerScope( name, scope ) {
    PV.scopes[name] = scope;
  }
  
  static registerDirective( name, directive ) {
    PV.directives.push( [name, directive] );
  }
  
  static mount( mountPoint ) {
    const app = createApp(PV.scopes);
    PV.directives.forEach((e)=>app.directive(...e));
    app.mount(mountPoint);
    return app;
  }
}