# ai-document-assistant
AI assistant that answers questions from upload documents using LLM APIs
# AI Document Assistant

## Problem
Organizations store thousands of documents such as invoices, policies, contracts, and manuals.  
Employees spend a lot of time searching these documents to find specific information.

## Solution
AI Document Assistant allows users to upload documents and ask questions about them.  
The system reads the document content and generates answers using a Large Language Model (LLM).

Example:
User: What is the invoice amount?
AI: The invoice amount is ₹12,500.

## Architecture
User Upload Document
↓
Backend extracts document text
↓
User asks question
↓
Question + document text sent to LLM API
↓
AI generates answer

## Technologies
- Node.js
- REST APIs
- LLM APIs
- Document text extraction

## Future Improvements
- Support multiple document formats
- Add vector database for faster search
- Deploy as web application
