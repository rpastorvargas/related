@echo off
echo "Starting RLAB Componente Server...."
echo "Press CTRL-C to stop server. If any problem will ocurr, the rlab log file located in the log directory will indicate the problem".


:: Aqui se ponen los jar que implementan 
:: las vistas/modulos para que los cargue al arrancar la 
:: aplicacion
:: Lista separada por comas
set modules_views_path1=../examples/motorQET/code/QETClientJavaApplication.jar
set modules_views_path2=../examples/motorQET/code/quanser_common
set modules_views_path3=../examples/motorQET/code/quanser_communications.jar
set modules_views_path4=../examples/motorQET/code/CameraViewer.jar
set modules_views_path5=../examples/motorQET/code/ImageViewerAxis.jar
set modules_views_path6=../examples/motorQET/code/VideoServerRLABModule.jar


:: Conf file
set configFile=./conf/rlab_motorQET.properties

:: Conf file for Wrapper
set configWrapperFile=./conf/wrapper_win.conf


wrapper -c %configWrapperFile% wrapper.java.classpath.101=%modules_views_path1% wrapper.java.classpath.102=%modules_views_path2% wrapper.java.classpath.103=%modules_views_path3%  wrapper.java.classpath.104=%modules_views_path4% wrapper.java.classpath.105=%modules_views_path5% wrapper.java.classpath.106=%modules_views_path6% wrapper.app.parameter.1=%configFile%

