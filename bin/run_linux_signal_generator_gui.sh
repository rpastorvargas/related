#!/bin/bash
echo "Starting RLAB Componente Server (Signal Generator System with GUI)...."
echo "Press CTRL-C to stop server. If any problem will ocurr, the rlab log file located in the log directory will indicate the problem".

# Aqui se ponen los jar que implementan 
# las vistas/modulos para que los cargue al arrancar la 
# aplicacion
# Lista separada por comas
modules_views_path1=../examples/signal_generator_gui/code/SimpleGeneratorModule.jar
modules_views_path2=.../examples/signal_generator_gui/code/SignalGeneratorGLGView.jar
modules_views_path3=.../examples/signal_generator_gui/code/GlgCE.jar
modules_views_path4=.../examples/signal_generator_gui/code/GlgGraphLayout.jar

# Conf file
configFile=./conf/rlab_SignalGeneratorGUI.properties

# Conf file for Wrapper
configWrapperFile=./conf/wrapper_linux_sggui.conf

./wrapper -c $configWrapperFile wrapper.java.classpath.100=$modules_views_path1 wrapper.java.classpath.101=$modules_views_path2 wrapper.java.classpath.102=$modules_views_path3 wrapper.java.classpath.103=$modules_views_path4 wrapper.app.parameter.1=$configFile

