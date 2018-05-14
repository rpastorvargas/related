@echo off
echo "Starting RLAB Componente Server...."
echo "Press CTRL-C to stop server. If any problem will ocurr, the rlab log file located in the log directory will indicate the problem".


:: Aqui se ponen los jar que implementan 
:: las vistas/modulos para que los cargue al arrancar la 
:: aplicacion
:: Lista separada por comas
set modules_views_path1=../examples/generador_aleatorio_gui/code/Modulo_Generador_NumerosAletorios.jar
set modules_views_path2=../examples/generador_aleatorio_gui/code/SignalsGeneratorView.jar
set modules_views_path3=../examples/generador_aleatorio_gui/code/SteelSeries-3.9.30.jar
set modules_views_path4=../examples/generador_aleatorio_gui/code/trident-6.3.jar

:: Conf file
set configFile=./conf/random_generator_gui/rlab_randomGeneratorGUI.properties

:: Conf file for Wrapper
set configWrapperFile=./conf/random_generator_gui/wrapper.conf


wrapper -c %configWrapperFile% wrapper.java.classpath.101=%modules_views_path1% wrapper.java.classpath.102=%modules_views_path2% wrapper.java.classpath.103=%modules_views_path3% wrapper.java.classpath.104=%modules_views_path4% wrapper.app.parameter.1=%configFile%

