#echo off
echo "Starting RLAB Component Server.... (PID with TANK MODEL)"
echo "Press CTRL-C to stop server. If any problem will ocurr, the rlab log file located in the log directory will indicate the problem".


# Aqui se ponen los jar que implementan 
# las vistas/modulos para que los cargue al arrancar la 
# aplicacion
# Lista separada por comas
modules_views_path1=../examples/tank_model/code/EJSSimpleTankModelModule.jar
modules_views_path2=../examples/tank_model/code/ejs_tank.jar
modules_views_path3=../examples/pid/code/PIDModule.jar



# Conf file
configFile=./conf/rlab_tank_pid.properties

#  Conf file for Wrapper
configWrapperFile=./conf/wrapper_linux_tank_pid.conf


./wrapper -c $configWrapperFile wrapper.java.classpath.101=$modules_views_path1 wrapper.java.classpath.102=$modules_views_path2 wrapper.java.classpath.103=$modules_views_path3 wrapper.app.parameter.1=$configFile

