function getConfiguration(config)
{
  // This function allows you to indicate general configuration values
  // for all devices of this model.

  // Depending on the meaning of the "device address" in this device, 
  // you may want to change the label that is used to refer to the 
  // address in the user interface.
  // For instance, if the address of the device is actually a MAC 
  // address, you may want to use the code below.
  
  // config.addressLabel = {en: "MAC address", es: "Dirección MAC"};
}

function getEndpoints(deviceAddress, endpoints)
{
  // This function allows you to indicate the initial endpoint configuration
  // when a device is created using this model. This improves end-user 
  // experience significantly, because it allows the platform to create
  // all endpoints included in the device automatically when the device
  // is created.

  // In the code below, two endpoints are created. The first is a
  // temperature sensor, while the second one is a carbon dioxide sensor.

  var medidor = endpoints.addEndpoint("1", "Número de medidor", endpointType.genericSensor);
        medidor.variableTypeId = 1217;

  var direc = endpoints.addEndpoint("2", "Dirección", endpointType.genericSensor);
        direc.variableTypeId = 1218;

  var factura = endpoints.addEndpoint("3", "Importe factura", endpointType.genericSensor);
        factura.variableTypeId = 1220;

  var fecha = endpoints.addEndpoint("4", "Fecha", endpointType.genericSensor);
        fecha.variableTypeId = 1219;
 endpoints.addEndpoint("5", "Energía activa", endpointType.energyMeter);
  endpoints.addEndpoint("6", "Energía reactiva", endpointType.energyMeter);
   endpoints.addEndpoint("7", "Potencia", endpointType.apparentPowerSensor);

 var cuenta = endpoints.addEndpoint("8", "Número de cuenta", endpointType.genericSensor);
        cuenta.variableTypeId = 1221;

}

function validateDeviceAddress(address, result)
{
  // This function allows you to validate the address of a device, when
  // the user is creating it. If your device has special validation rules
  // for the address, you can check them here, and return an error message
  // in case the address format is incorrect.

  // In the code below, a validation is made to ensure that the address 
  // is exactly 10 characters long.
  
  // if (address.length != 10) {
  //   result.ok = false;
  //   result.errorMessage = {
  //     en: "The address must be 10 characters long", 
  //     es: "La dirección debe tener exactamente 10 caracteres"
  //   };
  // }
}

function updateDeviceUIRules(device, rules)
{
  // This function allows you to specify UI rules at the device level.
  // For instance, you can make it possible to enable or disable adding
  // endpoints manually to the device after it was created.
  
  // In the code below, adding endpoints manually is disabled in the
  // user interface. This means that the device will be limited to the 
  // endpoints defined by function getEndpoints() above.
  
  rules.canCreateEndpoints = true;
}

function updateEndpointUIRules(endpoint, rules)
{
  // This function allows you to specify UI rules at the endpoint level.
  // For instance, you can make it possible to delete certain endpoints, 
  // or edit their endpoint subtype, if applicable.

   
   rules.canDelete = true;
   rules.canEditSubType = (endpoint.address == "1");
     rules.canEditSubType = (endpoint.address == "2");
       rules.canEditSubType = (endpoint.address == "3");
         rules.canEditSubType = (endpoint.address == "4");
           rules.canEditSubType = (endpoint.address == "8");
}


