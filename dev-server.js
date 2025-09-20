const { spawn } = require('child_process');

console.log('Starting Next.js development server...');

const nextDev = spawn('npx', ['next', 'dev'], {
  stdio: 'inherit',
  shell: true,
  cwd: process.cwd()
});

nextDev.on('error', (error) => {
  console.error('Error starting dev server:', error);
});

nextDev.on('close', (code) => {
  console.log(`Dev server exited with code ${code}`);
});

// Handle process termination
process.on('SIGINT', () => {
  console.log('\nShutting down dev server...');
  nextDev.kill('SIGINT');
  process.exit(0);
});

process.on('SIGTERM', () => {
  nextDev.kill('SIGTERM');
  process.exit(0);
});
