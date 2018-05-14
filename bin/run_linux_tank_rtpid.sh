#!/bin/bash

echo "Starting RLAB Componente Server.... (RT Pid Thread with simulation model)"
echo "Press CTRL-C to stop server. If any problem will ocurr, the rlab log file located in the log directory will indicate the problem."

# Aqui se ponen los jar que implementan
# las vistas/modulos para que los cargue al arrancar la aplicacion
# Lista separada por comas

modules_views_path1=../examples/tank_model/code/EJSSimpleTankModelModule.jar
modules_views_path2=../examples/tank_model/code/ejs_tank.jar
modules_views_path3=../examples/rtpid/code/RTModule.jar
modules_views_path4=../examples/tank_model/code/TankView.jar
modules_views_path5=../examples/tank_model/code/ejs_tank_view2.jar
modules_views_path6=../examples/rtpid/code/TestRT.jar

# Conf file
configFile=./conf/rlab_tank_rtpid.properties
# Conf file for Wrapper
configWrapperFile=./conf/wrapper_linux_tank_rtpid.conf

./wrapper -c $configWrapperFile wrapper.java.classpath.101=$modules_views_path1  wrapper.java.classpath.102=$modules_views_path2  wrapper.java.classpath.103=$modules_views_path3 wrapper.java.classpath.104=$modules_views_path4 wrapper.java.classpath.105=$modules_views_path5 wrapper.java.classpath.106=$modules_views_path6 wrapper.app.parameter.1=$configFile
