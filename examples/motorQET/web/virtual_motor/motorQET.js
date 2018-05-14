function motorQET(_topFrame,_libraryPath,_codebasePath) {
  var _model = EJSS_CORE.createAnimation();
  var _view;
  var _isPlaying = false;
  var _isPaused = true;
  var _isMobile = (navigator===undefined) ? false : navigator.userAgent.match(/iPhone|iPad|iPod|Android|BlackBerry|Opera Mini|IEMobile/i);

var _stringProperties = {};
  var _tools = {
    showInputDialog : EJSS_INTERFACE.BoxPanel.showInputDialog,
    showOkDialog : EJSS_INTERFACE.BoxPanel.showOkDialog,
    showOkCancelDialog : EJSS_INTERFACE.BoxPanel.showOkCancelDialog
  };

  function _play()  { _isPaused = false; _isPlaying = true;  _model.play();  }
  function _pause() { _isPaused = true;  _isPlaying = false; _model.pause(); }
  function _step()  { _pause();  _model.step(); }
  function _reset() { _model.reset();  _isPaused = _model.isPaused(); _isPlaying = _model.isPlaying(); }
  function _update() { _model.update(); }
  function _initialize() { _model.initialize(); }
  function _setFPS(_fps) { _model.setFPS(_fps); }
  function _setDelay(_delay) { _model.setDelay(_delay); }
  function _setStepsPerDisplay(_spd) { _model.setStepsPerDisplay(_spd); }
  function _setUpdateView(_updateView) { _model.setUpdateView(_updateView); }
  function _setAutoplay(_auto) { _model.setAutoplay(_auto); }
  function _println(_message) { console.log(_message); }

  function _breakAfterThisPage() { _model.setShouldBreak(true); }

  function _resetSolvers() { if (_model.resetSolvers) _model.resetSolvers(); }

  function _saveText(name,type,content) { if (_model.saveText) _model.saveText(name,type,content); }

  function _saveState(name) { if (_model.saveState) _model.saveState(name); }

  function _saveImage(name,panelname) { if (_model.saveImage) _model.saveImage(name,panelname); }

  function _readState(url,type) { if (_model.readState) _model.readState(url,type); }

  function _readText(url,type,varname) { if (_model.readText) _model.readText(url,type,varname); }

function _getStringProperty(propertyName) {
  var _value = _stringProperties[propertyName];
  if (_value===undefined) return propertyName;
  else return _value;
}
  var __pagesEnabled = [];
  function _setPageEnabled(pageName,enabled) { __pagesEnabled[pageName] = enabled; }

  var arrowPosX; // EjsS Model.Variables.vars.arrowPosX
  var arrowPosY; // EjsS Model.Variables.vars.arrowPosY
  var a; // EjsS Model.Variables.vars.a
  var arrowLenghtX; // EjsS Model.Variables.vars.arrowLenghtX
  var arrowLenghtY; // EjsS Model.Variables.vars.arrowLenghtY
  var pi; // EjsS Model.Variables.vars.pi
  var deg; // EjsS Model.Variables.vars.deg
  var angle; // EjsS Model.Variables.vars.angle
  var sp1; // EjsS Model.Variables.vars.sp1
  var sp2; // EjsS Model.Variables.vars.sp2
  var sp3; // EjsS Model.Variables.vars.sp3
  var sp4; // EjsS Model.Variables.vars.sp4
  var sp5; // EjsS Model.Variables.vars.sp5
  var sp6; // EjsS Model.Variables.vars.sp6
  var secuencia; // EjsS Model.Variables.vars.secuencia
  var secuenciar; // EjsS Model.Variables.vars.secuenciar
  var up; // EjsS Model.Variables.vars.up
  var lineaLenghtX; // EjsS Model.Variables.vars.lineaLenghtX
  var lineaLenghtY; // EjsS Model.Variables.vars.lineaLenghtY
  var gXCord; // EjsS Model.Variables.vars.gXCord
  var gYcord; // EjsS Model.Variables.vars.gYcord
  var speedRead; // EjsS Model.Variables.vars.speedRead
  var omegas; // EjsS Model.Variables.vars.omegas
  var Vms; // EjsS Model.Variables.vars.Vms
  var posicions; // EjsS Model.Variables.vars.posicions
  var velocidads; // EjsS Model.Variables.vars.velocidads
  var theta; // EjsS Model.Variables.vars.theta
  var Ims; // EjsS Model.Variables.vars.Ims
  var spA1; // EjsS Model.Variables.vars.spA1
  var spA2; // EjsS Model.Variables.vars.spA2
  var spA3; // EjsS Model.Variables.vars.spA3
  var spA4; // EjsS Model.Variables.vars.spA4
  var spA5; // EjsS Model.Variables.vars.spA5
  var spA6; // EjsS Model.Variables.vars.spA6
  var dYcord; // EjsS Model.Variables.vars.dYcord
  var dXcord; // EjsS Model.Variables.vars.dXcord
  var vueltas; // EjsS Model.Variables.vars.vueltas
  var spB1; // EjsS Model.Variables.vars.spB1
  var spB2; // EjsS Model.Variables.vars.spB2
  var spB3; // EjsS Model.Variables.vars.spB3
  var spB4; // EjsS Model.Variables.vars.spB4
  var spB5; // EjsS Model.Variables.vars.spB5
  var spB6; // EjsS Model.Variables.vars.spB6

  var t; // EjsS Model.Variables.auxVars.t
  var dt; // EjsS Model.Variables.auxVars.dt
  var Wm; // EjsS Model.Variables.auxVars.Wm
  var current; // EjsS Model.Variables.auxVars.current
  var Vm; // EjsS Model.Variables.auxVars.Vm
  var algo; // EjsS Model.Variables.auxVars.algo
  var derivada; // EjsS Model.Variables.auxVars.derivada
  var Im; // EjsS Model.Variables.auxVars.Im
  var posicion; // EjsS Model.Variables.auxVars.posicion
  var velocidad; // EjsS Model.Variables.auxVars.velocidad

  var Rm; // EjsS Model.Variables.constMotor.Rm
  var Km; // EjsS Model.Variables.constMotor.Km
  var Lm; // EjsS Model.Variables.constMotor.Lm
  var Td; // EjsS Model.Variables.constMotor.Td
  var Jeq; // EjsS Model.Variables.constMotor.Jeq

  var _privateOdesList;
  var _ODEi_evolution1;

  function _serialize() { return _model.serialize(); }

  _model._userSerialize = function() {
    return {
      arrowPosX : arrowPosX,
      arrowPosY : arrowPosY,
      a : a,
      arrowLenghtX : arrowLenghtX,
      arrowLenghtY : arrowLenghtY,
      pi : pi,
      deg : deg,
      angle : angle,
      sp1 : sp1,
      sp2 : sp2,
      sp3 : sp3,
      sp4 : sp4,
      sp5 : sp5,
      sp6 : sp6,
      secuencia : secuencia,
      secuenciar : secuenciar,
      up : up,
      lineaLenghtX : lineaLenghtX,
      lineaLenghtY : lineaLenghtY,
      gXCord : gXCord,
      gYcord : gYcord,
      speedRead : speedRead,
      omegas : omegas,
      Vms : Vms,
      posicions : posicions,
      velocidads : velocidads,
      theta : theta,
      Ims : Ims,
      spA1 : spA1,
      spA2 : spA2,
      spA3 : spA3,
      spA4 : spA4,
      spA5 : spA5,
      spA6 : spA6,
      dYcord : dYcord,
      dXcord : dXcord,
      vueltas : vueltas,
      spB1 : spB1,
      spB2 : spB2,
      spB3 : spB3,
      spB4 : spB4,
      spB5 : spB5,
      spB6 : spB6,
      t : t,
      dt : dt,
      Wm : Wm,
      current : current,
      Vm : Vm,
      algo : algo,
      derivada : derivada,
      Im : Im,
      posicion : posicion,
      velocidad : velocidad,
      Rm : Rm,
      Km : Km,
      Lm : Lm,
      Td : Td,
      Jeq : Jeq
    };
  };

  function _unserialize(json) { return _model.unserialize(json); }

  _model._userUnserialize = function(json) {
    if(typeof json.arrowPosX != "undefined") arrowPosX = json.arrowPosX;
    if(typeof json.arrowPosY != "undefined") arrowPosY = json.arrowPosY;
    if(typeof json.a != "undefined") a = json.a;
    if(typeof json.arrowLenghtX != "undefined") arrowLenghtX = json.arrowLenghtX;
    if(typeof json.arrowLenghtY != "undefined") arrowLenghtY = json.arrowLenghtY;
    if(typeof json.pi != "undefined") pi = json.pi;
    if(typeof json.deg != "undefined") deg = json.deg;
    if(typeof json.angle != "undefined") angle = json.angle;
    if(typeof json.sp1 != "undefined") sp1 = json.sp1;
    if(typeof json.sp2 != "undefined") sp2 = json.sp2;
    if(typeof json.sp3 != "undefined") sp3 = json.sp3;
    if(typeof json.sp4 != "undefined") sp4 = json.sp4;
    if(typeof json.sp5 != "undefined") sp5 = json.sp5;
    if(typeof json.sp6 != "undefined") sp6 = json.sp6;
    if(typeof json.secuencia != "undefined") secuencia = json.secuencia;
    if(typeof json.secuenciar != "undefined") secuenciar = json.secuenciar;
    if(typeof json.up != "undefined") up = json.up;
    if(typeof json.lineaLenghtX != "undefined") lineaLenghtX = json.lineaLenghtX;
    if(typeof json.lineaLenghtY != "undefined") lineaLenghtY = json.lineaLenghtY;
    if(typeof json.gXCord != "undefined") gXCord = json.gXCord;
    if(typeof json.gYcord != "undefined") gYcord = json.gYcord;
    if(typeof json.speedRead != "undefined") speedRead = json.speedRead;
    if(typeof json.omegas != "undefined") omegas = json.omegas;
    if(typeof json.Vms != "undefined") Vms = json.Vms;
    if(typeof json.posicions != "undefined") posicions = json.posicions;
    if(typeof json.velocidads != "undefined") velocidads = json.velocidads;
    if(typeof json.theta != "undefined") theta = json.theta;
    if(typeof json.Ims != "undefined") Ims = json.Ims;
    if(typeof json.spA1 != "undefined") spA1 = json.spA1;
    if(typeof json.spA2 != "undefined") spA2 = json.spA2;
    if(typeof json.spA3 != "undefined") spA3 = json.spA3;
    if(typeof json.spA4 != "undefined") spA4 = json.spA4;
    if(typeof json.spA5 != "undefined") spA5 = json.spA5;
    if(typeof json.spA6 != "undefined") spA6 = json.spA6;
    if(typeof json.dYcord != "undefined") dYcord = json.dYcord;
    if(typeof json.dXcord != "undefined") dXcord = json.dXcord;
    if(typeof json.vueltas != "undefined") vueltas = json.vueltas;
    if(typeof json.spB1 != "undefined") spB1 = json.spB1;
    if(typeof json.spB2 != "undefined") spB2 = json.spB2;
    if(typeof json.spB3 != "undefined") spB3 = json.spB3;
    if(typeof json.spB4 != "undefined") spB4 = json.spB4;
    if(typeof json.spB5 != "undefined") spB5 = json.spB5;
    if(typeof json.spB6 != "undefined") spB6 = json.spB6;
    if(typeof json.t != "undefined") t = json.t;
    if(typeof json.dt != "undefined") dt = json.dt;
    if(typeof json.Wm != "undefined") Wm = json.Wm;
    if(typeof json.current != "undefined") current = json.current;
    if(typeof json.Vm != "undefined") Vm = json.Vm;
    if(typeof json.algo != "undefined") algo = json.algo;
    if(typeof json.derivada != "undefined") derivada = json.derivada;
    if(typeof json.Im != "undefined") Im = json.Im;
    if(typeof json.posicion != "undefined") posicion = json.posicion;
    if(typeof json.velocidad != "undefined") velocidad = json.velocidad;
    if(typeof json.Rm != "undefined") Rm = json.Rm;
    if(typeof json.Km != "undefined") Km = json.Km;
    if(typeof json.Lm != "undefined") Lm = json.Lm;
    if(typeof json.Td != "undefined") Td = json.Td;
    if(typeof json.Jeq != "undefined") Jeq = json.Jeq;
   _resetSolvers();
   _model.update();
  };

  _model.addToReset(function() {
    __pagesEnabled["arrowMovement"] = true;
    __pagesEnabled["updateLevels"] = true;
    __pagesEnabled["updateStrings"] = true;
    __pagesEnabled["evolucionEDO"] = true;
    __pagesEnabled["evolucionCorriente"] = true;
  });

  _model.addToReset(function() {
    a = 1; // EjsS Model.Variables.vars.a
    pi = 3.1415; // EjsS Model.Variables.vars.pi
    sp1 = false; // EjsS Model.Variables.vars.sp1
    sp2 = false; // EjsS Model.Variables.vars.sp2
    sp3 = false; // EjsS Model.Variables.vars.sp3
    sp4 = false; // EjsS Model.Variables.vars.sp4
    sp5 = false; // EjsS Model.Variables.vars.sp5
    sp6 = false; // EjsS Model.Variables.vars.sp6
    secuencia = 1; // EjsS Model.Variables.vars.secuencia
    up = true; // EjsS Model.Variables.vars.up
    gXCord = -0.3; // EjsS Model.Variables.vars.gXCord
    gYcord = 0.65; // EjsS Model.Variables.vars.gYcord
    theta = 0; // EjsS Model.Variables.vars.theta
    spA1 = false; // EjsS Model.Variables.vars.spA1
    spA2 = false; // EjsS Model.Variables.vars.spA2
    spA3 = false; // EjsS Model.Variables.vars.spA3
    spA4 = false; // EjsS Model.Variables.vars.spA4
    spA5 = false; // EjsS Model.Variables.vars.spA5
    spA6 = false; // EjsS Model.Variables.vars.spA6
    dYcord = -0.25; // EjsS Model.Variables.vars.dYcord
    dXcord = 0; // EjsS Model.Variables.vars.dXcord
    vueltas = 0; // EjsS Model.Variables.vars.vueltas
  });

  _model.addToReset(function() {
    t = 0; // EjsS Model.Variables.auxVars.t
    dt = 0.003; // EjsS Model.Variables.auxVars.dt
    Wm = 0; // EjsS Model.Variables.auxVars.Wm
    current = 0.05; // EjsS Model.Variables.auxVars.current
    Vm = 0; // EjsS Model.Variables.auxVars.Vm
    algo = 1; // EjsS Model.Variables.auxVars.algo
    derivada = 1; // EjsS Model.Variables.auxVars.derivada
    Im = 0.0; // EjsS Model.Variables.auxVars.Im
    posicion = 1; // EjsS Model.Variables.auxVars.posicion
    velocidad = 1; // EjsS Model.Variables.auxVars.velocidad
  });

  _model.addToReset(function() {
    Rm = 10.6; // EjsS Model.Variables.constMotor.Rm
    Km = 0.0502; // EjsS Model.Variables.constMotor.Km
    Lm = 0.82; // EjsS Model.Variables.constMotor.Lm
    Td = 0; // EjsS Model.Variables.constMotor.Td
    Jeq = 0.0000209; // EjsS Model.Variables.constMotor.Jeq
  });

  _model.addToReset(function() {
    _privateOdesList=[];
    _ODEi_evolution1 = _ODE_evolution1();
    _privateOdesList.push(_ODEi_evolution1);
  });

  _model.addToReset(function() {
    _model.setAutoplay(true);
    _model.setPauseOnPageExit(true);
    _model.setFPS(20);
    _model.setStepsPerDisplay(1);
  });

  /* Valor is a double */  // > CustomCode.ownmethods:1
  function stringalizate(valor) {  // > CustomCode.ownmethods:2
          var borrame = ''+ valor;  // > CustomCode.ownmethods:3
          var exp;  // > CustomCode.ownmethods:4
          if (borrame.length > 4) {  // > CustomCode.ownmethods:5
              if (borrame.charAt(borrame.length - 3) === 'E') {  // > CustomCode.ownmethods:6
                  exp = borrame.charAt(borrame.length - 1);  // > CustomCode.ownmethods:7
                  switch (exp) {  // > CustomCode.ownmethods:8
                      case 49:  // > CustomCode.ownmethods:9
                          valor = valor / 100;  // > CustomCode.ownmethods:10
                          borrame = '' + valor;  // > CustomCode.ownmethods:11
                          borrame = borrame.substring(0, 4) + " mA";  // > CustomCode.ownmethods:12
                          break;  // > CustomCode.ownmethods:13
                      case 50:  // > CustomCode.ownmethods:14
                          valor = valor / 10;  // > CustomCode.ownmethods:15
                          borrame = '' + valor;  // > CustomCode.ownmethods:16
                          borrame = borrame.substring(0, 4) + " mA";  // > CustomCode.ownmethods:17
                          break;  // > CustomCode.ownmethods:18
                      case 51:  // > CustomCode.ownmethods:19
                          borrame = borrame.substring(0, 4) + " mA";  // > CustomCode.ownmethods:20
                          break;  // > CustomCode.ownmethods:21
                      case 52: // 4  // > CustomCode.ownmethods:22
                      case 53: //5  // > CustomCode.ownmethods:23
                      case 54: // 6  // > CustomCode.ownmethods:24
                      case 55: // 7  // > CustomCode.ownmethods:25
                      case 56: // 8  // > CustomCode.ownmethods:26
                      case 57: // 9  // > CustomCode.ownmethods:27
                          borrame = "0 A";  // > CustomCode.ownmethods:28
                          break;  // > CustomCode.ownmethods:29
                      default:  // > CustomCode.ownmethods:30
                          borrame = "error";  // > CustomCode.ownmethods:31
                          break;  // > CustomCode.ownmethods:32
                  }  // > CustomCode.ownmethods:33
              } else if (valor === 0) {  // > CustomCode.ownmethods:34
                  borrame = valor + " A";  // > CustomCode.ownmethods:35
              }   // > CustomCode.ownmethods:36
              else if (borrame.charAt(borrame.length - 4) === 'E') {  // > CustomCode.ownmethods:37
                  borrame = "0 A";  // > CustomCode.ownmethods:38
              }  // > CustomCode.ownmethods:39
              else {  // > CustomCode.ownmethods:40
                  borrame = '' + valor;  // > CustomCode.ownmethods:41
                  borrame = borrame.substring(0, 4) + " A";  // > CustomCode.ownmethods:42
              }  // > CustomCode.ownmethods:43
              return borrame;  // > CustomCode.ownmethods:44
          } else {  // > CustomCode.ownmethods:45
              return "0 A";  // > CustomCode.ownmethods:46
          }  // > CustomCode.ownmethods:47
      }  // > CustomCode.ownmethods:48
  // value is an integer  // > CustomCode.ownmethods:49
  function shift(value){  // > CustomCode.ownmethods:50
    if(up === true){  // > CustomCode.ownmethods:51
      value = value<<1;  // > CustomCode.ownmethods:52
    }  // > CustomCode.ownmethods:53
    if(up === false){  // > CustomCode.ownmethods:54
      value = value>>1;  // > CustomCode.ownmethods:55
    }  // > CustomCode.ownmethods:56
    return value;  // > CustomCode.ownmethods:57
  }  // > CustomCode.ownmethods:58
  function clasSpeed(speedRead){  // > CustomCode.ownmethods:59
      // > CustomCode.ownmethods:60
    if( speedRead <= 25){  // > CustomCode.ownmethods:61
      secuencia = 0x01;  // > CustomCode.ownmethods:62
    }  // > CustomCode.ownmethods:63
    else if( speedRead > 25 && speedRead <= 50){  // > CustomCode.ownmethods:64
      secuencia = 0x02;  // > CustomCode.ownmethods:65
    }  // > CustomCode.ownmethods:66
    else if( speedRead > 50 && speedRead <= 75){  // > CustomCode.ownmethods:67
      secuencia=0x04;  // > CustomCode.ownmethods:68
    }  // > CustomCode.ownmethods:69
    else if(speedRead > 75 && speedRead <= 100){  // > CustomCode.ownmethods:70
      secuencia=0x08;  // > CustomCode.ownmethods:71
    }  // > CustomCode.ownmethods:72
    else if(speedRead>100&&speedRead <= 150){  // > CustomCode.ownmethods:73
      secuencia=0x0F;  // > CustomCode.ownmethods:74
    }  // > CustomCode.ownmethods:75
    else if(speedRead>150&&speedRead<=200){  // > CustomCode.ownmethods:76
      secuencia=0x20;  // > CustomCode.ownmethods:77
    }  // > CustomCode.ownmethods:78
  }  // > CustomCode.ownmethods:79

  // Returns a string form a float value: angle  // > CustomCode.angleOps:1
  function degConv(angle){  // > CustomCode.angleOps:2
    var value = angle%360;  // > CustomCode.angleOps:3
    return value.toFixed(2) + ' ';  // > CustomCode.angleOps:4
    /*String devuelveme;  // > CustomCode.angleOps:5
    devuelveme = Double.toString(angulo%360);  // > CustomCode.angleOps:6
    if(devuelveme.length()>3) devuelveme = devuelveme.substring(0,4);  // > CustomCode.angleOps:7
    return devuelveme;*/  // > CustomCode.angleOps:8
  }  // > CustomCode.angleOps:9

  function updateMeters () {  // > CustomCode.updateMeters:1
    if(Math.abs(Wm) > 0.1) sp1 = true;  // > CustomCode.updateMeters:2
  else sp1 = false;  // > CustomCode.updateMeters:3
  if(Math.abs(Wm) > 25)sp2 = true;  // > CustomCode.updateMeters:4
  else sp2=false;  // > CustomCode.updateMeters:5
  if(Math.abs(Wm) > 50)sp3 = true;  // > CustomCode.updateMeters:6
  else sp3=false;  // > CustomCode.updateMeters:7
  if(Math.abs(Wm) > 100) sp4=true;  // > CustomCode.updateMeters:8
  else sp4=false;  // > CustomCode.updateMeters:9
  if(Math.abs(Wm)>150) sp5=true;  // > CustomCode.updateMeters:10
  else sp5=false;  // > CustomCode.updateMeters:11
  if(Math.abs(Wm)>200) sp6=true;  // > CustomCode.updateMeters:12
  else sp6=false;  // > CustomCode.updateMeters:13
  if(Math.abs(Im) > 0.001) spA1 = true;  // > CustomCode.updateMeters:14
  else spA1 = false;  // > CustomCode.updateMeters:15
  if(Math.abs(Im) > 0.01)spA2 = true;  // > CustomCode.updateMeters:16
  else spA2=false;  // > CustomCode.updateMeters:17
  if(Math.abs(Im) > 0.1)spA3 = true;  // > CustomCode.updateMeters:18
  else spA3=false;  // > CustomCode.updateMeters:19
  if(Math.abs(Im) > 1) spA4=true;  // > CustomCode.updateMeters:20
  else spA4=false;  // > CustomCode.updateMeters:21
  if(Math.abs(Im)>2) spA5=true;  // > CustomCode.updateMeters:22
  else spA5=false;  // > CustomCode.updateMeters:23
  if(Math.abs(Im)>3) spA6=true;  // > CustomCode.updateMeters:24
  else spA6=false;  // > CustomCode.updateMeters:25
  if(Math.abs(Vm) > 0) spB1 = true;  // > CustomCode.updateMeters:26
  else spB1 = false;  // > CustomCode.updateMeters:27
  if(Math.abs(Vm) > 2)spB2 = true;  // > CustomCode.updateMeters:28
  else spB2=false;  // > CustomCode.updateMeters:29
  if(Math.abs(Vm) > 5)spB3 = true;  // > CustomCode.updateMeters:30
  else spB3=false;  // > CustomCode.updateMeters:31
  if(Math.abs(Vm) > 8) spB4=true;  // > CustomCode.updateMeters:32
  else spB4=false;  // > CustomCode.updateMeters:33
  if(Math.abs(Vm)>12) spB5=true;  // > CustomCode.updateMeters:34
  else spB5=false;  // > CustomCode.updateMeters:35
  if(Math.abs(Vm)>=15) spB6=true;  // > CustomCode.updateMeters:36
  else spB6=false;  // > CustomCode.updateMeters:37
  }  // > CustomCode.updateMeters:38

  function updateStrings () {  // > CustomCode.updateStrings:1
    posicions = "Radians " + (theta%(2*pi));  // > CustomCode.updateStrings:2
    if(posicions.length>13){  // > CustomCode.updateStrings:3
      posicions = posicions.substring(0,12);  // > CustomCode.updateStrings:4
    }  // > CustomCode.updateStrings:5
    velocidads = Math.round(Wm) + " rad/s";  // > CustomCode.updateStrings:6
    Vms = Vm + " V";  // > CustomCode.updateStrings:7
    //if(Math.abs(Vm)>0){  // > CustomCode.updateStrings:8
    //  Vms = Vms.substring(0,4) + " V";  // > CustomCode.updateStrings:9
    //}  // > CustomCode.updateStrings:10
    Ims = stringalizate(Im);  // > CustomCode.updateStrings:11
  }  // > CustomCode.updateStrings:12

  function updatePosition () {  // > CustomCode.updatePosition:1
    // deg = "Degrees " + degConv(Math.toDegrees(theta));  // > CustomCode.updatePosition:2
  deg = "Degrees " + degConv(theta*(180/pi));  // > CustomCode.updatePosition:3
  arrowLenghtX = 0.20 * Math.cos(theta);  // > CustomCode.updatePosition:4
  arrowLenghtY = 0.20 * Math.sin(theta);  // > CustomCode.updatePosition:5
  arrowPosX= dXcord + 0.20 * Math.cos(theta);  // > CustomCode.updatePosition:6
  arrowPosY= dYcord + 0.20 * Math.sin(theta);  // > CustomCode.updatePosition:7
  lineaLenghtX = 0.07 * Math.cos(theta);  // > CustomCode.updatePosition:8
  lineaLenghtY = 0.07 * Math.sin(theta);  // > CustomCode.updatePosition:9
  // Devuelve por la consola ángulo en radianes (módulo), velocidad, ángulo, y coordenadas longitud del indicador  // > CustomCode.updatePosition:10
  //System.out.println(theta%(2*pi) + " -- " + Wm + " -- " + theta + " -- " + arrowLenghtX + " -- " + arrowLenghtY);  // > CustomCode.updatePosition:11
  }  // > CustomCode.updatePosition:12

  _model.setValue = function(name,value){  // > CustomCode.externalUpdate:1
    if (name=="voltage"){  // > CustomCode.externalUpdate:2
      Vm = value;  // > CustomCode.externalUpdate:3
    } else if (name=="current"){  // > CustomCode.externalUpdate:4
      Im = value;  // > CustomCode.externalUpdate:5
    } else if (name=="speed"){  // > CustomCode.externalUpdate:6
      Wm = value;  // > CustomCode.externalUpdate:7
    } else if (name="angle"){  // > CustomCode.externalUpdate:8
      theta = value;  // > CustomCode.externalUpdate:9
    }  // > CustomCode.externalUpdate:10
  }  // > CustomCode.externalUpdate:11

  _model.addToInitialization(function() {
    _initializeSolvers();
  });

  _model.addToEvolution(function() {
    if (!__pagesEnabled["arrowMovement"]) return;
    updatePosition ();  // > Evolution.arrowMovement:1
  });

  _model.addToEvolution(function() {
    if (!__pagesEnabled["updateLevels"]) return;
    updateMeters ();  // > Evolution.updateLevels:1
  });

  _model.addToEvolution(function() {
    if (!__pagesEnabled["updateStrings"]) return;
    updateStrings();  // > Evolution.updateStrings:1
  });

  _model.addToEvolution(function() {
    if (!__pagesEnabled["evolucionEDO"]) return;
    _ODEi_evolution1.step();
  });

  _model.addToEvolution(function() {
    if (!__pagesEnabled["evolucionCorriente"]) return;
    Im=(Vm-Km*Wm)/Rm;  // > Evolution.evolucionCorriente:1
  });

  _model.addToFixedRelations(function() { _isPaused = _model.isPaused(); _isPlaying = _model.isPlaying(); });

  _model.addToFixedRelations(function() { _isPaused = _model.isPaused(); _isPlaying = _model.isPlaying(); });

  function _initializeSolvers() {
    for (var i=0,n=_privateOdesList.length; i<n; i++) _privateOdesList[i].initializeSolver();
  }

  function _automaticResetSolvers() {
    for (var i=0,n=_privateOdesList.length; i<n; i++) _privateOdesList[i].automaticResetSolver();
  }

  _model.resetSolvers = function() {
    for (var i=0,n=_privateOdesList.length; i<n; i++) _privateOdesList[i].resetSolver();
  };

  function _getODE(_odeName) {
    if (_odeName=="evolucionEDO") return _ODEi_evolution1;
    return null;
  }

  function _getEventSolver(_odeName) {
    var ode = _getODE(_odeName);
    if (ode===null) return null;
    return ode.getEventSolver();
  }

  function _setSolverClass(_odeName, _engine) {
    var ode = _getODE(_odeName);
    if (ode===null) return;
    if (!_engine.setODE) {
      var classname = _engine.toLowerCase();
      if      (classname.indexOf("boga")>=0)   _engine = EJSS_ODE_SOLVERS.bogackiShampine23;
      else if (classname.indexOf("cash")>=0)   _engine = EJSS_ODE_SOLVERS.cashKarp45;
      else if (classname.indexOf("dopri5")>=0) _engine = EJSS_ODE_SOLVERS.dopri5;
      else if (classname.indexOf("dopri8")>=0) _engine = EJSS_ODE_SOLVERS.dopri853;
      else if (classname.indexOf("richa")>=0)  _engine = EJSS_ODE_SOLVERS.eulerRichardson;
      else if (classname.indexOf("euler")>=0)  _engine = EJSS_ODE_SOLVERS.euler;
      else if (classname.indexOf("fehlberg87")>=0) _engine = EJSS_ODE_SOLVERS.fehlberg87;
      else if (classname.indexOf("fehlberg8")>=0)  _engine = EJSS_ODE_SOLVERS.fehlberg8;
      else if (classname.indexOf("radau")>=0)   _engine = EJSS_ODE_SOLVERS.radau5;
      else if (classname.indexOf("runge")>=0)  _engine = EJSS_ODE_SOLVERS.rungeKutta4;
      else if (classname.indexOf("rk4")>=0)    _engine = EJSS_ODE_SOLVERS.rungeKutta4;
      else if (classname.indexOf("verlet")>=0) _engine = EJSS_ODE_SOLVERS.velocityVerlet;
    }
    if (_engine) ode.setSolverClass(_engine);
  }

  function _ODE_evolution1() {
    var __odeSelf = {};
    var __eventSolver;
    var __solverClass = EJSS_ODE_SOLVERS.rungeKutta4;
    var __state=[];
    var __ignoreErrors=false;
    var __mustInitialize=true;
    var __isEnabled=true;
    var __mustUserReinitialize=false;
    var __mustReinitialize=true;


    __odeSelf.setSolverClass = function(__aSolverClass) {
      __solverClass = __aSolverClass;
      __instantiateSolver();
    };

    function __instantiateSolver() {
      __state=[];
      __pushState();
      __eventSolver = EJSS_ODE_SOLVERS.interpolatorEventSolver(__solverClass(),__odeSelf);
      __mustInitialize = true;
    }

    __odeSelf.setEnabled = function(_enabled) { __isEnabled = _enabled; };

    __odeSelf.getIndependentVariableValue = function() { return __eventSolver.getIndependentVariableValue(); };

    __odeSelf.getInternalStepSize = function() { return __eventSolver.getInternalStepSize(); };

    __odeSelf.isAccelerationIndependentOfVelocity = function() { return false; };

    __odeSelf.initializeSolver = function() {
      if (__arraysChanged()) { __instantiateSolver(); __odeSelf.initializeSolver(); return; }
      __pushState();
      __eventSolver.initialize(dt);
      __eventSolver.setBestInterpolation(false);
      __eventSolver.setMaximumInternalSteps(10000);
      __eventSolver.removeAllEvents();
      __eventSolver.setEstimateFirstStep(false);
      __eventSolver.setEnableExceptions(false);
      __eventSolver.setTolerances(0.00001,0.00001);
      __mustReinitialize = true;
      __mustInitialize = false;
    };

    function __pushState() {
      // Copy our variables to __state[] 
        var __j=0;
        var __n=0;
        var __cIn=0;
        if (__state[__cIn]!=Wm) __mustReinitialize = true;
        __state[__cIn++] = Wm;
        if (__state[__cIn]!=theta) __mustReinitialize = true;
        __state[__cIn++] = theta;
        if (__state[__cIn]!=t) __mustReinitialize = true;
        __state[__cIn++] = t;
    }

    function __arraysChanged () {
      return false;
    }

    __odeSelf.getEventSolver = function() {
      return __eventSolver;
    };

    __odeSelf.resetSolver = function() {
      __mustUserReinitialize = true;
    };

    __odeSelf.automaticResetSolver = function() {
      __mustReinitialize = true;
    };

    function __errorAction () {
      if (__ignoreErrors) return;
      console.log (__eventSolver.getErrorMessage());
      _pause();
      // Make sure the solver is reinitialized;
      __mustReinitialize = true;
    }

    __odeSelf.step = function() { return __privateStep(false); };

    __odeSelf.solverStep = function() { return __privateStep(true); };

    function __privateStep(__takeMaximumStep) {
      if (!__isEnabled) return 0;
      if (dt===0) return 0;
      if (__mustInitialize) __odeSelf.initializeSolver();
      if (__arraysChanged()) { __instantiateSolver(); __odeSelf.initializeSolver(); }
      __eventSolver.setStepSize(dt);
      __eventSolver.setInternalStepSize(dt);
      __eventSolver.setMaximumInternalSteps(10000);
      __eventSolver.setTolerances(0.00001,0.00001);
      __pushState();
      if (__mustUserReinitialize) { 
        __eventSolver.userReinitialize();
        __mustUserReinitialize = false;
        __mustReinitialize = false;
        if (__eventSolver.getErrorCode()!=EJSS_ODE_SOLVERS.ERROR.NO_ERROR) __errorAction();
      }
      else if (__mustReinitialize) { 
        __eventSolver.reinitialize();
        __mustReinitialize = false;
        if (__eventSolver.getErrorCode()!=EJSS_ODE_SOLVERS.ERROR.NO_ERROR) __errorAction();
      }
      var __stepTaken = __takeMaximumStep ? __eventSolver.maxStep() : __eventSolver.step();
      // Extract our variables from __state
        var __i=0;
        var __cOut=0;
        Wm = __state[__cOut++];
        theta = __state[__cOut++];
        t = __state[__cOut++];
      // Check for error
      if (__eventSolver.getErrorCode()!=EJSS_ODE_SOLVERS.ERROR.NO_ERROR) __errorAction();
      return __stepTaken;
    }

    __odeSelf.getState = function() { return __state; };

    __odeSelf.getRate = function(_aState,_aRate) {
      // Extract our variables from _aState
        var __i=0;
        var __cOut=0;
        var Wm = _aState[__cOut++];
        var theta = _aState[__cOut++];
        var t = _aState[__cOut++];
      // Compute the rate
        var __cRate=0;
        _aRate[__cRate++] = Km*(Vm-Wm*Km)/(Rm*Jeq); // Rate for ODE: evolucionEDO:Wm
        _aRate[__cRate++] = Wm; // Rate for ODE: evolucionEDO:theta
        _aRate[__cRate++] = 1; // independent variable
        return _aRate;
    }; //end of getRate

    __instantiateSolver();

    return __odeSelf;
  }

  function _historic_Wm(__time) {
    var __index = 0;
    return _ODEi_evolution1.getEventSolver().getStateHistory().interpolate(__time,__index);
  }

  function _historic_theta(__time) {
    var __index = 0 + 1;
    return _ODEi_evolution1.getEventSolver().getStateHistory().interpolate(__time,__index);
  }

    _model._resized = function(_width,_height) {
      _view._resized(_width,_height);
  }; // end of _resized
    _model._fontResized = function(iBase,iSize,iDelta) {
      _view._fontResized(iBase,iSize,iDelta);
  }; // end of _fontResized

  function _getViews() {
    var _viewsInfo = [];
    var _counter = 0;
    _viewsInfo[_counter++] = { name : "motorQET_ejsView", width : 800, height : 600 };
    return _viewsInfo;
  } // end of _getViews

  function _selectView(_viewNumber) {
    _view = null;
    _view = new motorQET_View(_topFrame,_viewNumber,_libraryPath,_codebasePath);
    var _view_super_reset = _view._reset;
    _view._reset = function() {
      _view_super_reset();
      switch(_viewNumber) {
        case -10 : break; // make Lint happy
        default :
        case 0:
          _view.voltageSlider.linkProperty("Value",  function() { return Vm; }, function(_v) { Vm = _v; } ); // motorQET_ejsView linking property 'Value' for element 'voltageSlider'
          _view.fldVoltageValue.linkProperty("Value",  function() { return Vm; }, function(_v) { Vm = _v; } ); // motorQET_ejsView linking property 'Value' for element 'fldVoltageValue'
          _view.discoInercia.linkProperty("X",  function() { return dXcord-0.45; } ); // motorQET_ejsView linking property 'X' for element 'discoInercia'
          _view.discoInercia.linkProperty("Y",  function() { return dYcord; }, function(_v) { dYcord = _v; } ); // motorQET_ejsView linking property 'Y' for element 'discoInercia'
          _view.discDeg.linkProperty("SizeX",  function() { return arrowLenghtX; }, function(_v) { arrowLenghtX = _v; } ); // motorQET_ejsView linking property 'SizeX' for element 'discDeg'
          _view.discDeg.linkProperty("X",  function() { return arrowPosX-0.45; } ); // motorQET_ejsView linking property 'X' for element 'discDeg'
          _view.discDeg.linkProperty("Y",  function() { return arrowPosY; }, function(_v) { arrowPosY = _v; } ); // motorQET_ejsView linking property 'Y' for element 'discDeg'
          _view.discDeg.linkProperty("SizeY",  function() { return arrowLenghtY; }, function(_v) { arrowLenghtY = _v; } ); // motorQET_ejsView linking property 'SizeY' for element 'discDeg'
          _view.zeroDeg.linkProperty("X",  function() { return dXcord-0.17; } ); // motorQET_ejsView linking property 'X' for element 'zeroDeg'
          _view.zeroDeg.linkProperty("Y",  function() { return dYcord+0.29; } ); // motorQET_ejsView linking property 'Y' for element 'zeroDeg'
          _view.recMeas.linkProperty("X",  function() { return gXCord; }, function(_v) { gXCord = _v; } ); // motorQET_ejsView linking property 'X' for element 'recMeas'
          _view.recMeas.linkProperty("Visibility",  function() { return sp1; }, function(_v) { sp1 = _v; } ); // motorQET_ejsView linking property 'Visibility' for element 'recMeas'
          _view.recMeas2.linkProperty("X",  function() { return gXCord+0.1; } ); // motorQET_ejsView linking property 'X' for element 'recMeas2'
          _view.recMeas2.linkProperty("Visibility",  function() { return sp2; }, function(_v) { sp2 = _v; } ); // motorQET_ejsView linking property 'Visibility' for element 'recMeas2'
          _view.recMeas3.linkProperty("X",  function() { return gXCord+0.2; } ); // motorQET_ejsView linking property 'X' for element 'recMeas3'
          _view.recMeas3.linkProperty("Visibility",  function() { return sp3; }, function(_v) { sp3 = _v; } ); // motorQET_ejsView linking property 'Visibility' for element 'recMeas3'
          _view.recMeas4.linkProperty("X",  function() { return gXCord+0.3; } ); // motorQET_ejsView linking property 'X' for element 'recMeas4'
          _view.recMeas4.linkProperty("Visibility",  function() { return sp4; }, function(_v) { sp4 = _v; } ); // motorQET_ejsView linking property 'Visibility' for element 'recMeas4'
          _view.recMeas5.linkProperty("X",  function() { return gXCord+0.4; } ); // motorQET_ejsView linking property 'X' for element 'recMeas5'
          _view.recMeas5.linkProperty("Visibility",  function() { return sp5; }, function(_v) { sp5 = _v; } ); // motorQET_ejsView linking property 'Visibility' for element 'recMeas5'
          _view.recMeas6.linkProperty("X",  function() { return gXCord+0.5; } ); // motorQET_ejsView linking property 'X' for element 'recMeas6'
          _view.recMeas6.linkProperty("Visibility",  function() { return sp6; }, function(_v) { sp6 = _v; } ); // motorQET_ejsView linking property 'Visibility' for element 'recMeas6'
          _view.txtOmegaValueDegrees.linkProperty("Text",  function() { return deg; }, function(_v) { deg = _v; } ); // motorQET_ejsView linking property 'Text' for element 'txtOmegaValueDegrees'
          _view.txtSpeedValue.linkProperty("Text",  function() { return velocidads; }, function(_v) { velocidads = _v; } ); // motorQET_ejsView linking property 'Text' for element 'txtSpeedValue'
          _view.pot.linkProperty("X",  function() { return dXcord+0.75; } ); // motorQET_ejsView linking property 'X' for element 'pot'
          _view.pot.linkProperty("Y",  function() { return dYcord; }, function(_v) { dYcord = _v; } ); // motorQET_ejsView linking property 'Y' for element 'pot'
          _view.correa1.linkProperty("X",  function() { return dXcord+0.75; } ); // motorQET_ejsView linking property 'X' for element 'correa1'
          _view.correa1.linkProperty("Y",  function() { return dYcord+0.07; } ); // motorQET_ejsView linking property 'Y' for element 'correa1'
          _view.correa2.linkProperty("X",  function() { return dXcord+0.75; } ); // motorQET_ejsView linking property 'X' for element 'correa2'
          _view.correa2.linkProperty("Y",  function() { return dYcord-0.07; } ); // motorQET_ejsView linking property 'Y' for element 'correa2'
          _view.segmento_disco.linkProperty("SizeX",  function() { return lineaLenghtX; }, function(_v) { lineaLenghtX = _v; } ); // motorQET_ejsView linking property 'SizeX' for element 'segmento_disco'
          _view.segmento_disco.linkProperty("X",  function() { return dXcord+0.75; } ); // motorQET_ejsView linking property 'X' for element 'segmento_disco'
          _view.segmento_disco.linkProperty("Y",  function() { return dYcord; }, function(_v) { dYcord = _v; } ); // motorQET_ejsView linking property 'Y' for element 'segmento_disco'
          _view.segmento_disco.linkProperty("SizeY",  function() { return lineaLenghtY; }, function(_v) { lineaLenghtY = _v; } ); // motorQET_ejsView linking property 'SizeY' for element 'segmento_disco'
          _view.recMeasC1.linkProperty("X",  function() { return gXCord; }, function(_v) { gXCord = _v; } ); // motorQET_ejsView linking property 'X' for element 'recMeasC1'
          _view.recMeasC1.linkProperty("Y",  function() { return gYcord; }, function(_v) { gYcord = _v; } ); // motorQET_ejsView linking property 'Y' for element 'recMeasC1'
          _view.recMeasC1.linkProperty("Visibility",  function() { return spA1; }, function(_v) { spA1 = _v; } ); // motorQET_ejsView linking property 'Visibility' for element 'recMeasC1'
          _view.recMeasC2.linkProperty("X",  function() { return gXCord+0.1; } ); // motorQET_ejsView linking property 'X' for element 'recMeasC2'
          _view.recMeasC2.linkProperty("Y",  function() { return gYcord; }, function(_v) { gYcord = _v; } ); // motorQET_ejsView linking property 'Y' for element 'recMeasC2'
          _view.recMeasC2.linkProperty("Visibility",  function() { return spA2; }, function(_v) { spA2 = _v; } ); // motorQET_ejsView linking property 'Visibility' for element 'recMeasC2'
          _view.recMeasC3.linkProperty("X",  function() { return gXCord+0.2; } ); // motorQET_ejsView linking property 'X' for element 'recMeasC3'
          _view.recMeasC3.linkProperty("Y",  function() { return gYcord; }, function(_v) { gYcord = _v; } ); // motorQET_ejsView linking property 'Y' for element 'recMeasC3'
          _view.recMeasC3.linkProperty("Visibility",  function() { return spA3; }, function(_v) { spA3 = _v; } ); // motorQET_ejsView linking property 'Visibility' for element 'recMeasC3'
          _view.recMeasC4.linkProperty("X",  function() { return gXCord+0.3; } ); // motorQET_ejsView linking property 'X' for element 'recMeasC4'
          _view.recMeasC4.linkProperty("Y",  function() { return gYcord; }, function(_v) { gYcord = _v; } ); // motorQET_ejsView linking property 'Y' for element 'recMeasC4'
          _view.recMeasC4.linkProperty("Visibility",  function() { return spA4; }, function(_v) { spA4 = _v; } ); // motorQET_ejsView linking property 'Visibility' for element 'recMeasC4'
          _view.recMeasC5.linkProperty("X",  function() { return gXCord+0.4; } ); // motorQET_ejsView linking property 'X' for element 'recMeasC5'
          _view.recMeasC5.linkProperty("Y",  function() { return gYcord; }, function(_v) { gYcord = _v; } ); // motorQET_ejsView linking property 'Y' for element 'recMeasC5'
          _view.recMeasC5.linkProperty("Visibility",  function() { return spA5; }, function(_v) { spA5 = _v; } ); // motorQET_ejsView linking property 'Visibility' for element 'recMeasC5'
          _view.recMeasC6.linkProperty("X",  function() { return gXCord+0.5; } ); // motorQET_ejsView linking property 'X' for element 'recMeasC6'
          _view.recMeasC6.linkProperty("Y",  function() { return gYcord; }, function(_v) { gYcord = _v; } ); // motorQET_ejsView linking property 'Y' for element 'recMeasC6'
          _view.recMeasC6.linkProperty("Visibility",  function() { return spA6; }, function(_v) { spA6 = _v; } ); // motorQET_ejsView linking property 'Visibility' for element 'recMeasC6'
          _view.textCurrentValue.linkProperty("Text",  function() { return Ims; }, function(_v) { Ims = _v; } ); // motorQET_ejsView linking property 'Text' for element 'textCurrentValue'
          _view.txtOmegaValueRad.linkProperty("Text",  function() { return posicions; }, function(_v) { posicions = _v; } ); // motorQET_ejsView linking property 'Text' for element 'txtOmegaValueRad'
          _view.txtVoltageValue.linkProperty("Text",  function() { return Vms; }, function(_v) { Vms = _v; } ); // motorQET_ejsView linking property 'Text' for element 'txtVoltageValue'
          _view.recMeasD1.linkProperty("X",  function() { return gXCord; }, function(_v) { gXCord = _v; } ); // motorQET_ejsView linking property 'X' for element 'recMeasD1'
          _view.recMeasD1.linkProperty("Y",  function() { return gYcord-0.22; } ); // motorQET_ejsView linking property 'Y' for element 'recMeasD1'
          _view.recMeasD1.linkProperty("Visibility",  function() { return spB1; }, function(_v) { spB1 = _v; } ); // motorQET_ejsView linking property 'Visibility' for element 'recMeasD1'
          _view.recMeasD2.linkProperty("X",  function() { return gXCord+0.1; } ); // motorQET_ejsView linking property 'X' for element 'recMeasD2'
          _view.recMeasD2.linkProperty("Y",  function() { return gYcord-0.22; } ); // motorQET_ejsView linking property 'Y' for element 'recMeasD2'
          _view.recMeasD2.linkProperty("Visibility",  function() { return spB2; }, function(_v) { spB2 = _v; } ); // motorQET_ejsView linking property 'Visibility' for element 'recMeasD2'
          _view.recMeasD3.linkProperty("X",  function() { return gXCord+0.2; } ); // motorQET_ejsView linking property 'X' for element 'recMeasD3'
          _view.recMeasD3.linkProperty("Y",  function() { return gYcord-0.22; } ); // motorQET_ejsView linking property 'Y' for element 'recMeasD3'
          _view.recMeasD3.linkProperty("Visibility",  function() { return spB3; }, function(_v) { spB3 = _v; } ); // motorQET_ejsView linking property 'Visibility' for element 'recMeasD3'
          _view.recMeasD4.linkProperty("X",  function() { return gXCord+0.3; } ); // motorQET_ejsView linking property 'X' for element 'recMeasD4'
          _view.recMeasD4.linkProperty("Y",  function() { return gYcord-0.22; } ); // motorQET_ejsView linking property 'Y' for element 'recMeasD4'
          _view.recMeasD4.linkProperty("Visibility",  function() { return spB4; }, function(_v) { spB4 = _v; } ); // motorQET_ejsView linking property 'Visibility' for element 'recMeasD4'
          _view.recMeasD5.linkProperty("X",  function() { return gXCord+0.4; } ); // motorQET_ejsView linking property 'X' for element 'recMeasD5'
          _view.recMeasD5.linkProperty("Y",  function() { return gYcord-0.22; } ); // motorQET_ejsView linking property 'Y' for element 'recMeasD5'
          _view.recMeasD5.linkProperty("Visibility",  function() { return spB5; }, function(_v) { spB5 = _v; } ); // motorQET_ejsView linking property 'Visibility' for element 'recMeasD5'
          _view.recMeasD6.linkProperty("X",  function() { return gXCord+0.5; } ); // motorQET_ejsView linking property 'X' for element 'recMeasD6'
          _view.recMeasD6.linkProperty("Y",  function() { return gYcord-0.22; } ); // motorQET_ejsView linking property 'Y' for element 'recMeasD6'
          _view.recMeasD6.linkProperty("Visibility",  function() { return spB6; }, function(_v) { spB6 = _v; } ); // motorQET_ejsView linking property 'Visibility' for element 'recMeasD6'
          break;
      } // end of switch
    }; // end of new reset

    _model.setView(_view);
    _model.reset();
    _view._enableEPub();
  } // end of _selectView

  _model.setAutoplay(true);
  _model.setFPS(20);
  _model.setStepsPerDisplay(1);
  _selectView(-1); // this includes _model.reset()
  return _model;
}
function motorQET_View (_topFrame,_viewNumber,_libraryPath,_codebasePath) {
  var _view;
  switch(_viewNumber) {
    case -10 : break; // make Lint happy
    default :
    case 0: _view = motorQET_View_0 (_topFrame); break;
  } // end of switch

  if (_codebasePath) _view._setResourcePath(_codebasePath);
  if (_libraryPath) _view._setLibraryPath(_libraryPath);
  return _view;
} // end of main function

