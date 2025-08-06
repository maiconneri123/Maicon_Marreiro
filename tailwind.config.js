/** @type {import('tailwindcss').Config} */
module.exports = {
  // O campo 'content' é crucial para o IntelliSense.
  // Ele informa ao Tailwind e ao IntelliSense onde procurar por classes.
  // Adapte os caminhos para refletir a estrutura do seu projeto.
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Exemplo para React/Vue/Svelte na pasta 'src'
    "./public/**/*.html", // Se você tiver arquivos HTML na pasta 'public'
    "./pages/**/*.{js,jsx,ts,tsx}", // Exemplo para Next.js na pasta 'pages'
    "./components/**/*.{js,jsx,ts,tsx}", // Exemplo para componentes
    // Adicione mais caminhos se suas classes estiverem em outros diretórios ou tipos de arquivo.
    // Ex: "./*.html" se você tiver arquivos HTML na raiz do projeto
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}