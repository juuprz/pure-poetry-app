const generatePoem = (selectedTemplate, userInput) => {
  const poemTemplates = {
    winter: `${userInput.prepositions[0]} the brutally long winter ${userInput.prepositions[1]} the sleepy town
Luckily, no ${userInput.adjectives[0]} ${userInput.nouns[0]} ${userInput.prepositions[2]} the trees were ${userInput.verbs[0]}
${userInput.adjectives[1]}, the man ${userInput.verbs[1]} ${userInput.adverbs[0]} and waited ${userInput.adverbs[1]}
but the ${userInput.nouns[1]} could ${userInput.adverbs[2]} ${userInput.verbs[2]} that a ${userInput.nouns[2]} could be so ${userInput.adjectives[2]}.`,
  };
  return poemTemplates[selectedTemplate];
};

module.exports = {
  generatePoem,
};
