function menuChoice(choice) {
  let result;

  switch (choice) {
    case 1:
      result = "Start Game";
      break;
    case 2:
      result = "Load Game";
      break;
    case 3:
      result = "Settings";
      break;
    case 4:
      result = "Exit";
      break;
    default:
      result = "Invalid Choice";
      break;
  }

  return result;
}

// Test
console.log(menuChoice(1)); // Start Game
console.log(menuChoice(2)); // Load Game
console.log(menuChoice(3)); // Settings
console.log(menuChoice(4)); // Exit
console.log(menuChoice(5)); // Invalid Choice
