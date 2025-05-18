# Indra Frontend Challenge 🚀

Este proyecto es una aplicación desarrollada como parte del **reto técnico frontend de Indra**. Está construida usando **React + Vite**, con enfoque modular y buenas prácticas modernas de desarrollo frontend.

---

## 📦 Tecnologías y bibliotecas utilizadas

| Librería                   | Uso principal                         | Motivo de elección                                           |
| -------------------------- | ------------------------------------- | ------------------------------------------------------------ |
| **React 19**               | Framework base para la UI             | Amplio soporte, comunidad y flexibilidad                     |
| **Vite**                   | Herramienta de build y dev server     | Alta velocidad de desarrollo y compilación                   |
| **React Hook Form + Yup**  | Manejo y validación de formularios    | Rendimiento superior y validación robusta                    |
| **Zustand**                | Estado global                         | API simple y minimalista para manejo de estado               |
| **React Router DOM v7**    | Navegación y enrutamiento             | Control total del enrutamiento y fácil configuración         |
| **React Query (TanStack)** | Manejo de peticiones y caché de datos | Evita boilerplate en lógica de datos y mejora UX con caching |
| **Axios**                  | Cliente HTTP                          | API intuitiva y cancelación de peticiones                    |
| **SASS**                   | Preprocesador CSS                     | Organización modular de estilos                              |
| **Jest + Testing Library** | Testing                               | Para pruebas unitarias de componentes y hooks                |
| **ESLint + Prettier**      | Linter y formateo                     | Estilo consistente en todo el proyecto                       |
| **TypeScript**             | Tipado estático                       | Prevención de errores y mejor DX                             |

---

## 🗂️ Estructura del proyecto

src/
├── app/ # Configuración global
├── features/ # Funcionalidades divididas por dominio
├── shared/ # Componentes y utilidades reutilizables
├── assets/ # Imágenes y estilos
├── App.tsx # Entrada de la aplicación
└── main.tsx # Inicialización de React

- Se utilizó una **arquitectura modular basada en features**, que favorece la escalabilidad y el mantenimiento del código.

---

## 👥 Organización del equipo y tareas

| Miembro | Tareas principales                                         |
| ------- | ---------------------------------------------------------- |
| Dev A   | Estructura del proyecto, configuración Vite, estado global |
| Dev B   | Implementación de componentes y lógica de formularios      |
| Dev C   | Estilos, diseño responsive y pruebas unitarias             |
| Todos   | Revisión cruzada de código, documentación y despliegue     |

La colaboración se realizó mediante GitHub (pull requests, branches por feature).

---

## 🚀 Cómo levantar el proyecto

### Requisitos

- Node.js `>=18`
- pnpm / npm / yarn

### Instalación y ejecución

```bash
# Clonar el repo
git clone https://github.com/danielalv777/Indra-frontend-challenge.git
cd indra-frontend-challenge

# Instalar dependencias
npm install

# Ejecutar el proyecto en modo desarrollo
npm run dev

# Compilar para producción
npm run build

# Ejecutar los tests
npm run test
```