function motorQET_View_0 (_topFrame) {
  var _view = EJSS_CORE.createView(_topFrame);

  _view._reset = function() {
    _view._clearAll();
    _view._addElement(EJSS_INTERFACE.panel,"panel", _view._topFrame) // EJsS HtmlView.motorQET_ejsView: declaration of element 'panel'
      .setProperty("Height",200) // EJsS HtmlView.motorQET_ejsView: setting property 'Height' for element 'panel'
      .setProperty("Width",420) // EJsS HtmlView.motorQET_ejsView: setting property 'Width' for element 'panel'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"voltagePanel", _view.panel) // EJsS HtmlView.motorQET_ejsView: declaration of element 'voltagePanel'
      ;

    _view._addElement(EJSS_INTERFACE.slider,"voltageSlider", _view.voltagePanel) // EJsS HtmlView.motorQET_ejsView: declaration of element 'voltageSlider'
      .setProperty("Width","100%") // EJsS HtmlView.motorQET_ejsView: setting property 'Width' for element 'voltageSlider'
      .setProperty("Maximum",15) // EJsS HtmlView.motorQET_ejsView: setting property 'Maximum' for element 'voltageSlider'
      .setProperty("Minimum",-15) // EJsS HtmlView.motorQET_ejsView: setting property 'Minimum' for element 'voltageSlider'
      .setProperty("Step",0.5) // EJsS HtmlView.motorQET_ejsView: setting property 'Step' for element 'voltageSlider'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"lblVoltagePanel", _view.voltagePanel) // EJsS HtmlView.motorQET_ejsView: declaration of element 'lblVoltagePanel'
      .setProperty("Text","Voltage") // EJsS HtmlView.motorQET_ejsView: setting property 'Text' for element 'lblVoltagePanel'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"fldVoltageValue", _view.voltagePanel) // EJsS HtmlView.motorQET_ejsView: declaration of element 'fldVoltageValue'
      .setProperty("Editable",true) // EJsS HtmlView.motorQET_ejsView: setting property 'Editable' for element 'fldVoltageValue'
      ;

    _view._addElement(EJSS_DRAWING2D.drawingPanel,"drawingPanel", _view.panel) // EJsS HtmlView.motorQET_ejsView: declaration of element 'drawingPanel'
      .setProperty("Width","100%") // EJsS HtmlView.motorQET_ejsView: setting property 'Width' for element 'drawingPanel'
      .setProperty("MinimumX",-1.0) // EJsS HtmlView.motorQET_ejsView: setting property 'MinimumX' for element 'drawingPanel'
      .setProperty("MinimumY",-1.0) // EJsS HtmlView.motorQET_ejsView: setting property 'MinimumY' for element 'drawingPanel'
      .setProperty("Background","rgba(192,255,255,255)") // EJsS HtmlView.motorQET_ejsView: setting property 'Background' for element 'drawingPanel'
      .setProperty("AutoScaleY",true) // EJsS HtmlView.motorQET_ejsView: setting property 'AutoScaleY' for element 'drawingPanel'
      .setProperty("AutoScaleX",true) // EJsS HtmlView.motorQET_ejsView: setting property 'AutoScaleX' for element 'drawingPanel'
      .setProperty("SquareAspect",true) // EJsS HtmlView.motorQET_ejsView: setting property 'SquareAspect' for element 'drawingPanel'
      .setProperty("MaximumY",1.0) // EJsS HtmlView.motorQET_ejsView: setting property 'MaximumY' for element 'drawingPanel'
      .setProperty("MaximumX",1.0) // EJsS HtmlView.motorQET_ejsView: setting property 'MaximumX' for element 'drawingPanel'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"discoInercia", _view.drawingPanel) // EJsS HtmlView.motorQET_ejsView: declaration of element 'discoInercia'
      .setProperty("FillColor","White") // EJsS HtmlView.motorQET_ejsView: setting property 'FillColor' for element 'discoInercia'
      .setProperty("SizeX",0.80) // EJsS HtmlView.motorQET_ejsView: setting property 'SizeX' for element 'discoInercia'
      .setProperty("LineColor","Black") // EJsS HtmlView.motorQET_ejsView: setting property 'LineColor' for element 'discoInercia'
      .setProperty("Visibility",true) // EJsS HtmlView.motorQET_ejsView: setting property 'Visibility' for element 'discoInercia'
      .setProperty("SizeY",0.80) // EJsS HtmlView.motorQET_ejsView: setting property 'SizeY' for element 'discoInercia'
      .setProperty("LineWidth",2) // EJsS HtmlView.motorQET_ejsView: setting property 'LineWidth' for element 'discoInercia'
      ;

    _view._addElement(EJSS_DRAWING2D.arrow,"discDeg", _view.drawingPanel) // EJsS HtmlView.motorQET_ejsView: declaration of element 'discDeg'
      .setProperty("FillColor","Blue") // EJsS HtmlView.motorQET_ejsView: setting property 'FillColor' for element 'discDeg'
      .setProperty("LineColor","Blue") // EJsS HtmlView.motorQET_ejsView: setting property 'LineColor' for element 'discDeg'
      .setProperty("LineWidth",4) // EJsS HtmlView.motorQET_ejsView: setting property 'LineWidth' for element 'discDeg'
      .setProperty("DrawFill",true) // EJsS HtmlView.motorQET_ejsView: setting property 'DrawFill' for element 'discDeg'
      ;

    _view._addElement(EJSS_DRAWING2D.segment,"zeroDeg", _view.drawingPanel) // EJsS HtmlView.motorQET_ejsView: declaration of element 'zeroDeg'
      .setProperty("SizeX",0.1) // EJsS HtmlView.motorQET_ejsView: setting property 'SizeX' for element 'zeroDeg'
      .setProperty("LineColor","Red") // EJsS HtmlView.motorQET_ejsView: setting property 'LineColor' for element 'zeroDeg'
      .setProperty("SizeY",0.1) // EJsS HtmlView.motorQET_ejsView: setting property 'SizeY' for element 'zeroDeg'
      .setProperty("LineWidth",4) // EJsS HtmlView.motorQET_ejsView: setting property 'LineWidth' for element 'zeroDeg'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"recMeas", _view.drawingPanel) // EJsS HtmlView.motorQET_ejsView: declaration of element 'recMeas'
      .setProperty("FillColor","Green") // EJsS HtmlView.motorQET_ejsView: setting property 'FillColor' for element 'recMeas'
      .setProperty("SizeX",0.1) // EJsS HtmlView.motorQET_ejsView: setting property 'SizeX' for element 'recMeas'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.motorQET_ejsView: setting property 'ShapeType' for element 'recMeas'
      .setProperty("LineColor","Green") // EJsS HtmlView.motorQET_ejsView: setting property 'LineColor' for element 'recMeas'
      .setProperty("Y",0.87) // EJsS HtmlView.motorQET_ejsView: setting property 'Y' for element 'recMeas'
      .setProperty("SizeY",0.025) // EJsS HtmlView.motorQET_ejsView: setting property 'SizeY' for element 'recMeas'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"recMeas2", _view.drawingPanel) // EJsS HtmlView.motorQET_ejsView: declaration of element 'recMeas2'
      .setProperty("FillColor","Green") // EJsS HtmlView.motorQET_ejsView: setting property 'FillColor' for element 'recMeas2'
      .setProperty("SizeX",0.1) // EJsS HtmlView.motorQET_ejsView: setting property 'SizeX' for element 'recMeas2'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.motorQET_ejsView: setting property 'ShapeType' for element 'recMeas2'
      .setProperty("LineColor","Green") // EJsS HtmlView.motorQET_ejsView: setting property 'LineColor' for element 'recMeas2'
      .setProperty("Y",0.87) // EJsS HtmlView.motorQET_ejsView: setting property 'Y' for element 'recMeas2'
      .setProperty("SizeY",0.05) // EJsS HtmlView.motorQET_ejsView: setting property 'SizeY' for element 'recMeas2'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"recMeas3", _view.drawingPanel) // EJsS HtmlView.motorQET_ejsView: declaration of element 'recMeas3'
      .setProperty("FillColor","Yellow") // EJsS HtmlView.motorQET_ejsView: setting property 'FillColor' for element 'recMeas3'
      .setProperty("SizeX",0.1) // EJsS HtmlView.motorQET_ejsView: setting property 'SizeX' for element 'recMeas3'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.motorQET_ejsView: setting property 'ShapeType' for element 'recMeas3'
      .setProperty("LineColor","Yellow") // EJsS HtmlView.motorQET_ejsView: setting property 'LineColor' for element 'recMeas3'
      .setProperty("Y",0.87) // EJsS HtmlView.motorQET_ejsView: setting property 'Y' for element 'recMeas3'
      .setProperty("SizeY",0.075) // EJsS HtmlView.motorQET_ejsView: setting property 'SizeY' for element 'recMeas3'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"recMeas4", _view.drawingPanel) // EJsS HtmlView.motorQET_ejsView: declaration of element 'recMeas4'
      .setProperty("FillColor","Yellow") // EJsS HtmlView.motorQET_ejsView: setting property 'FillColor' for element 'recMeas4'
      .setProperty("SizeX",0.1) // EJsS HtmlView.motorQET_ejsView: setting property 'SizeX' for element 'recMeas4'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.motorQET_ejsView: setting property 'ShapeType' for element 'recMeas4'
      .setProperty("LineColor","Yellow") // EJsS HtmlView.motorQET_ejsView: setting property 'LineColor' for element 'recMeas4'
      .setProperty("Y",0.87) // EJsS HtmlView.motorQET_ejsView: setting property 'Y' for element 'recMeas4'
      .setProperty("SizeY",0.1) // EJsS HtmlView.motorQET_ejsView: setting property 'SizeY' for element 'recMeas4'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"recMeas5", _view.drawingPanel) // EJsS HtmlView.motorQET_ejsView: declaration of element 'recMeas5'
      .setProperty("FillColor","Red") // EJsS HtmlView.motorQET_ejsView: setting property 'FillColor' for element 'recMeas5'
      .setProperty("SizeX",0.1) // EJsS HtmlView.motorQET_ejsView: setting property 'SizeX' for element 'recMeas5'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.motorQET_ejsView: setting property 'ShapeType' for element 'recMeas5'
      .setProperty("LineColor","Red") // EJsS HtmlView.motorQET_ejsView: setting property 'LineColor' for element 'recMeas5'
      .setProperty("Y",0.87) // EJsS HtmlView.motorQET_ejsView: setting property 'Y' for element 'recMeas5'
      .setProperty("SizeY",0.125) // EJsS HtmlView.motorQET_ejsView: setting property 'SizeY' for element 'recMeas5'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"recMeas6", _view.drawingPanel) // EJsS HtmlView.motorQET_ejsView: declaration of element 'recMeas6'
      .setProperty("FillColor","Red") // EJsS HtmlView.motorQET_ejsView: setting property 'FillColor' for element 'recMeas6'
      .setProperty("SizeX",0.1) // EJsS HtmlView.motorQET_ejsView: setting property 'SizeX' for element 'recMeas6'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.motorQET_ejsView: setting property 'ShapeType' for element 'recMeas6'
      .setProperty("LineColor","Red") // EJsS HtmlView.motorQET_ejsView: setting property 'LineColor' for element 'recMeas6'
      .setProperty("Y",0.87) // EJsS HtmlView.motorQET_ejsView: setting property 'Y' for element 'recMeas6'
      .setProperty("SizeY",0.15) // EJsS HtmlView.motorQET_ejsView: setting property 'SizeY' for element 'recMeas6'
      ;

    _view._addElement(EJSS_DRAWING2D.text,"txtOmegaValueDegrees", _view.drawingPanel) // EJsS HtmlView.motorQET_ejsView: declaration of element 'txtOmegaValueDegrees'
      .setProperty("FillColor","Black") // EJsS HtmlView.motorQET_ejsView: setting property 'FillColor' for element 'txtOmegaValueDegrees'
      .setProperty("SizeX",0.20) // EJsS HtmlView.motorQET_ejsView: setting property 'SizeX' for element 'txtOmegaValueDegrees'
      .setProperty("RelativePosition","WEST") // EJsS HtmlView.motorQET_ejsView: setting property 'RelativePosition' for element 'txtOmegaValueDegrees'
      .setProperty("LineColor","Black") // EJsS HtmlView.motorQET_ejsView: setting property 'LineColor' for element 'txtOmegaValueDegrees'
      .setProperty("X",0.1) // EJsS HtmlView.motorQET_ejsView: setting property 'X' for element 'txtOmegaValueDegrees'
      .setProperty("Y",-0.2) // EJsS HtmlView.motorQET_ejsView: setting property 'Y' for element 'txtOmegaValueDegrees'
      .setProperty("PixelSize",true) // EJsS HtmlView.motorQET_ejsView: setting property 'PixelSize' for element 'txtOmegaValueDegrees'
      .setProperty("SizeY",0.15) // EJsS HtmlView.motorQET_ejsView: setting property 'SizeY' for element 'txtOmegaValueDegrees'
      .setProperty("LineWidth",1) // EJsS HtmlView.motorQET_ejsView: setting property 'LineWidth' for element 'txtOmegaValueDegrees'
      .setProperty("DrawFill",true) // EJsS HtmlView.motorQET_ejsView: setting property 'DrawFill' for element 'txtOmegaValueDegrees'
      .setProperty("Font","normal bold 12px Verdana, Geneva, sans-serif") // EJsS HtmlView.motorQET_ejsView: setting property 'Font' for element 'txtOmegaValueDegrees'
      ;

    _view._addElement(EJSS_DRAWING2D.text,"txtSpeedValue", _view.drawingPanel) // EJsS HtmlView.motorQET_ejsView: declaration of element 'txtSpeedValue'
      .setProperty("SizeX",0.3) // EJsS HtmlView.motorQET_ejsView: setting property 'SizeX' for element 'txtSpeedValue'
      .setProperty("RelativePosition","WEST") // EJsS HtmlView.motorQET_ejsView: setting property 'RelativePosition' for element 'txtSpeedValue'
      .setProperty("X",0.4) // EJsS HtmlView.motorQET_ejsView: setting property 'X' for element 'txtSpeedValue'
      .setProperty("Y",0.88) // EJsS HtmlView.motorQET_ejsView: setting property 'Y' for element 'txtSpeedValue'
      .setProperty("PixelSize",true) // EJsS HtmlView.motorQET_ejsView: setting property 'PixelSize' for element 'txtSpeedValue'
      .setProperty("SizeY",0.2) // EJsS HtmlView.motorQET_ejsView: setting property 'SizeY' for element 'txtSpeedValue'
      .setProperty("Font","normal bold 18px Verdana, Geneva, sans-serif") // EJsS HtmlView.motorQET_ejsView: setting property 'Font' for element 'txtSpeedValue'
      ;

    _view._addElement(EJSS_DRAWING2D.text,"lblSpeed", _view.drawingPanel) // EJsS HtmlView.motorQET_ejsView: declaration of element 'lblSpeed'
      .setProperty("SizeX",0.4) // EJsS HtmlView.motorQET_ejsView: setting property 'SizeX' for element 'lblSpeed'
      .setProperty("RelativePosition","WEST") // EJsS HtmlView.motorQET_ejsView: setting property 'RelativePosition' for element 'lblSpeed'
      .setProperty("X",-0.85) // EJsS HtmlView.motorQET_ejsView: setting property 'X' for element 'lblSpeed'
      .setProperty("Y",0.88) // EJsS HtmlView.motorQET_ejsView: setting property 'Y' for element 'lblSpeed'
      .setProperty("Text","Speed") // EJsS HtmlView.motorQET_ejsView: setting property 'Text' for element 'lblSpeed'
      .setProperty("PixelSize",true) // EJsS HtmlView.motorQET_ejsView: setting property 'PixelSize' for element 'lblSpeed'
      .setProperty("SizeY",0.2) // EJsS HtmlView.motorQET_ejsView: setting property 'SizeY' for element 'lblSpeed'
      .setProperty("Font","normal bold 20px Verdana, Geneva, sans-serif") // EJsS HtmlView.motorQET_ejsView: setting property 'Font' for element 'lblSpeed'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"pot", _view.drawingPanel) // EJsS HtmlView.motorQET_ejsView: declaration of element 'pot'
      .setProperty("FillColor","Black") // EJsS HtmlView.motorQET_ejsView: setting property 'FillColor' for element 'pot'
      .setProperty("SizeX",0.15) // EJsS HtmlView.motorQET_ejsView: setting property 'SizeX' for element 'pot'
      .setProperty("LineColor","Black") // EJsS HtmlView.motorQET_ejsView: setting property 'LineColor' for element 'pot'
      .setProperty("SizeY",0.15) // EJsS HtmlView.motorQET_ejsView: setting property 'SizeY' for element 'pot'
      .setProperty("LineWidth",2) // EJsS HtmlView.motorQET_ejsView: setting property 'LineWidth' for element 'pot'
      .setProperty("DrawFill",true) // EJsS HtmlView.motorQET_ejsView: setting property 'DrawFill' for element 'pot'
      ;

    _view._addElement(EJSS_DRAWING2D.segment,"correa1", _view.drawingPanel) // EJsS HtmlView.motorQET_ejsView: declaration of element 'correa1'
      .setProperty("SizeX",-1.09) // EJsS HtmlView.motorQET_ejsView: setting property 'SizeX' for element 'correa1'
      .setProperty("SizeY",0.315) // EJsS HtmlView.motorQET_ejsView: setting property 'SizeY' for element 'correa1'
      .setProperty("LineWidth",2) // EJsS HtmlView.motorQET_ejsView: setting property 'LineWidth' for element 'correa1'
      ;

    _view._addElement(EJSS_DRAWING2D.segment,"correa2", _view.drawingPanel) // EJsS HtmlView.motorQET_ejsView: declaration of element 'correa2'
      .setProperty("SizeX",-1.09) // EJsS HtmlView.motorQET_ejsView: setting property 'SizeX' for element 'correa2'
      .setProperty("SizeY",-0.315) // EJsS HtmlView.motorQET_ejsView: setting property 'SizeY' for element 'correa2'
      .setProperty("LineWidth",2) // EJsS HtmlView.motorQET_ejsView: setting property 'LineWidth' for element 'correa2'
      ;

    _view._addElement(EJSS_DRAWING2D.segment,"segmento_disco", _view.drawingPanel) // EJsS HtmlView.motorQET_ejsView: declaration of element 'segmento_disco'
      .setProperty("LineColor","White") // EJsS HtmlView.motorQET_ejsView: setting property 'LineColor' for element 'segmento_disco'
      .setProperty("LineWidth",3) // EJsS HtmlView.motorQET_ejsView: setting property 'LineWidth' for element 'segmento_disco'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"recMeasC1", _view.drawingPanel) // EJsS HtmlView.motorQET_ejsView: declaration of element 'recMeasC1'
      .setProperty("FillColor","Green") // EJsS HtmlView.motorQET_ejsView: setting property 'FillColor' for element 'recMeasC1'
      .setProperty("SizeX",0.1) // EJsS HtmlView.motorQET_ejsView: setting property 'SizeX' for element 'recMeasC1'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.motorQET_ejsView: setting property 'ShapeType' for element 'recMeasC1'
      .setProperty("LineColor","Green") // EJsS HtmlView.motorQET_ejsView: setting property 'LineColor' for element 'recMeasC1'
      .setProperty("SizeY",0.025) // EJsS HtmlView.motorQET_ejsView: setting property 'SizeY' for element 'recMeasC1'
      .setProperty("LineWidth",0) // EJsS HtmlView.motorQET_ejsView: setting property 'LineWidth' for element 'recMeasC1'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"recMeasC2", _view.drawingPanel) // EJsS HtmlView.motorQET_ejsView: declaration of element 'recMeasC2'
      .setProperty("FillColor","Green") // EJsS HtmlView.motorQET_ejsView: setting property 'FillColor' for element 'recMeasC2'
      .setProperty("SizeX",0.1) // EJsS HtmlView.motorQET_ejsView: setting property 'SizeX' for element 'recMeasC2'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.motorQET_ejsView: setting property 'ShapeType' for element 'recMeasC2'
      .setProperty("LineColor","Green") // EJsS HtmlView.motorQET_ejsView: setting property 'LineColor' for element 'recMeasC2'
      .setProperty("SizeY",0.05) // EJsS HtmlView.motorQET_ejsView: setting property 'SizeY' for element 'recMeasC2'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"recMeasC3", _view.drawingPanel) // EJsS HtmlView.motorQET_ejsView: declaration of element 'recMeasC3'
      .setProperty("FillColor","Yellow") // EJsS HtmlView.motorQET_ejsView: setting property 'FillColor' for element 'recMeasC3'
      .setProperty("SizeX",0.1) // EJsS HtmlView.motorQET_ejsView: setting property 'SizeX' for element 'recMeasC3'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.motorQET_ejsView: setting property 'ShapeType' for element 'recMeasC3'
      .setProperty("LineColor","Yellow") // EJsS HtmlView.motorQET_ejsView: setting property 'LineColor' for element 'recMeasC3'
      .setProperty("SizeY",0.075) // EJsS HtmlView.motorQET_ejsView: setting property 'SizeY' for element 'recMeasC3'
      .setProperty("LineWidth",0) // EJsS HtmlView.motorQET_ejsView: setting property 'LineWidth' for element 'recMeasC3'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"recMeasC4", _view.drawingPanel) // EJsS HtmlView.motorQET_ejsView: declaration of element 'recMeasC4'
      .setProperty("FillColor","Yellow") // EJsS HtmlView.motorQET_ejsView: setting property 'FillColor' for element 'recMeasC4'
      .setProperty("SizeX",0.1) // EJsS HtmlView.motorQET_ejsView: setting property 'SizeX' for element 'recMeasC4'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.motorQET_ejsView: setting property 'ShapeType' for element 'recMeasC4'
      .setProperty("LineColor","Yellow") // EJsS HtmlView.motorQET_ejsView: setting property 'LineColor' for element 'recMeasC4'
      .setProperty("SizeY",0.1) // EJsS HtmlView.motorQET_ejsView: setting property 'SizeY' for element 'recMeasC4'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"recMeasC5", _view.drawingPanel) // EJsS HtmlView.motorQET_ejsView: declaration of element 'recMeasC5'
      .setProperty("FillColor","Red") // EJsS HtmlView.motorQET_ejsView: setting property 'FillColor' for element 'recMeasC5'
      .setProperty("SizeX",0.1) // EJsS HtmlView.motorQET_ejsView: setting property 'SizeX' for element 'recMeasC5'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.motorQET_ejsView: setting property 'ShapeType' for element 'recMeasC5'
      .setProperty("LineColor","Red") // EJsS HtmlView.motorQET_ejsView: setting property 'LineColor' for element 'recMeasC5'
      .setProperty("SizeY",0.125) // EJsS HtmlView.motorQET_ejsView: setting property 'SizeY' for element 'recMeasC5'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"recMeasC6", _view.drawingPanel) // EJsS HtmlView.motorQET_ejsView: declaration of element 'recMeasC6'
      .setProperty("FillColor","red") // EJsS HtmlView.motorQET_ejsView: setting property 'FillColor' for element 'recMeasC6'
      .setProperty("SizeX",0.1) // EJsS HtmlView.motorQET_ejsView: setting property 'SizeX' for element 'recMeasC6'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.motorQET_ejsView: setting property 'ShapeType' for element 'recMeasC6'
      .setProperty("LineColor","red") // EJsS HtmlView.motorQET_ejsView: setting property 'LineColor' for element 'recMeasC6'
      .setProperty("SizeY",0.15) // EJsS HtmlView.motorQET_ejsView: setting property 'SizeY' for element 'recMeasC6'
      ;

    _view._addElement(EJSS_DRAWING2D.text,"lblCurrent", _view.drawingPanel) // EJsS HtmlView.motorQET_ejsView: declaration of element 'lblCurrent'
      .setProperty("SizeX",0.4) // EJsS HtmlView.motorQET_ejsView: setting property 'SizeX' for element 'lblCurrent'
      .setProperty("RelativePosition","WEST") // EJsS HtmlView.motorQET_ejsView: setting property 'RelativePosition' for element 'lblCurrent'
      .setProperty("X",-0.85) // EJsS HtmlView.motorQET_ejsView: setting property 'X' for element 'lblCurrent'
      .setProperty("Y",0.67) // EJsS HtmlView.motorQET_ejsView: setting property 'Y' for element 'lblCurrent'
      .setProperty("Text","Current") // EJsS HtmlView.motorQET_ejsView: setting property 'Text' for element 'lblCurrent'
      .setProperty("PixelSize",true) // EJsS HtmlView.motorQET_ejsView: setting property 'PixelSize' for element 'lblCurrent'
      .setProperty("SizeY",0.2) // EJsS HtmlView.motorQET_ejsView: setting property 'SizeY' for element 'lblCurrent'
      .setProperty("Font","normal bold 20px Verdana, Geneva, sans-serif") // EJsS HtmlView.motorQET_ejsView: setting property 'Font' for element 'lblCurrent'
      ;

    _view._addElement(EJSS_DRAWING2D.text,"textCurrentValue", _view.drawingPanel) // EJsS HtmlView.motorQET_ejsView: declaration of element 'textCurrentValue'
      .setProperty("SizeX",0.3) // EJsS HtmlView.motorQET_ejsView: setting property 'SizeX' for element 'textCurrentValue'
      .setProperty("RelativePosition","WEST") // EJsS HtmlView.motorQET_ejsView: setting property 'RelativePosition' for element 'textCurrentValue'
      .setProperty("X",0.4) // EJsS HtmlView.motorQET_ejsView: setting property 'X' for element 'textCurrentValue'
      .setProperty("Y",0.67) // EJsS HtmlView.motorQET_ejsView: setting property 'Y' for element 'textCurrentValue'
      .setProperty("PixelSize",true) // EJsS HtmlView.motorQET_ejsView: setting property 'PixelSize' for element 'textCurrentValue'
      .setProperty("SizeY",0.2) // EJsS HtmlView.motorQET_ejsView: setting property 'SizeY' for element 'textCurrentValue'
      .setProperty("Font","normal bold 18px Verdana, Geneva, sans-serif") // EJsS HtmlView.motorQET_ejsView: setting property 'Font' for element 'textCurrentValue'
      ;

    _view._addElement(EJSS_DRAWING2D.text,"txtOmegaValueRad", _view.drawingPanel) // EJsS HtmlView.motorQET_ejsView: declaration of element 'txtOmegaValueRad'
      .setProperty("RelativePosition","WEST") // EJsS HtmlView.motorQET_ejsView: setting property 'RelativePosition' for element 'txtOmegaValueRad'
      .setProperty("LineColor","Red") // EJsS HtmlView.motorQET_ejsView: setting property 'LineColor' for element 'txtOmegaValueRad'
      .setProperty("X",0.1) // EJsS HtmlView.motorQET_ejsView: setting property 'X' for element 'txtOmegaValueRad'
      .setProperty("Y",-0.3) // EJsS HtmlView.motorQET_ejsView: setting property 'Y' for element 'txtOmegaValueRad'
      .setProperty("DrawLines",true) // EJsS HtmlView.motorQET_ejsView: setting property 'DrawLines' for element 'txtOmegaValueRad'
      .setProperty("PixelSize",true) // EJsS HtmlView.motorQET_ejsView: setting property 'PixelSize' for element 'txtOmegaValueRad'
      .setProperty("Font","normal bold 12px Verdana, Geneva, sans-serif") // EJsS HtmlView.motorQET_ejsView: setting property 'Font' for element 'txtOmegaValueRad'
      ;

    _view._addElement(EJSS_DRAWING2D.text,"lblVoltage", _view.drawingPanel) // EJsS HtmlView.motorQET_ejsView: declaration of element 'lblVoltage'
      .setProperty("SizeX",0.4) // EJsS HtmlView.motorQET_ejsView: setting property 'SizeX' for element 'lblVoltage'
      .setProperty("RelativePosition","WEST") // EJsS HtmlView.motorQET_ejsView: setting property 'RelativePosition' for element 'lblVoltage'
      .setProperty("X",-0.85) // EJsS HtmlView.motorQET_ejsView: setting property 'X' for element 'lblVoltage'
      .setProperty("Y",0.45) // EJsS HtmlView.motorQET_ejsView: setting property 'Y' for element 'lblVoltage'
      .setProperty("Text","Voltage") // EJsS HtmlView.motorQET_ejsView: setting property 'Text' for element 'lblVoltage'
      .setProperty("PixelSize",true) // EJsS HtmlView.motorQET_ejsView: setting property 'PixelSize' for element 'lblVoltage'
      .setProperty("SizeY",0.2) // EJsS HtmlView.motorQET_ejsView: setting property 'SizeY' for element 'lblVoltage'
      .setProperty("Font","normal bold 20px Verdana, Geneva, sans-serif") // EJsS HtmlView.motorQET_ejsView: setting property 'Font' for element 'lblVoltage'
      ;

    _view._addElement(EJSS_DRAWING2D.text,"txtVoltageValue", _view.drawingPanel) // EJsS HtmlView.motorQET_ejsView: declaration of element 'txtVoltageValue'
      .setProperty("RelativePosition","WEST") // EJsS HtmlView.motorQET_ejsView: setting property 'RelativePosition' for element 'txtVoltageValue'
      .setProperty("X",0.4) // EJsS HtmlView.motorQET_ejsView: setting property 'X' for element 'txtVoltageValue'
      .setProperty("Y",0.45) // EJsS HtmlView.motorQET_ejsView: setting property 'Y' for element 'txtVoltageValue'
      .setProperty("PixelSize",true) // EJsS HtmlView.motorQET_ejsView: setting property 'PixelSize' for element 'txtVoltageValue'
      .setProperty("Font","normal bold 18px Verdana, Geneva, sans-serif") // EJsS HtmlView.motorQET_ejsView: setting property 'Font' for element 'txtVoltageValue'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"recMeasD1", _view.drawingPanel) // EJsS HtmlView.motorQET_ejsView: declaration of element 'recMeasD1'
      .setProperty("FillColor","green") // EJsS HtmlView.motorQET_ejsView: setting property 'FillColor' for element 'recMeasD1'
      .setProperty("SizeX",0.1) // EJsS HtmlView.motorQET_ejsView: setting property 'SizeX' for element 'recMeasD1'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.motorQET_ejsView: setting property 'ShapeType' for element 'recMeasD1'
      .setProperty("LineColor","green") // EJsS HtmlView.motorQET_ejsView: setting property 'LineColor' for element 'recMeasD1'
      .setProperty("SizeY",0.025) // EJsS HtmlView.motorQET_ejsView: setting property 'SizeY' for element 'recMeasD1'
      .setProperty("LineWidth",0) // EJsS HtmlView.motorQET_ejsView: setting property 'LineWidth' for element 'recMeasD1'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"recMeasD2", _view.drawingPanel) // EJsS HtmlView.motorQET_ejsView: declaration of element 'recMeasD2'
      .setProperty("FillColor","green") // EJsS HtmlView.motorQET_ejsView: setting property 'FillColor' for element 'recMeasD2'
      .setProperty("SizeX",0.1) // EJsS HtmlView.motorQET_ejsView: setting property 'SizeX' for element 'recMeasD2'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.motorQET_ejsView: setting property 'ShapeType' for element 'recMeasD2'
      .setProperty("LineColor","green") // EJsS HtmlView.motorQET_ejsView: setting property 'LineColor' for element 'recMeasD2'
      .setProperty("SizeY",0.05) // EJsS HtmlView.motorQET_ejsView: setting property 'SizeY' for element 'recMeasD2'
      .setProperty("LineWidth",0) // EJsS HtmlView.motorQET_ejsView: setting property 'LineWidth' for element 'recMeasD2'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"recMeasD3", _view.drawingPanel) // EJsS HtmlView.motorQET_ejsView: declaration of element 'recMeasD3'
      .setProperty("FillColor","Yellow") // EJsS HtmlView.motorQET_ejsView: setting property 'FillColor' for element 'recMeasD3'
      .setProperty("SizeX",0.1) // EJsS HtmlView.motorQET_ejsView: setting property 'SizeX' for element 'recMeasD3'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.motorQET_ejsView: setting property 'ShapeType' for element 'recMeasD3'
      .setProperty("LineColor","Yellow") // EJsS HtmlView.motorQET_ejsView: setting property 'LineColor' for element 'recMeasD3'
      .setProperty("SizeY",0.075) // EJsS HtmlView.motorQET_ejsView: setting property 'SizeY' for element 'recMeasD3'
      .setProperty("LineWidth",0) // EJsS HtmlView.motorQET_ejsView: setting property 'LineWidth' for element 'recMeasD3'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"recMeasD4", _view.drawingPanel) // EJsS HtmlView.motorQET_ejsView: declaration of element 'recMeasD4'
      .setProperty("FillColor","Yellow") // EJsS HtmlView.motorQET_ejsView: setting property 'FillColor' for element 'recMeasD4'
      .setProperty("SizeX",0.1) // EJsS HtmlView.motorQET_ejsView: setting property 'SizeX' for element 'recMeasD4'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.motorQET_ejsView: setting property 'ShapeType' for element 'recMeasD4'
      .setProperty("LineColor","Yellow") // EJsS HtmlView.motorQET_ejsView: setting property 'LineColor' for element 'recMeasD4'
      .setProperty("SizeY",0.1) // EJsS HtmlView.motorQET_ejsView: setting property 'SizeY' for element 'recMeasD4'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"recMeasD5", _view.drawingPanel) // EJsS HtmlView.motorQET_ejsView: declaration of element 'recMeasD5'
      .setProperty("FillColor","red") // EJsS HtmlView.motorQET_ejsView: setting property 'FillColor' for element 'recMeasD5'
      .setProperty("SizeX",0.1) // EJsS HtmlView.motorQET_ejsView: setting property 'SizeX' for element 'recMeasD5'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.motorQET_ejsView: setting property 'ShapeType' for element 'recMeasD5'
      .setProperty("LineColor","red") // EJsS HtmlView.motorQET_ejsView: setting property 'LineColor' for element 'recMeasD5'
      .setProperty("SizeY",0.125) // EJsS HtmlView.motorQET_ejsView: setting property 'SizeY' for element 'recMeasD5'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"recMeasD6", _view.drawingPanel) // EJsS HtmlView.motorQET_ejsView: declaration of element 'recMeasD6'
      .setProperty("FillColor","red") // EJsS HtmlView.motorQET_ejsView: setting property 'FillColor' for element 'recMeasD6'
      .setProperty("SizeX",0.1) // EJsS HtmlView.motorQET_ejsView: setting property 'SizeX' for element 'recMeasD6'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.motorQET_ejsView: setting property 'ShapeType' for element 'recMeasD6'
      .setProperty("LineColor","red") // EJsS HtmlView.motorQET_ejsView: setting property 'LineColor' for element 'recMeasD6'
      .setProperty("SizeY",0.15) // EJsS HtmlView.motorQET_ejsView: setting property 'SizeY' for element 'recMeasD6'
      ;

  };

  return _view;
}



    /*  var _model;
      window.addEventListener('load',
        function () { 
          _model =  new motorQET("_topFrame","file:/D:/users/rafa/RLAB_Xml/EJS/EjsS_5.2/bin/javascript/lib/","file:/D:/users/rafa/RLAB_Xml/EJS/EjsS_5.2/workspace/source/rafa/");
          if (typeof _isBookApp !== "undefined") _model.setRunAlways(true);
          TextResizeDetector.TARGET_ELEMENT_ID = '_topFrame';
          TextResizeDetector.USER_INIT_FUNC = function () {
            var iBase = TextResizeDetector.addEventListener(function(e,args) {
              _model._fontResized(args[0].iBase,args[0].iSize,args[0].iDelta);
              },null);
            _model._fontResized(iBase);
          };
        }, false);
      window.addEventListener('resize', function () { if (_model._resized) _model._resized(window.innerWidth,window.innerHeight); }, false);
      window.addEventListener('scroll', function () { if (_model._resized) _model._resized(window.innerWidth,window.innerHeight); }, false);*/
