# Configuración de Cloudinary

Para que la funcionalidad de subida de archivos PDF funcione correctamente, debes configurar las siguientes variables de entorno en un archivo `.env` en la raíz del proyecto:

```
# Cloudinary Configuration
REACT_APP_CLOUDINARY_CLOUD_NAME=dxbgakgxk
REACT_APP_CLOUDINARY_UPLOAD_PRESET=ml_default
```

## Pasos para verificar la configuración

1. Asegúrate de que el archivo `.env` esté en la raíz del proyecto (mismo nivel que package.json)
2. Verifica que las variables tengan los valores correctos
3. Reinicia el servidor de desarrollo después de crear o modificar el archivo `.env`

## Solución de problemas

Si recibes un error "Unauthorized" al intentar subir archivos a Cloudinary:

1. Verifica que el cloud name sea correcto: `dxbgakgxk`
2. Asegúrate de que el upload preset esté configurado como sin autenticación (unsigned): `ml_default`
3. Comprueba que el upload preset permita subidas desde tu dominio

## Método de respaldo

Si Cloudinary no funciona, el sistema utilizará automáticamente un método alternativo para enviar el archivo PDF como un correo electrónico separado. 