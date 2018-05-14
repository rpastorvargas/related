@echo off
echo "Starting Signal Generator + Motor QET RLAB Componente Server...."
echo "Press CTRL-C to stop server. If any problem will ocurr, the rlab log file located in the log directory will indicate the problem".


:: Aqui se ponen los jar que implementan 
:: las vistas/modulos para que los cargue al arrancar la 
:: aplicacion
:: Lista separada por comas

:: Module code for Signal Generator
set modules_views_path1=../examples/signal_generator/code/*
:: View code for signal generator
set modules_views_path2=../examples/signal_generator_gui/code/*
:: View/Module code for video server
set modules_views_path3=../examples/servidor_video/code/*
:: View code for motor QET
set modules_views_path4=../examples/sg_motorqet/code/*

:: Conf file
set configFile=./conf/sg_motorqet/rlab_sg_motorQET.properties

:: Conf file for Wrapper
set configWrapperFile=./conf/sg_motorqet/wrapper.conf


wrapper -c %configWrapperFile% wrapper.java.classpath.101=%modules_views_path1% wrapper.java.classpath.102=%modules_views_path2% wrapper.java.classpath.103=%modules_views_path3% wrapper.java.classpath.104=%modules_views_path4% wrapper.app.parameter.1=%configFile%

