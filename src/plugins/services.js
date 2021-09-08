import AppService from "@/js/services/appService";

export default (context, inject) => {

  context.appService = new AppService(context);
  inject('appService', context.appService);
}
