import { pool } from "@/lib/pool";

export async function GET() {
  const query = await pool.query('SELECT calculate_total_value(2022,2024,593,110)');
  return Response.json(query.rows[0].calculate_total_value);
} 
