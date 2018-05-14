#!/bin/bash
echo "Starting RLAB Componente Server (Signal Generator System)...."
echo "Press CTRL-C to stop server. If any problem will ocurr, the rlab log file located in the log directory will indicate the problem".

# Aqui se ponen los jar que implementan 
# las vistas/modulos para que los cargue al arrancar la 
# aplicacion
# Lista separada por comas
modules_views_path1=../examples/signal_generator/code/SimpleGeneratorModule.jar

# Conf file
configFile=./conf/rlab_SignalGenerator.properties

# Conf file for Wrapper
configWrapperFile=./conf/wrapper_linux_sg.conf

./wrapper -c $configWrapperFile wrapper.java.classpath.100=$modules_views_path1 wrapper.app.parameter.1=$configFile

