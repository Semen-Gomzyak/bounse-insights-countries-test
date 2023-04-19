# Базовый образ, основанный на Node.js
FROM node:14

# Копируем папки с приложением в контейнер
COPY ./backend /app/backend
COPY ./frontend /app/frontend

# Устанавливаем рабочую директорию
WORKDIR /app

# Устанавливаем зависимости для backend
RUN cd backend && npm i

# Устанавливаем зависимости для frontend
RUN cd frontend && npm i

# Открываем порт, на котором будет работать сервер
EXPOSE 3000

# Запускаем сервер
CMD ["sh", "-c", "cd backend && npm run start & cd frontend && npm run build"]