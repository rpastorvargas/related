@echo off
echo "Starting EJS Levitator RLAB Component Server...."
echo "Press CTRL-C to stop server. If any problem will ocurr, the rlab log file located in the log directory will indicate the problem".


:: Aqui se ponen los jar que implementan 
:: las vistas/modulos para que los cargue al arrancar la 
:: aplicacion
:: Lista separada por comas
set modules_views_path1=../examples/levitator_virtual/code/VirtualLevitatorEJS.jar
set modules_views_path2=../examples/levitator_virtual/code/magneticrc3.jar
set modules_views_path3=../examples/levitator_virtual/code/_ejslibrary.jar


:: Conf file
set configFile=./conf/rlab_VIRTUALEJSLevitator.properties

:: Conf file for Wrapper
set configWrapperFile=./conf/wrapper_win.conf


wrapper -c %configWrapperFile% wrapper.java.classpath.101=%modules_views_path1% wrapper.java.classpath.102=%modules_views_path2% wrapper.java.classpath.103=%modules_views_path3% wrapper.app.parameter.1=%configFile%

