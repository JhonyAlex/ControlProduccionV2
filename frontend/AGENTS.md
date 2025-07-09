# AGENTS.md

## Definición de Agentes y Automatizaciones

Este archivo documenta todos los agentes, automatizaciones, bots internos, o lógica especial que opera sobre el sistema de Control de Producción.  
Incluye roles, responsabilidades, triggers y lógica relevante.

---

## Índice

- [Definición general](#definición-general)
- [Agentes implementados](#agentes-implementados)
- [Automatizaciones planificadas](#automatizaciones-planificadas)
- [ToDos y mejoras](#todos-y-mejoras)

---

## Definición general

Actualmente el sistema **NO** incluye agentes automáticos ni bots en producción.  
Este archivo servirá para documentar futuras automatizaciones y lógica de negocio avanzada, incluyendo:

- Notificaciones automáticas a usuarios
- Flujos de asignación de pedidos
- Detección de bloqueos en etapas
- Actualizaciones inteligentes de estado
- Integración con APIs externas o IA

---

## Agentes implementados

*(A completar en futuros commits)*

| Nombre         | Descripción                                      | Trigger          | Acción principal           |
|----------------|--------------------------------------------------|------------------|---------------------------|
| -              | -                                                | -                | -                         |

---

## Automatizaciones planificadas

- **Al mover un pedido a una nueva etapa**, enviar notificación automática al jefe de producción responsable.
- **Detectar pedidos estancados** más de X horas en una etapa y marcar visualmente o notificar.
- **Asignación automática de máquina** según tipo de impresión y disponibilidad.

---

## ToDos y mejoras

- [ ] Definir estructura de agentes cuando se implemente la primera automatización.
- [ ] Añadir ejemplos de payloads, eventos y respuestas.
- [ ] Documentar integración con IA o sistemas externos (si aplica).

---

> **Nota:** Actualiza este archivo cada vez que agregues una automatización o agente relevante. Será referencia clave para desarrolladores, IA asistentes (Codex, ChatGPT) y para auditoría técnica.
