# Chitchat Configuration

Configuration files and environment setup for Chitchat client.

## Environment Variables

Create a `.env.local` file in the root of the client directory:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
DATABASE_URL=your-database-url
```

## Database Setup
- Configure Prisma ORM
- Set up authentication with NextAuth
- Configure Google OAuth provider

## Development Notes
- Use TypeScript for type safety
- Implement responsive design with Tailwind CSS
- Integrate Socket.io for real-time features
