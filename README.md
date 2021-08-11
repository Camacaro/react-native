# react-native
React Native: Aplicaciones nativas para IOS y Android

### 01- Reforzamiento de de las bases con TypeScript
### 02- Primera App
* Hola Mundo en React Native
* Cambios en el State
* Contador
* Re-utilización de componentes
* Pantallas
* Componentes personalizados
* Stylesheet
* Envío de argumentos a componentes
* Tipando props
* Componentes como:
* View
* Text
* TouchableOpacity
* TouchableNativeFeedback
* TouchableWithoutFeedback
* Componentes basicos https://reactnative.dev/docs/components-and-apis
# Tips
Los botones son poco usados hay que usar TouchableOpacity, TouchableHighlight y/o TouchableWithoutFeedback

View: Contiene 0 px de ancho y alto

Todos los Textos deben de estar dentro del componente Text

## 02-MiPrimeraApp
En esta sección nos enfocaremos principalmente en comprender los 3 bloques principales para el diseño de aplicaciones en React Native:

* Box Object Model
* Position
* Flex Layout

## 03-Calculadora
Entraremos en detalles en cada uno de estos tres bloques de diseño para poder sentir que tenemos la libertad necesaria para crear los diseños funcionales que queramo

Esta sección es nuestra primera aplicación oficial en React Native, crearemos una calculadora que use componentes re-utilizables, custom hooks, cálculos matemáticos y estilo Flex para lograr el aspecto visual deseado.

Puntualmente veremos:
* Flex layout
* useState
* useRef
* useCalculadora - Custom Hook
* View
* SafeAreaView
* Text
* StyleSheets
* Tema global
* Estilos condicionales
* Y más

## 04-Calculadora
Aquí empezaremos con el Stack y Drawer navigation, comprender cada uno de los diferentes controles de navegaciones es una pieza fundamental el cualquier aplicación móvil, por lo que procuremos aprender cada uno de ellos para poderlos mezclar y lograr el objetivo que tenemos para nuestra aplicación.

### Navigation
Leer documentacion para instalacion https://reactnavigation.org/
* Stack Navigation
  Las pantallas se mantienen activas y las nuevas se montan encimas
  ```npm install @react-navigation/native```
* Drawer Navigation
  menu lateral
  ```npm install @react-navigation/drawer react-native-gesture-handler react-native-reanimated```
  #### Problemas con el react-native-reanimated
  seguir los pasos de la doc https://docs.swmansion.com/react-native-reanimated/docs/installation/ y reset cache
  * npm cache clean --force
  * cd android
  * gradlew clean
  * gradle cleanBuildCache
  * gradlew build --refresh-dependencies
  * cd ..
  * npx react-native start --reset-cache
  * npx react-native run-android


BottomTab Navigation
MaterialTop Navigations