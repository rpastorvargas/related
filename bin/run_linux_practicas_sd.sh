#!/bin/bash

echo "Starting Practica SD RLAB Componente Server...."
echo "Press CTRL-C to stop server. If any problem will ocurr, the rlab log file located in the log directory will indicate the problem".


# Aqui se ponen los jar que implementan 
# las vistas/modulos para que los cargue al arrancar la aplicacion
# Lista separada por comas
modules_views_path1=../examples/practicas_sd/code/SimpleGeneratorModule.jar
modules_views_path2=../examples/practicas_sd/code/CameraViewer.jar
modules_views_path3=../examples/practicas_sd/code/ejs_levitador.jar
modules_views_path4=../examples/practicas_sd/code/GlgCE.jar
modules_views_path5=../examples/practicas_sd/code/GlgGraphLayout.jar
modules_views_path6=../examples/practicas_sd/code/ImageViewerAxis.jar
modules_views_path7=../examples/practicas_sd/code/MAGLEV_EJSView.jar
modules_views_path8=../examples/practicas_sd/code/SignalGeneratorGLGView.jar
modules_views_path9=../examples/practicas_sd/code/VideoServerRLABModule.jar

# Conf file
configFile=./conf/rlab_practicas_sd.properties

# Conf file for Wrapper
configWrapperFile=./conf/wrapper_linux_practicas_sd.conf


./wrapper -c $configWrapperFile wrapper.java.classpath.101=$modules_views_path1 wrapper.java.classpath.102=$modules_views_path2 wrapper.java.classpath.103=$modules_views_path3 wrapper.java.classpath.104=$modules_views_path4 wrapper.java.classpath.105=$modules_views_path5 wrapper.java.classpath.106=$modules_views_path6 wrapper.java.classpath.107=$modules_views_path7 wrapper.java.classpath.108=$modules_views_path8 wrapper.java.classpath.109=$modules_views_path9 wrapper.app.parameter.1=$configFile
