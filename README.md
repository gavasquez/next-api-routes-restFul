# Development
Pasos para levantar la app en desarrollo

1. Levantar la base de datos
```
docker compose up -d
```

2.  Instalar dependencias
```
npm install
```

3. Ejecutar
```
npm run dev
```

4. Renombrar el .env.template a .env
5. Reemplazar las variables de entorno
6. Ejecutar el SEED para [crear la base de datos local](localhost:3000/api/seed)

# Prisma Comands
```
npx prisma init
npx prisma migrate dev
npx prisma generate
```