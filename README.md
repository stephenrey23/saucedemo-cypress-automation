[![Cypress Tests](https://github.com/stephenrey23/saucedemo-cypress-automation/actions/workflows/main.yml/badge.svg)](https://github.com/stephenrey23/saucedemo-cypress-automation/actions/workflows/main.yml)
# Proyecto de Automatización SauceDemo - Cypress

Este repositorio contiene un flujo de prueba **End-to-End (E2E)** completo para la plataforma [SauceDemo](https://www.saucedemo.com/), desarrollado con **Cypress**.

##  Descripción del Proyecto
El objetivo de este proyecto es demostrar habilidades en automatización de pruebas para un perfil **Junior QA**, enfocándose en la creación de scripts mantenibles, el uso de datos externos y la validación de flujos de negocio críticos.

### Flujo Automatizado:
- **Login:** Autenticación automática mediante `beforeEach`.
- **Catálogo:** Validación de precios y adición de productos al carrito.
- **Checkout:** Gestión del carrito y flujo de pago completo.
- **Validación Final:** Verificación de mensaje de éxito en la orden.

##  Tecnologías Utilizadas
- **JavaScript** (ES6+)
- **Cypress** (Framework de pruebas)
- **JSON** (Manejo de fixtures para Data-Driven Testing)

##  Estructura del Código
- `cypress/e2e/sauceDemo.cy.js`: Contiene la lógica principal del test.
- `cypress/fixtures/users.json`: Archivo con los datos de prueba (usuarios, claves y datos de envío).

##  Arquitectura: Data-Driven Testing
El proyecto utiliza un enfoque **Data-Driven**, lo que significa que la lógica de la prueba está separada de los datos. Esto permite:
1. Cambiar los datos de prueba sin tocar el código.
2. Escalar las pruebas fácilmente.
3. Mantener el código limpio y profesional.


