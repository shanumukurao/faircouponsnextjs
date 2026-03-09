import { users } from "../../app/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(users);
}

// export default function handler(req, res) {
//     if (req.method === 'GET') {
//         // Handle GET request
//         res.status(200).json({ message: 'Hello, world!' });
//     } else {
//         // Handle other HTTP methods
//         res.status(405).json({ message: 'Method not allowed' });
//     }
// }
