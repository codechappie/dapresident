import { createPool } from 'mysql2/promise';

export async function connect() {
    const connection = await createPool({
        host: 'bdmlt452ot48opaaabaz-mysql.services.clever-cloud.com',
        database: 'bdmlt452ot48opaaabaz',
        user: 'uat5ips2gvhbw7fo',
        password: 'kJsoGZhvvO6GUF0XK3HE',
        connectionLimit: 100
    });
    return connection;
}