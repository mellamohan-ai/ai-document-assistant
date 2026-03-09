# AI Document Assistant Architecture

## System Overview

The system allows users to upload documents and ask questions about them.
The backend extracts document text and sends the user question along with
the document content to a Large Language Model (LLM) API.

The AI model generates an answer based on the document content.

## Components

Frontend
User interface where users upload documents and ask questions.

Backend
Node.js server that processes documents and communicates with the AI model.

LLM API
AI model that generates answers based on document text.

## Data Flow

User uploads document
↓
Backend extracts document text
↓
User asks question
↓
Backend sends question + document text to LLM API
↓
AI generates response
↓
Answer returned to user
