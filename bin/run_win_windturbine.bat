@echo off
echo "Starting RLAB Component Server --> WIND TURBINE"
echo "Press CTRL-C to stop server. If any problem will ocurr, the rlab log file located in the log directory will indicate the problem".


:: Aqui se ponen los jar que implementan 
:: las vistas/modulos para que los cargue al arrancar la 
:: aplicacion
:: Lista separada por comas
set modules_views_path1=../examples/wind_turbine/code/WindTurbineModule.jar
set modules_views_path2=../examples/servidor_video/code/CameraViewer.jar
set modules_views_path3=../examples/servidor_video/code/ImageViewerAxis.jar
set modules_views_path4=../examples/servidor_video/code/VideoServerRLABModule.jar
set modules_views_path5=../examples/servidor_video/code/VideoRecordingsClassLibrary.jar
set modules_views_path6=../examples/wind_turbine/code/WindTurbineView.jar
set modules_views_path7=../examples/wind_turbine/code/SteelSeries-3.9.30.jar
set modules_views_path8=../examples/wind_turbine/code/trident-6.3.jar



:: Conf file
set configFile=./conf/wind_turbine/rlab_windturbine.properties

:: Conf file for Wrapper
set configWrapperFile=./conf/wind_turbine/wrapper_windturbine.conf


wrapper -c %configWrapperFile% wrapper.java.classpath.101=%modules_views_path1% wrapper.java.classpath.102=%modules_views_path2% wrapper.java.classpath.103=%modules_views_path3% wrapper.java.classpath.104=%modules_views_path4% wrapper.java.classpath.105=%modules_views_path5% wrapper.java.classpath.106=%modules_views_path6% wrapper.java.classpath.107=%modules_views_path7% wrapper.java.classpath.108=%modules_views_path8% wrapper.app.parameter.1=%configFile%

