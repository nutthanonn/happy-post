const profile_image: Array<string> = [
  "https://i.pinimg.com/564x/2e/94/fb/2e94fb4af305452881ee181d8dd58823.jpg",
  "https://i.pinimg.com/564x/7a/27/ee/7a27eefa2df7fa693064c6e9aa96a0f9.jpg",
  "https://i.pinimg.com/564x/15/01/65/150165ab111d2b01c13632a6433dc3a1.jpg",
  "https://i.pinimg.com/564x/89/9e/ea/899eea075b4ffd3551834d6ad610cf00.jpg",
  "https://i.pinimg.com/564x/8f/05/b5/8f05b5d9e11bfad28b186895c62657d3.jpg",
  "https://i.pinimg.com/564x/87/92/f4/8792f4fb06e6209f1e30c40d2387a426.jpg",
];

export function randomProfile() {
  return profile_image[Math.floor(Math.random() * profile_image.length)];
}
