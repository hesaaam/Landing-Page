export default () => ({
  darkMode: false,
  nextMode: '',

  init() {
      if('nextThemeMode' in localStorage){
          this.nextMode = localStorage.nextThemeMode
      }else{
          this.nextMode = 'dark'
      }

      if (localStorage.theme === 'dark') {
          this.darkMode = true;
      } else {
          this.darkMode = false;
      }
  },
  toDarkMode() {
      localStorage.theme = 'dark';
      localStorage.nextThemeMode = 'system';
      this.darkMode = true;
      this.nextMode = 'system';
  },

  toSystemMode() {
      localStorage.theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      localStorage.nextThemeMode = 'light';
      this.darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.nextMode = 'light';
  },

  toLightMode() {
      localStorage.theme = 'light';
      localStorage.nextThemeMode = 'dark';
      this.darkMode = false;
      this.nextMode = 'dark';
  }
})
