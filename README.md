# React-Native Portafolio

## Descripción
Este proyecto tiene dos branches:
1. **base:** Contiene el código básico necesario para iniciar una aplicación en React Native.
2. **pintar:** Contiene una aplicación que permite a los niños pintar sobre imágenes.

## Características del Proyecto

### Branch base
- Configuración básica de una aplicación en React Native.
- Incluye las siguientes tecnologías:
  - Redux Thunk
  - React Navigation
  - Entre otras librerías esenciales.

### Branch pintar
- Todas las tecnologías del branch base.
- @shopify/react-native-skia: Proporciona la funcionalidad de pintar.
- AWS: Trae las imágenes de un bucket.
- Google AdMob: Añade anuncios a la aplicación.
- Características adicionales:
  - Vista de categorías de dibujos.
  - Lista de dibujos.
  - Tablero para pintar al seleccionar un dibujo.

## Capturas de Pantalla
![Pantalla principal](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOG1kNGN1ZmR6dXFnaDZyd3k0enFneXpoendoaXBxcWZtbXVxcGJrNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Jso33LkLyCLd4Bxhey/giphy.gif)

## Instalación
1. Clonar el repositorio:
    ```bash
    git clone https://github.com/smpulgarin9/React-Native-Portfolio.git
    ```
2. Navegar al branch deseado:
    ```bash
    cd React-Native-Portfolio
    git checkout base # o git checkout pintar
    ```
3. Instalar las dependencias:
    ```bash
    npm install
    ```
4. Ejecutar la aplicación:
    ```bash
    npx react-native run-android
    # o
    npx react-native run-ios
    ```

## Uso de la Aplicación
1. Seleccionar la imagen.
2. Elegir los colores.
3. Seleccionar el grosor del pincel.

## Contribuciones
No acepto contribuciones en este momento.

## Licencia
Este proyecto está bajo la licencia MIT.