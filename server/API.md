# Server Configuration

Backend configuration and API documentation for Chitchat.

## API Endpoints

### Health Check
- GET `/api/health` - Server health status

### Socket.io Events
- `connection` - Client connects to server
- `join-room` - User joins a chat room
- `send-message` - Send message to room
- `disconnect` - Client disconnects

## Middleware
- CORS: Cross-origin resource sharing
- Express JSON parser
- Socket.io real-time engine

## Security
- Input validation
- Rate limiting
- Authentication verification

## Performance
- Connection pooling
- Message queuing
- Horizontal scaling support
