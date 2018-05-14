@echo off
echo "Starting Signal GENERATOR RLAB Componente Server...."
echo "Press CTRL-C to stop server. If any problem will ocurr, the rlab log file located in the log directory will indicate the problem".


:: Aqui se ponen los jar que implementan 
:: las vistas/modulos para que los cargue al arrancar la 
:: aplicacion
:: Lista separada por comas
set modules_views_path1=../examples/signal_generator/code/*

:: Conf file
set configFile=./conf/signal_generator/rlab_SignalGenerator.properties

:: Conf file for Wrapper
set configWrapperFile=./conf/signal_generator/wrapper.conf


wrapper -c %configWrapperFile% wrapper.java.classpath.101=%modules_views_path1% wrapper.app.parameter.1=%configFile%

