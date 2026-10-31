import { Elysia } from 'elysia';

new Elysia()
	.get('/', 'Hello from Elysia!')
    .listen(3000);
