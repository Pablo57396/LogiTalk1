def send_message(self):
        """Бере текст з поля вводу та надсилає його через мережу на сервер."""
        message = self.message_entry.get()
        if message and self.sock:
            # Форматуємо команду у вигляді протоколу: TEXT@Автор@Повідомлення
            data = f"TEXT@{self.username}@{message}\n"
            try:
                self.sock.sendall(data.encode('utf-8'))  # Кодуємо текст у байти для мережі
                self.add_message(message, author=self.username)
            except Exception as e:
                print(f"Помилка відправки: {e}")
                self.add_message("Помилка відправки", author="SYSTEM")
        self.message_entry.delete(0, END)  # Очищаємо поле вводу після відправки