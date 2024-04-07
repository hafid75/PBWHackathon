#!/bin/bash

# Nombra la variable del namespace para su uso en las etiquetas de las imágenes
NAMESPACE="hackathonParis"

# Construir la imagen para el servidor
echo "Construyendo la imagen del servidor..."
docker build -t $NAMESPACE.registry.io/server:latest ../server

# Verificar si la construcción fue exitosa
if [ $? -eq 0 ]; then
    echo "Imagen del servidor construida con éxito."
else
    echo "Falló la construcción de la imagen del servidor."
    exit 1
fi

# Construir la imagen para el web-server
echo "Construyendo la imagen del web-server..."
docker build -t $NAMESPACE.registry.io/web-server:latest ../web-server

# Verificar si la construcción fue exitosa
if [ $? -eq 0 ]; then
    echo "Imagen del web-server construida con éxito."
else
    echo "Falló la construcción de la imagen del web-server."
    exit 1
fi

echo "Construcción de imágenes completada."
