@echo off
echo "Starting RLAB Component Server --> TANK MODEL"
echo "Press CTRL-C to stop server. If any problem will ocurr, the rlab log file located in the log directory will indicate the problem".


:: Aqui se ponen los jar que implementan 
:: las vistas/modulos para que los cargue al arrancar la 
:: aplicacion
:: Lista separada por comas
set modules_views_path1=../examples/tank_model/code/EJSSimpleTankModelModule.jar
set modules_views_path2=../examples/tank_model/code/ejs_tank.jar
set modules_views_path3=../examples/tank_model/code/TankView.jar
set modules_views_path4=../examples/tank_model/code/ejs_tank_view2.jar



:: Conf file
set configFile=./conf/tank_model/rlab_tank.properties

:: Conf file for Wrapper
set configWrapperFile=./conf/tank_model/wrapper_tank.conf


wrapper -c %configWrapperFile% wrapper.java.classpath.101=%modules_views_path1% wrapper.java.classpath.102=%modules_views_path2% wrapper.java.classpath.103=%modules_views_path3% wrapper.java.classpath.104=%modules_views_path4% wrapper.app.parameter.1=%configFile%

