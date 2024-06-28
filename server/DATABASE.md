# Database Schema

Database design and models for Chitchat messaging platform.

## Models

### User
- id: String (UUID)
- name: String
- email: String (unique)
- image: String
- provider: Enum (Google)
- createdAt: DateTime

### Message  
- id: String (UUID)
- content: String
- senderId: String
- senderName: String
- roomId: String
- messageType: String (user, demo, system)
- createdAt: DateTime

### Room
- id: String (UUID)
- name: String
- type: Enum (PRIVATE, DEMO, GROUP)
- createdBy: String
- createdAt: DateTime

## Indexes
- Messages: roomId, senderId, createdAt
- Users: email (unique)
- Rooms: createdBy, type

## Relationships
- Users can have many Messages
- Rooms can contain many Messages
- Users can create many Rooms

## Data Integrity
- Foreign key constraints
- Cascade delete policies  
- Input validation
- SQL injection prevention
