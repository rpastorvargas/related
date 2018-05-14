@echo off
echo "Starting RLAB Componente Server --> VIDEO LABORATORY...."
echo "Press CTRL-C to stop server. If any problem will ocurr, the rlab log file located in the log directory will indicate the problem".


:: Aqui se ponen los jar que implementan 
:: las vistas/modulos para que los cargue al arrancar la 
:: aplicacion
:: Lista separada por comas
set modules_views_path1=../examples/servidor_video/code/CameraViewer.jar
set modules_views_path2=../examples/servidor_video/code/ImageViewerAxis.jar
set modules_views_path3=../examples/servidor_video/code/VideoServerRLABModule.jar
set modules_views_path4=../examples/servidor_video/code/VideoRecordingsClassLibrary.jar

:: Conf file
set configFile=./conf/videoserver/rlab_videoserver.properties

:: Conf file for Wrapper
set configWrapperFile=./conf/videoserver/wrapper_win_videoserver.conf


wrapper -c %configWrapperFile% wrapper.java.classpath.101=%modules_views_path1% wrapper.java.classpath.102=%modules_views_path2% wrapper.java.classpath.103=%modules_views_path3% wrapper.java.classpath.104=%modules_views_path4% wrapper.app.parameter.1=%configFile%

