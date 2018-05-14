@echo off
echo "Starting RLAB Componente Server...."
echo "Press CTRL-C to stop server. If any problem will ocurr, the rlab log file located in the log directory will indicate the problem".


:: Aqui se ponen los jar que implementan 
:: las vistas/modulos para que los cargue al arrancar la 
:: aplicacion
:: Lista separada por comas
set modules_views_path1=../examples/generador_aleatorio/code/Modulo_Generador_NumerosAletorios.jar

:: Conf file
set configFile=./conf/random_generator/rlab_randomGenerator.properties

:: Conf file for Wrapper
set configWrapperFile=./conf/random_generator/wrapper.conf


wrapper -c %configWrapperFile% wrapper.java.classpath.100=%modules_views_path1% wrapper.app.parameter.1=%configFile%

