import '../styles/main.scss';

const root = document.createElement('div');
root.id = 'app-root';

const title = document.createElement('h1');
title.textContent = 'SPA Minigame Project';

root.append(title);
document.body.append(root);
